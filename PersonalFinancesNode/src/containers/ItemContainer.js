import { connect } from 'react-redux'
import { toggleTask } from '../actions'
import ItemComponent from '../componenets/ItemComponent'

const ItemContainer = connect()(ItemComponent)
export default ItemContainer