// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// // import IconDoc from './pages/icon'
// // import ButtonDoc from './pages/button'
// import LayoutDoc from './pages/layout'

// ReactDOM.render(<div>
//   <LayoutDoc/>
//   </div>, document.getElementById('root'))
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  HashRouterProps,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import App from "./App";
import menuConfig from "./router";
import "./index.scss";

const IRouter: React.FC<HashRouterProps> = () => {
  return (
    <HashRouter>
      <App>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route
              path="/components"
              render={({ match }) => {
                return (
                  <Switch>
                    {menuConfig.map((menu) => {
                      return (
                        <Route
                          key={menu.component}
                          component={React.lazy(() =>
                            import(`./pages/${menu.component}`)
                          )}
                          path={`${match.path}/${menu.component}`}
                        />
                      );
                    })}
                  </Switch>
                );
              }}
            />
            <Redirect to="/components/button" />
          </Switch>
        </Suspense>
      </App>
    </HashRouter>
  );
};

ReactDOM.render(<IRouter />, document.querySelector("#root"));
