import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "./App.scss";
import {createStore} from 'redux';
import {Provider} from 'react-redux'//※全ての階層からstoreにアクセスできようProviderの実装
import {reducer} from './reducer'


//storeの作成
const store =createStore(reducer);

ReactDom.render(
    //上で作成したstoreを渡す
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);