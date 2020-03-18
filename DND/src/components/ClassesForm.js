import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../actions'

const ClassesForm = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData()
    }
    
    return (
        <>
        {props.isFetchingData ? (
            <div className = 'fetching'>Fetching Data</div>
        ): (
            <div className = 'btnDiv'>
            <button  onClick = {handleGetData}>Click to see Classes</button>
            </div>
        )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(ClassesForm)