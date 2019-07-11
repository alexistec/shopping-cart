import React,{Component} from 'react';
import store from '../store';
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
                                <td><a className="btn btn-delete">X</a></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ShoppingCart;