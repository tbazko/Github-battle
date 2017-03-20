import React from 'react'

function MainContainer(props) {
  return (
    <div className="jumbotron jumbotron--custom col-sm-12 text-center">
     {props.children}
    </div>
  )
}

export default MainContainer;