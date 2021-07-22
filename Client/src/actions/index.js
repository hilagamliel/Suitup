import * as action from '../actionTyps'

export const getAllArticle=(arr)=>{
    return{
        type:action.GET_ALL_ARTICLES,
        payload:arr
    }
}
