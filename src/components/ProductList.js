import React,{Component} from 'react';

class ProductList extends Component{
    render(){
        return(
            <div className="col-md-9" style={{marginTop:10}}>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card-deck">
                            <div class="card text-center">
                                <div class="card-block">
                                    <h4 class="card-title">Producto 1</h4>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6zTQtZblua_z_8UUWsDjEj5vbOEt-RNOisCUia3PI0rqCfSW" alt="..." class="img-thumbnail"/>
                                    <p class="card-text">
                                        Apply for parking permit<br />
                                    </p>
                                    <center><strong>$455</strong></center>
                                </div>
                                <div class="card-footer">
                                    <button type="button" class="btn btn-primary btn-lg">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card-deck">
                            <div class="card text-center">
                                <div class="card-block">
                                    <h4 class="card-title">Producto 1</h4>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6zTQtZblua_z_8UUWsDjEj5vbOEt-RNOisCUia3PI0rqCfSW" alt="..." class="img-thumbnail"/>
                                    <p class="card-text">
                                        Apply for parking permit<br />
                                    </p>
                                    <center><strong>$455</strong></center>
                                </div>
                                <div class="card-footer">
                                    <button type="button" class="btn btn-primary btn-lg">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card-deck">
                            <div class="card text-center">
                                <div class="card-block">
                                    <h4 class="card-title">Producto 1</h4>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6zTQtZblua_z_8UUWsDjEj5vbOEt-RNOisCUia3PI0rqCfSW" alt="..." class="img-thumbnail"/>
                                    <p class="card-text">
                                        Apply for parking permit<br />
                                    </p>
                                    <center><strong>$455</strong></center>
                                </div>
                                <div class="card-footer">
                                    <button type="button" class="btn btn-primary btn-lg">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProductList;