import { connect } from 'react-redux'
import ListComponent from '../componenets/ListComponent'

console.log("Enter List")

const mapStateToProps = (state) => {
    //alert(`state send to tasks list = ${JSON.stringify(state)}`)
    return {
        task: !state.taskReducers ? [] : state.taskReducers
    }
}

const ListContainer = connect(mapStateToProps)(ListComponent)
export default ListContainer