import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import allReducers from './src/reducers'
import ManagerComponent from './src/componenets/ListComponent'

let store = createStore(allReducers)
const App = () => (
    <Provider store={store}>
        <ManagerComponent />
    </Provider>
);

AppRegistry.registerComponent('PersonalFinancesNode', () => App);