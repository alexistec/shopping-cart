import React from 'react';
import {addToCart} from '../actionCreators';
import { directive } from '@babel/types';
import { connect } from 'react-redux';


const styles = {
    products:{
        display:'flex',
        alignItems:'stretch',
        flexWrap : 'wrap'
    },

    product:{
        width:'200px',
        marginLeft:10,
        marginRight:10
    }
}

const ProductList = ({products,addToCart})=>{
    return (
        <div style={styles.products}>
            {products.map(product=>
                <div className="thumbnail" style={styles.product} key={product.id}>
                    <img src={product.thumbnailUrl} alt={product.title} style={{width:100,height:100}}/>
                    <div className="caption">
                        <h4>{product.title}</h4>  
                        <p>
                            <div class="card-footer">
                                <button type="button" onClick={()=>addToCart(product)} class="btn btn-primary btn-lg">Agregar</button>
                            </div>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        products:state.products
    };
};

const mapDispachToProps = dispatch =>{
    return{
        addToCart(product){
            dispatch(addToCart(product));
        }
    };
}


export default connect(mapStateToProps,mapDispachToProps)(ProductList);