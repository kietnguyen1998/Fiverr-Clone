import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { TOKEN } from "../../util/config";
//HOC function component
const createRoute = (condition) => {
  return class extends Component {
    render() {
      const { path, component: RouteComponent, redirectPath, ...restProps } = this.props;
      return (
        <Route
          path={path}
          {...restProps}
          render={(routeProps) => {
            if (condition()) {
              return (
                <RouteComponent
                
                {...routeProps}
                />
              );
            }
            return <Redirect to={redirectPath} />;
          }}
        />
      );
    }
  };
};
export const AuthRoute = createRoute(() => true);

export const PrivateRoute = createRoute(() =>
  localStorage.getItem(TOKEN)
);


