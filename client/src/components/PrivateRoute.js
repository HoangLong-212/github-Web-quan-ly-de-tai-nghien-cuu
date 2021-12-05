import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { LoginsState_isAuthenticated$ } from "../redux/selectors/index"
import { useSelector, useDispatch } from "react-redux";

export function PrivateRoute({ component: Component, ...rest }){
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    // if(!isLoggedIn) return <Redirect to="/" />;

    // return<Route{...rest}/>
    const isAuthenticated = useSelector(LoginsState_isAuthenticated$);
    return(
    <Route
    {...rest} render ={props=>{
        if(isLoggedIn){
            return<Component {...props}/>;
        }
        else{
            return(
                <Redirect to ={{
                    pathname: "/",
                    state: {
                        from: props.location
                    }   
                }}
                />
            )
        }
    }}
    />)
}    