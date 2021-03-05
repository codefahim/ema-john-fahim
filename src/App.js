import "./App.css";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Order from "./components/Order/Order";
import Manage from "./components/Manage/Manage";
import Nomatch from "./components/NoMatch/Nomatch";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/Order">
            <Order></Order>
          </Route>
          <Route path="/Manage">
            <Manage></Manage>
          </Route>
          <Route path="/product/:key">
            <ProductDetails></ProductDetails>
          </Route>

          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
