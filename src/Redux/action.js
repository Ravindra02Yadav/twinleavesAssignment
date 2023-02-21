import * as types from './actionTypes'
import axios from 'axios'

const getProducts = (queryParam) => (dispatch) =>{
console.log(queryParam)
dispatch({
    type:types.GET_PRODUCTS_REQUEST
})
axios.get("https://catalog-management-system-kxyaws5ixa-uc.a.run.app/cms/products",queryParam)
.then((res)=>{
    dispatch({
        type:types.GET_PRODUCTS_SUCCESS,
        payload:res.data,
    })
})
.catch((err)=>{
    dispatch({
        type:types.GET_PRODUCTS_FAILURE
    })
})
}

export { getProducts }