import React,{Component} from 'react';
import store from '../store';
import {removeFromCart} from '../actionCreators';


class ShoppingCart extends Component{

    constructor(){
        super();

        this.state = {
            cart:[]
        }

        store.subscribe(()=>{
            this.setState({
                cart:store.getState().cart
            })
        })
    }


    removeFromCart(product){
        store.dispatch(removeFromCart(product))
    }


    render(){
        return(
            <div className="col-md-3" style={{marginTop:10}} >
                <h4>Order detail</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Preci</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cart.map(product=>
                            <tr>
                                <td>{product.product}</td>
                                <td><strong style={{color:'green'}}>${product.price}</strong></td>
                                <td><button type="button" class="btn btn-danger" onClick={()=>this.removeFromCart(product)}>X</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <center>TOTAL <span style={{color:'green',fontWeight:'bold'}}>${this.state.cart.reduce((sum,product)=>sum + product.price,0)}</span></center>
            </div>
        )
    }
}

export default ShoppingCart;