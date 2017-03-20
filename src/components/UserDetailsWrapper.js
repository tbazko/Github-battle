import React, {PropTypes} from 'react'

function UserDetailsWrapper(props) {
  return (
    <div className="col-sm-6">
      <p className="lead">{props.header}</p>
      {props.children}
    </div>
  )
}

export default UserDetailsWrapper