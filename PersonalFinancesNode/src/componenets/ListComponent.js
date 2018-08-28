import React, { Component } from 'react'
import {
    FlatList,
} from 'react-native'
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