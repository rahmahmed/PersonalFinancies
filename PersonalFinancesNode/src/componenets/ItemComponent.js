import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    Alert,
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