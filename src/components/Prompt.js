import React, {PropTypes} from 'react'

function Prompt(props) {
  return(
      <div className="jumbotron jumbotron--custom col-sm-6 col-sm-offset-3 text-center">
        <h1>{props.header}</h1>
        <div className="col-sm-12">
          <form action="" onSubmit={props.onSubmitUser}>
            <div className="form-group">
              <input type="text" onChange={props.onUpdateUser} value={props.username} className="form-control" placeholder="Github Username" />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button className="btn btn-blick btn-success" type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
     )
}

Prompt.PropTypes = {
  header: PropTypes.string.isRequired
}

export default Prompt;