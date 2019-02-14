import React from "react";
import { Store } from "./store";
import { Router, IndexRoute, Route, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import Home from "../src/App/Home/Home.Container";
// import InHousePage from "../src/Application/InHousePage/InHousePage.Container";
// import SupplyPage from "../src/Application/SupplyPage/SupplyPage.Container";
// import BottleReturnsPage from "../src/Application/BottleReturnsPage/BottleReturnsPage.Container";
// import DownloadPage from "../src/Application/DownloadPage/DownloadPage.Container";
// import LoginPage from "../src/Application/LoginPage/LoginPage.Container";

const history = syncHistoryWithStore(hashHistory, Store);

export const routeComponents = (
    <Router history={history} basename={process.env.REACT_APP_ROUTER_BASE || ''}>
        {/* <Route path="/login" component={LoginPage} />
        <Route path="/" component={Home}>
           <IndexRoute component={InHousePage}/>
            <Route path="/in-house" component={InHousePage} />
            <Route path="/supply" component={SupplyPage}/>
            <Route path="/bottle-return" component={BottleReturnsPage}/>
            <Route path="/download" component={DownloadPage}/>
            <Route path="/about" component={()=>(<div>About Page Not Ready Yet!</div>)}/>
            <Route path="*" component={()=>(<div>No Match Found!</div>)} />
        </ Route> */}
        <Route path="*" component={()=> <Home />} />
    </Router>
);