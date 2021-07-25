import { useEffect, useState } from "react";
import axios from 'axios';
import Comment from './Comment'
import './ArticleDetails.scss'

import { useParams } from 'react-router-dom'
import Dialoge from './Dialoge'
const ArticleDetails = (props) => {

    const [article, setArticle] = useState(null);

    //url שליפת קו המאמר מה 
    const { id } = useParams();

    const GetArticle = () => {
        axios.get("http://64.225.73.88:9078/articles/" + id).then(succ => {


            let newArr = [];    // מערך חדש למיון מערך התגובות


            // מעבר על כל מערך התגובות
            succ.data.comments.forEach(element => {
                if (element.response_to_comment_id == null) {

                    //  למערך החדש null הוספת כל איבר שלא שווה ל 
                    newArr.push(element);

                    //לפונקציה רקורסיבית null שליחת כל איבר שלא שווה ל 
                    SortComments(succ.data.comments, element.id, newArr);
                }
            });
            // עדכון מערך התגובות למערך ממוין
            succ.data.comments = newArr;

            setArticle(succ.data);

        }).catch(ee => {
            console.log(ee.massege);
        });
    }


    // פונקצית מייון רקורסיבית
    const SortComments = (arr, num, newArr) => {

        //num - שליפת כל התגובות הקשורות לתגובה מסויימת
        let arrFilter = arr.filter((a) => a.response_to_comment_id == num);

        // =========(מעבר על כל מערך התגובות במידה והמערך לא ריק ====================(טענת היציאה
        if (arrFilter.length != 0)
            arrFilter.forEach(element => {

                // דחיפת כל איבר למערך החדש
                newArr.push(element);

                // שליחת כל איבר לפעולה רקורסיבית
                SortComments(arr, element.id, newArr);
            });
    }

    const scrollTop = () => {
        if (article.comments.length != 0)
            document.getElementById("1").scrollIntoView()
    }
    const scrollEnd = () => {
        if (article.comments.length != 0)
            document.getElementById(article.comments.length).scrollIntoView()
    }

    useEffect(() => {

        //props שליפה של המאמר הנוכחי לפי הקוד הנשלח ב 
        GetArticle();

    }, [])


    return (<>
        {article ? <div>

            <h1>{article.title}</h1>

            <Dialoge Article={article} />

            <button class="ui teal basic button" onClick={scrollTop}>למעלה</button>
            <button class="ui teal basic button" onClick={scrollEnd}>למטה</button>

            <h2>{article.content}</h2>

            <h1>תגובות</h1>

            <div id="allcomment">

                {/* מעבר על רשימת התגובות למאמר זה */}
                {article.comments.map((item, index) => {
                    return (<div className="Comment"><Comment comment={item} /></div>)
                })}</div>

        </div> : null}



    </>);
}

export default ArticleDetails;