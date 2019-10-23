import React from 'react';
import store from '../store';
import {removeFromCart} from '../actionCreators';
import {connect} from 'react-redux';

const ShoppingCart = ({cart,removeFromCart})=>{
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
                    {cart.map(product=>
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td><strong style={{color:'green'}}>${product.id}</strong></td>
                            <td><button type="button" class="btn btn-danger" onClick={()=>removeFromCart(product)}>X</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <center>TOTAL <span style={{color:'green',fontWeight:'bold'}}>${cart.reduce((sum,product)=>sum + product.id,0)}</span></center>
        </div>
    )
}


const mapStateToProps = state=>{
    return{
        cart:state.cart
    };
}


const mapDispatchToProps = dispatch =>{
    return{
        removeFromCart(product){
            dispatch(removeFromCart(product));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);