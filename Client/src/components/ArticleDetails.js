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
            console.log(succ.data);
            setArticle(succ.data);
        }).catch(ee => {
            console.log(ee.massege);
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