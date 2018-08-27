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

export default class AddComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{
                backgroundColor: 'tomato',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 64
            }}>
                <TextInput style={{
                    height: 40,
                    width: 200,
                    margin: 10,
                    padding: 10,
                    borderColor: 'white',
                    borderWidth: 1,
                    color: 'white'
                }}
                    keyboardType='default'
                    placeholderTextColor='white'
                    placeholder='Enter task name'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ newTaskName: task })
                        }
                    }
                />
                <TouchableHighlight 
                    style={{ marginRight:10 }}
                    underlayColor='blue'
                    onPress={(event) => {
                        if (!this.state.newTaskName.trim()){
                            return
                        }
                        this.props.onClickAdd(this.state.newTaskName)
                    }}
                >
                    <Image
                        styke={{ width:35, height:35 }}
                        source={require('../resources/icon/add.png')}
                    />
                </TouchableHighlight> 
            </View>
        )
    }
}