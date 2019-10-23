import axios from 'axios';

const loadProducts = ()=>{
    return dispatch=>{
        return axios.get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3")
        .then(response =>{
            console.log(response)
            dispatch({
                type:"REPLACE_PRODUCT",
                products:response.data
            })
        });
    }

}


const addToCart = product=>{
    return {
        type:'ADD_TO_CART',
        product
    }
}


const removeFromCart = product=>{
    return{
        type:"REMOVE_FROM_CART",
        product:product
    }
}

export {loadProducts,addToCart,removeFromCart};