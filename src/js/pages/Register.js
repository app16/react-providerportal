import React from "react";

export default class Register extends React.Component {

  render() {
    console.log("Register");
    return (
      <div>
      <form class="form-horizontal">

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Full Name</label>
        <div class="col-sm-6">
          <input type="email" class="form-control" id="inputEmail3" placeholder="Full Name"></input>
        </div>
      </div>

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">User Type</label>
        <div class="col-sm-6">
            <select class="form-control">
                  <option>Patient</option>
                  <option>Physician</option>
                  <option>Insurance Provider</option>
                  <option>Pharmacist</option>
                  <option>Nutritionist</option>
            </select>
            </div>
          </div>
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">User ID</label>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="inputEmail3" placeholder="UserID"></input>
            </div>
          </div>

          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-6">
              <input type="password" class="form-control" id="inputPassword3" placeholder="Password"></input>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
          </div>
      </form>
      </div>

    );
  }
}
