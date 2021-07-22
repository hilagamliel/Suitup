import { Button, Image, List } from 'semantic-ui-react'
import { connect } from "react-redux";
import Article from './Article';
import { useEffect } from 'react';
import { getAllArticle } from '../actions/index'
import axios from 'axios';

const Articles = (props) => {

    const GetAllArticle = () => {
        axios.get("http://64.225.73.88:9078/articles").then(succ => {
            console.log(succ.data);
            props.getAllArticle(succ.data);
        }).catch(ee => {
            console.log(ee.massege);
        });
    }

    useEffect(() => {

        // שליפת כל המאמרים מהשרת
        GetAllArticle();

    }, [])

    return (props.ArticleArr ? <div className="placelist">
        <List divided verticalAlign='middle'>
            
            <h1>מאמרים</h1>
            {props.ArticleArr.map((item) => {

                return <Article article={item} />     
                
            })} </List>
    </div> : null);
}
const mapStateToProps = (state) => {
    return { ArticleArr: state.ArticleArr }
}
export default connect(mapStateToProps, { getAllArticle })(Articles);
