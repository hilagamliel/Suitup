import * as actions from '../actionTyps'

const initialArticles = {
    ArticleArr: []
}
const ArticlesReducer = (state = initialArticles, action) => {
    state = state ? state : initialArticles;
    switch (action.type) {
        case actions.GET_ALL_ARTICLES:
            return{
                ...state,
                ArticleArr:action.payload
            }
    }
    return state;

}
export default ArticlesReducer;