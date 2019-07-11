import React,{Component} from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <div>
        <Header/>
          <div className="container">
            <div className="row">
              <ProductList/>
              <ShoppingCart/>
            </div>
        </div> 
      </div>
    )
  }
}

export default App;
