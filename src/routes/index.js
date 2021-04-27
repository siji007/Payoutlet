import React, { Fragment } from 'react'
import {Switch,Route} from "react-router-dom";
import PocketMoni from "../component/PocketMoni";
import Card from "../component/Card"
import BuyAirtime from "../component/BuyAirtime"
import ValidatePayment from "../component/ValidatePayment"
import SuccessfulTransac from "../component/SuccessfulTransac"
import FailedTransac from "../component/FailedTransac"
import Report from "../component/Report"
import SignIn from "../component/SignIn"
import SignUp from "../component/SignUp"
const routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/SignIn" component={SignIn}/>
                <Route exact path="/SignUp" component={SignUp}/>
                <Route exact path="/" component={BuyAirtime}/>
                <Route exact path="/PocketMoni" component={PocketMoni}/>
                <Route exact path="/Card" component={Card}/>
                <Route exact path="/ValidatePayment" component={ValidatePayment}/>
                <Route exact path="/SuccessfulTransaction" component={SuccessfulTransac}/>
                <Route exact path="/FailedTransaction" component={FailedTransac}/>
                <Route exact path="/Report" component={Report}/>
            </Switch>
        </Fragment>
    )
}
export default routes;