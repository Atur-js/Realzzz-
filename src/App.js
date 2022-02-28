import { Provider } from "react-redux";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/shared/Navbar";
import Blush from "./components/category/Blush";
import Store from "./components/Store";
import store from "./redux/store";
import ShopCart from "./components/ShopCart";
import Bronzer from "./components/category/Bronzer";
import Eyebrow from "./components/category/Eyebrow";
import Eyeliner from "./components/category/Eyeliner";
import Eyeshadow from "./components/category/Eyeshadow";
import Lipliner from "./components/category/Lipliner";
import Lipstick from "./components/category/Lipstick";
import Mascara from "./components/category/Mascara";
import Hero from "./components/firstpage/Hero";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route path="/products" component={Store} />
            <Route path="/hero" exact component={Hero} />
            <Route path="/cart" component={ShopCart} />
            <Route path="/blush" component={Blush} />
            <Route path="/bronzer" component={Bronzer} />
            <Route path="/eyebrow" component={Eyebrow} />
            <Route path="/eyeliner" component={Eyeliner} />
            <Route path="/eyeshadow" component={Eyeshadow} />
            <Route path="/lipliner" component={Lipliner} />
            <Route path="/lipstick" component={Lipstick} />
            <Route path="/mascara" component={Mascara} />
            <Redirect to="/hero" />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
