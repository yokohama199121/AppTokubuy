import React, {Component} from "react"
import {Provider} from "react-redux";
import {App} from "./tabNavigation/Tabnavigator";
import {store} from "./redux/AppRedux";

export default class Redux extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
