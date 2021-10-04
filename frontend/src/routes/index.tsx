import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Contato from '../pages/Contato';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const PrivateRoute = () => {
    <Route />
}

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/contato" component={Contato} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;