import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { TOKEN } from "./util/config";
import { fetchMe } from "./store/action/user";
import { AuthRoute, PrivateRoute } from "./HOCs/Routes";

import Home from "./View/Home";
import Signup from "./View/Signup";
import Signin from "./View/Signin";
import Category from "./View/Category";
import Jobs from "./View/Jobs";
import Detail from "./View/Detail";
import UserInfo from "./View/UserInfo";
import Loading from "./Components/LoadingScreen";

export const history = createBrowserHistory("./HOCs/Routes");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (token)
      dispatch(
        fetchMe(() => {
          window.location.reload();
        })
      );
  }, [dispatch]);

  const isLoading = useSelector((state) => state.loading.isLoading)

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
      <BrowserRouter>
    {isLoading && <Loading/>}
      <Switch>
        <AuthRoute path="/signin" component={Signin} redirectPath="/" />
        <AuthRoute path="/signup" component={Signup} redirectPath="/" />
        <AuthRoute path="/category/:_id" component={Category} redirectPath="/" />
        <AuthRoute path="/categories/jobs" component={Jobs} redirectPath="/" />
        <AuthRoute path="/detail/:_id" component={Detail} redirectPath="/" />
        <PrivateRoute path="/me" component={UserInfo} redirectPath="/" />

        <AuthRoute path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
