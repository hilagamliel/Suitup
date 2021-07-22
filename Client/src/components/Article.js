import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Article.scss'
const Article = (props) => {
    return (<>

    {/* קומפוננטת מאמר לצורך הצגתו ברשימה */}


        <Link to={'ArticleDetails/' + props.article.id}>
            <List.Item key={props.article.id}>
                <List.Content floated='right'>
                    <div className="article"> {props.article.title}</div>     
                </List.Content>
            </List.Item>
        </Link>

    </>);
}

export default Article;