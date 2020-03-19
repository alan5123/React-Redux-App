import React from 'react'
import {connect} from 'react-redux'
import Card from './Classes'


const ClassesList = props => {
 
    return (
        <>
        
          {props.error ? (
            <div>{props.error}</div>
           ) : 
          //  (
          // props.classes.map(classes => <div className = 'ClassDiv'> <h2>Class Name:  {classes.name}  </h2> <a href = {`https://www.dndbeyond.com/classes/${classes.name}`} target="_blank rel=noopener." >View Class In More Detail </a> 
      
          // </div>)
          // )
       (props.classes.map(classes => (<Card props = {classes}  />))) }
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
