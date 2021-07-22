import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import Articles from './components/Articles'
import {  Route, Switch } from 'react-router-dom';
import ArticleDetails from "./components/ArticleDetails";

import { connect } from "react-redux";
const app = (props) => {
    return (<>
        <Switch>
            <Route path={"/ArticleDetails/:id"}>
                <ArticleDetails />
            </Route>
            <Route  path={"/"}>
                <Articles />
            </Route>
        </Switch>
    </>)
}
const mapStateToProps = (state) => {
    return {};
}
export default connect(mapStateToProps, {})(app);

