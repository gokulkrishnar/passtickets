import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Home from "./Home";
import * as homeActions from "./Home.Actions";
const mapStateToProps = ({homeReducer})=>{
    return {
        data: homeReducer.data
    };
}
const mapActionToProps = ({dispatch})=>{
    return {
        landingPageActions: bindActionCreators(LandingPageActions, dispatch)
    };
}
export default connect(mapStateToProps,mapActionToProps)(Home);