import React,{Component} from 'react';
import store from '../store';
import {addToCart} from '../actionCreators';


class ProductList extends Component{

    constructor(){
        super();
        this.state = {
            products:[{
                id:1,
                imagen : 'https://www.abcdin.cl/wcsstore/ABCDIN/images/licuadoras/859598F13.jpg',
                product:'Blender',
                price : 1234
            },{
                id:2,
                imagen : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe14ZOVtnuJphNOJE4CmqcQSeKRG6ad9k48mKWQ88SJHYUGZPz',
                product:'Refrigerator',
                price : 233242
            }]
        }
    }
    render(){
        return(
            <div className="col-md-9" style={{marginTop:10}}>
                <div class="row">
                    {this.state.products.map(product=>
                    <div class="col-md-4" key={product.id}>
                        <div class="card-deck">
                            <div class="card text-center">
                                <div class="card-block">
                                    <h4 class="card-title">{product.product}</h4>
                                    <img src={product.imagen} style={{width:200,height:200}} alt="..." class="img-thumbnail"/>
                                    <p class="card-text">
                                        Product in promotion<br />
                                    </p>
                                    <center><strong>${product.price}</strong></center>
                                </div>
                                <div class="card-footer">
                                    <button type="button" onClick={()=>this.addToCart(product)} class="btn btn-primary btn-lg">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>      
                    )}
                </div>
            </div>
        )
    }


    addToCart(product){
        store.dispatch(addToCart(product))
    }
}


export default ProductList;