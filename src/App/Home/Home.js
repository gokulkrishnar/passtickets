import React from "react";
import _ from "lodash";
import { hashHistory } from "react-router";
// import {Modal ,Button} from "react-bootstrap";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentWillMount() {

    //     if (!_.isEmpty(this.props.routes) && this.props.routes[1].path) {
    //         for (let i = 0; i < this.state.navOptions.length; i++) {
    //             let routingValue = "/" + this.state.navOptions[i].replace(/\s+/g, '-').toLocaleLowerCase();
    //             if (routingValue === this.props.routes[1].path) {
    //                 this.setState({ activeIndex: i.toString() });
    //                 break;
    //             }
    //         }
    //     }
    //     // this.props.landingPageActions.landingPageActionCheck("Hai!");

    // }
    // // componentWillReceiveProps(nextProps){
    // //     console.log("..nextProps", nextProps);
    // // }
    // onClickNavMenu = (e) => {
    //     if (e.target.id) {
    //         this.setState({ activeIndex: e.target.id });
    //         let routingValue = "/" + this.state.navOptions[parseInt(e.target.id)].replace(/\s+/g, '-').toLocaleLowerCase();
    //         hashHistory.push(routingValue.toString());
    //     }

    // }
    // getNavigationMenu = (values) => {
    //     let comp = [];

    //     let { activeIndex } = this.state;
    //     if (!_.isEmpty(values)) {
    //         values.map((value, index) => {
    //             comp.push(<li className={activeIndex === index.toString() ? "active underscore-bar" : ""} id={index} key={index}>{value}
    //             </li>);
    //         });
    //     }
    //     return comp;
    // }
    // // onClickLogout = () => {
    // //     this.setState({ showModel: true });
    // // }
    // handleOkButton = () => {
    //     this.props.landingPageActions.logOutOption();
    // }
    // // handleHide = () => {
    // //     this.setState({ showModel: false });
    // // }
    render() {
        return (
        <div className="landing-page-container">
            <div className="navigation-bar">
                Gokul Application
            </div>  
        </div>);
    }
}
export default LandingPage;