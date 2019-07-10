import React,{Component} from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            <nav class="navbar navbar-default" style={{backgroundColor:'#f5f5f5'}}>
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                            Shop Cart
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;