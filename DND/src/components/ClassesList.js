import React from 'react'
import {connect} from 'react-redux'


const ClassesList = props => {
    
    return (
        <>
        
          {props.error ? (
            <div>{props.error}</div>
          ) : (
          props.classes.map(classes => <div className = 'ClassDiv'> <h2>Class Name:  {classes.name}  </h2> <a href = {`https://www.dndbeyond.com/classes/${classes.name}`} >View Class In More Detail </a> 
          </div>)
          )}
        </>
      );
    };

 
const mapStateToProps = state => {
    return {
        classes: state.classes
    }
}

export default connect(
    mapStateToProps,
    {}
)(ClassesList)
