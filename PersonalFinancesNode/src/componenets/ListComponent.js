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
import { addNewTask } from '../actions'
import ItemContainer from '../containers/ItemContainer'

export default class ListComponent extends Component {
    render() {
        return (
            <FlatList
                data={this.props.tasks}
                renderItem={({ item, index }) => {
                    return (
                        <ItemContainer {...item}>

                        </ItemContainer>
                    )
                }}
                keyExtractor={( item, index ) => item.taskName}
            >
            </FlatList>
            
        )
    }
}