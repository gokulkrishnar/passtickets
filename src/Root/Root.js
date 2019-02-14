import React from "react";
import {Provider} from "../Context";
import {Router, Route, hashHistory} from "react-router";
// import {addLocaleData, IntlProvider} from "react-intl";
import ErrorBoundary from "../ErrorHandler"
// import React from "react";
import { Store } from "../store";
// import { Router, IndexRoute, Route, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
//import * as rootActions from "./Root.Actions";
import Home from "../App/Home/Home";

// import LandingPage from "../src/Application/LandingPage/LandingPage.Container";
// import InHousePage from "../src/Application/InHousePage/InHousePage.Container";
// import SupplyPage from "../src/Application/SupplyPage/SupplyPage.Container";
// import BottleReturnsPage from "../src/Application/BottleReturnsPage/BottleReturnsPage.Container";
// import DownloadPage from "../src/Application/DownloadPage/DownloadPage.Container";
// import LoginPage from "../src/Application/LoginPage/LoginPage.Container";

const history = syncHistoryWithStore(hashHistory, Store);
// import en from "react-intl/locale-data/en";
// import zh from "react-intl/locale-data/zh";
// import de from "react-intl/locale-data/de";
// import fr from "react-intl/locale-data/fr";
// import it from "react-intl/locale-data/it";
// import ja from "react-intl/locale-data/ja";
// import pt from "react-intl/locale-data/pt";
// import es from "react-intl/locale-data/es";

// import reactIntlFormat from "../Common/reactIntlFormat";  
// //import {messages} from "../messages";

// [en, zh, de, fr, it, ja, pt, es].forEach(addLocaleData);

//import Home from "../Home/Home.Container";
// import AdminCenter from "../App/AdminCenter/AdminCenter.Container";
// import ProductionCalendar from "../App/ProductionCalendar/ProductionCalendar.Container";
// import Main from "../App/Main/Main";
// import AddContactModal from "../Components/ContactInfo/AddContactModal";
// import CheckArray from "../Components/NotificationSetting/CheckArray";
// import NotificationSetting from "../Components/NotificationSetting/NotificationSetting";
// import DraftDeliveryContainer from "../App/DraftDelivery/DraftDelivery.Container";
// import AllBooks from "../App/AllBooks/AllBooks.Container";
// import PdfViewer from "../Components/PdfViewer";
// import MyDashboards from "../App/MyDashboards/MyDashboards.Container";
// import MyDashboardAlerts from "../App/MyDashboards/MyAlerts/MyAlerts"
// import {VIEW_ONLY, MANAGE_FUNDS} from "../Common/Entitlements/Entitlement.Constants.js";
// import Metrics from "../App/Metrics/Metrics.Container";
// import FileUploadAndRetrieval from "../App/FileUploadAndRetrieval/FileUploadAndRetrieval.Container";
// import AuditHistory from "../App/AdminCenter/AuditHistory/AuditHistory.Container";

// if(!window.localStorage.getItem("locale")){
//   window.localStorage.setItem("locale", "en_US");
// }

// const zero = 0;
// const two = 2;

/**
 * @desc onAppInit
 * @param props - Props (Store, history) from the parent for this stateless component
 */
/**
 * @desc onAppInit
 * @param props - Props (Store, history) from the parent for this stateless component
 */
function onAppInit(props) {
  // const {rootActions} = props;
  return (nextState, replace, cb) => {
    //rootActions.getI18nKeyValueList('en')
        cb()
  };
}

function Root(props) {
  
  console.log(props)
  // const menuFlags = Object.assign({}, menuFunctionFlags);
  // const disabledAdminCenter = menuFlags[MANAGE_FUND] ? true : false;

    return (
      <ErrorBoundary>
          <Provider Store={Store}>
       
       <Router history={ history } >
       {/* <Route path="/pdf" component={ PdfViewer } name="PdfViewer"/> */}
       <Route path="/" component={()=><Home /> } onEnter={ onAppInit(props) }>
       {/* <Route path="/userNotAuthorised" component={ "TestRoute" } name="NotAuthorised"/>

         <Route path="/dashboard" component={ MyDashboards } name="Dashboard">
           <Route path="/dashboard/myDrafts" component={ () =><h2>Inside myBooks</h2>} name="My Books Inner" />
           <Route path="/dashboard/myApprovals" component={ () => <h2>Inside myApprovals</h2> } name="Dashboard Inner" />
           <Route path="/dashboard/myComments" component={ () => <h2>Inside myComments</h2> } name="Dashboard Inner" />
           
               <Route path="/dashboard/myAlerts" component={ () => <h2>Inside myAlerts</h2> } name="Dashboard Inner" />
           <Route path="/dashboard/myCalendar" component={ () => <h2>Inside myCalendar</h2> } name="Dashboard Inner" />
         </Route>
         <Route path="/allBooks" component={ AllBooks } name="All Books">
           <Route path="/allBooks/booksSearch" component={ () => <h2>Inside booksSearch</h2> } name="All Books Inner"/>
           <Route path="/allBooks/alerts" component={ () => <h2>Inside alerts</h2> } name="All Books Inner"/>
           <Route path="/allBooks/comments" component={ () => <h2>Inside comments</h2> } name="All Books Inner"/>
           <Route path="/allBooks/approvals" component={ () => <h2>Inside approvals</h2> } name="All Books Inner"/>
         </Route>
         <Route path="/productionCalendar" component={ () => <ProductionCalendar/> } name="Production Calendar"/>
         <Route path="/draftsReview" component={ () => <DraftDeliveryContainer /> } name="All Books Inner"/>

         <Route path="/metrics" component={ () => <Metrics /> } name="Metrics"/>

         <Route path="/fileUploadandRetrieval" component={ () => <FileUploadAndRetrieval /> } name="File Upload"/>

         <Route path="/adminCenter" component={ AdminCenter } name="Administration Center" >
             <IndexRoute component={ ()=> "" } />
             <Route path="/adminCenter/fundInfo" component={ () => <h2>Calendar</h2>  } name="Fund Information" />
             <Route path="/adminCenter/calendar" component={ () => <h2>Calendar</h2>  } name="Calendar" />
             <Route path="/adminCenter/draftUpload" component={ () => <h2>Draft upload</h2> } name="Calendar" />
             <Route path="/adminCenter/contactNotifications" component={ () => <AddContactModal/> } name="Calendar" />
             <Route path="/adminCenter/auditHistory" component={ () => <AuditHistory/> } name="Audit History" />
         </Route> */}
     </Route>
       </Router>
 </Provider>


      </ErrorBoundary>
    
  );
}


export default Root;
