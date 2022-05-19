import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Container/Home/Home";


function App() {
  return (
    <>
        <Header/>
        <Switch>
          <Route exact path={"/"} component={Home} />
        </Switch>
        <Footer/>
    </>
  );
}

export default App;
