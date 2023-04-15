import { Landing, Home, FormPage, Detail } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  //TODO: Ver si se agregan Heder y Footer
  return (
    <>
     <BrowserRouter>
        <Switch>
          <Route path='/' exact >
            <Landing/>
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/Form'>
            <FormPage />
          </Route>
          <Route path="/detail/:idPais">
            <Detail />
          </Route>
        </Switch>
     </BrowserRouter> 
    </>
  );
}

export default App;
