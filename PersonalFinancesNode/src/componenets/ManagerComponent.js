import React, { Component } from 'react'
import {
    View,
    Alert,
    Platform,
} from 'react-native'
import AddContainer from '../containers/AddContainer'
import ListContainer from '../containers/ListContainer'

export default class ManagerComponent extends Component {
    render() {
        return (
            <View style={{ flex:1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <AddContainer />
                <ListContainer />
            </View>
        )
    }
}

