import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import DunesExpedition from "./DunesExpedition.js";
import Explain from "./Explain.js";
import Diary from "./Diary";
import Navigation from "../components/Navigation";

const AppRouter = ({refreshUser, isLoggedIn, userObj}) => {
    return(
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}
            <Switch>
                {isLoggedIn ? (
                 <div
                 style={{
                   maxWidth: 890,
                   width: "100%",
                   margin: "0 auto",
                   marginTop: 80,
                   display: "flex",
                   justifyContent: "center",
                 }}
               >
                <Route exact path="/">
                    < Home userObj={userObj}/>
                </Route>
                <Route exact path="/diary">
                    < Diary userObj={userObj} />
                </Route>
                <Route exact path="/profile">
                    <Profile userObj={userObj} refreshUser={refreshUser} />
                </Route>
                <Route exact path="/dunesExpedition">
                    <DunesExpedition />
                </Route>
                <Route exact path="/explain">
                    <Explain />
                </Route>
                </div>                
                ):( 
                <Route exact path="/">
                    <Auth />
                </Route>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter;