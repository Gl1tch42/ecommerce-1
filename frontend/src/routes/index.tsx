import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Contato from '../pages/Contato';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';


function Routes(){
    return (
        <BrowserRouter>
        <Route  path="/" exact component={Home}/>
        <Route  path="/produtos" component={Produtos}/>
        <Route  path="/contato" component={Contato}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/cadastro" component={Cadastro}/>
        </BrowserRouter>
    )
}

export default Routes;