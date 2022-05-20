import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Electronic from "./Container/Electronic/Electronic";
import Fashion from "./Container/Fashion/Fashion";
import Home from "./Container/Home/Home";
import Jewellery from "./Container/Jewellery/Jewellery";


function App() {
  return (
    <>
        <Header/>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/fashion"} component={Fashion} />
          <Route exact path={"/electronic"} component={Electronic} />
          <Route exact path={"/jewellery"} component={Jewellery} />
        </Switch>
        <Footer/>
    </>
  );
}

export default App;
