import React, { Component } from 'react'
import {
    AppRegistry,
    FlatList,
    Text,
    View,
    Alert,
    TextInput,
    TouchableHighlight,
    Image,
    Alert,
    Platform,
    StyleSheet,
    RefreshControl
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

