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

export default class ListComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return 
        (
            <View style={{ flex: 1}}>
                <TouchableHighlight onPress={() => {
                    
                }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: '0',
                        left: '0',
                        right: '0'
                    }}
                >  
                </TouchableHighlight>
                <Text style={{ margin:20, color: this.props.completed == true ? 'darkgreen' : 'black'}}>
                    {this.props.taskName}
                </Text>
            </View>
        )
    }
}