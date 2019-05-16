import React from "react";

export default class Register extends React.Component {

  constructor (props){
      super(props);
      this.state={
        firstName: '',
        lastName: '',
        userType : '',
        userName : '',
        password : '',
        email : ''
      };
      this.CreateUser = this.CreateUser.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
}
handleInputChange(event){
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState({
    [name]:value
  })
}
CreateUser(){
  console.log(this.state);
  fetch('https://api.us.onelogin.com/api/1/users',{
   method: 'post',

   headers:{
     'Content-Type':'application/json',
     'Authorization': 'bearer:b8dc485e6366553bfa1d76ec5a988cf0d27f91b686a662d15fd889c7d7ef4cf8',
     'Access-Control-Allow-Origin':'*'
   },
   body:JSON.stringify({
     firstname:this.state.firstName,
     lastname:this.state.lastName,
     email:this.state.email,
     username : this.state.userName,
     json:true
   })
 }).then(res =>{if (res.status>=200 && res.status<300) {
   console.log(res.json());
}
});
}

  render() {
    console.log("Register");
    return (
      <div>
      <form class="form-horizontal">

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">First Name</label>
        <div class="col-sm-6">
          <input type="text" value={this.state.firstName} onChange={this.handleInputChange} class="form-control" name="firstName" placeholder="First Name"></input>
        </div>
      </div>
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Last Name</label>
        <div class="col-sm-6">
          <input type="text" value={this.state.lastName} onChange={this.handleInputChange} class="form-control" name="lastName" placeholder="Last Name"></input>
        </div>
      </div>

      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">User Type</label>
        <div class="col-sm-6">
            <select name="userType" class="form-control" value={this.state.userType} onChange={this.handleInputChange}>
            <option disabled defaultValue>--select an option -- </option>
            <option></option>
                  <option value= "Patient">Patient</option>
                  <option value= "Physician">Physician</option>
                  <option value= "Insurance">Insurance Provider</option>
                  <option value= "Pharmacist">Pharmacist</option>
                  <option value= "Nutritionist">Nutritionist</option>
            </select>
            </div>
          </div>
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">Username</label>
            <div class="col-sm-6">
              <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} class="form-control" id="inputEmail3" placeholder="Username"></input>
            </div>
          </div>
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">EmailID</label>
            <div class="col-sm-6">
              <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} class="form-control" id="inputEmail3" placeholder="EmailID"></input>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-6">
              <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} class="form-control" id="inputPassword3" placeholder="Password"></input>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" onClick={this.CreateUser} class="btn btn-primary">Register</button>
            </div>
          </div>
      </form>
      </div>

    );
  }
}
