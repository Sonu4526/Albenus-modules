import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class UserLogin extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["password"] = "";
        this.setState({input:input});
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter Username.";
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
        <>
        <div class="top-content" style={{fontSize:'12px',paddingTop:'20px',fontFamily:'Verdana, Geneva, sans-serif'}}> 	
          <div class="">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-7" style={{marginTop:'150px', fontFamily:''}}>
                          <h2><strong>My Learning Point</strong></h2><h4><span> (India) Ltd.</span></h4><br />
                          <h5 style={{textAlign:'center', textDecoration:'underline', color:'green'}}>Explore us More !!</h5>
                          <div class="description">
                            <p>
                             My Learning Point originated from the idea that there exists a class of readers who respond better to online content and prefer 
                            <a href=""><strong></strong></a>, to learn new skills at their own pace from the comforts of their drawing rooms...   .
                            </p>
                          </div>                       
                      </div>
                      <div class="col-sm-4 form-box">
                        <div class="form-top">
                          <div class="form-top-left">
                            <p style={{fontSize:'20px'}}>Login </p>
                              <p >Please Login below to get <br />instant access:</p>
                          </div>
                          <div class="form-top-right">
                            <i class="fa fa-user"></i>
                          </div>
                          </div>
                          <div class="form-bottom" style={{backgroundColor:'#fff', borderTop:'2px solid red'}}>
                        <form onSubmit={this.handleSubmit} value={this.state.input.name} role="form" action="" method="post" class="registration-form">
                          <div class="form-group">
                            <label class="sr-only" for="form-Name">Username/ Phone no:</label>
                              <input type="text" onChange={this.handleChange} name="username" placeholder=" Username/ Phone no." class="form-name form-control" id="form-name" />
                              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.username}</div>
                            </div>
                
                            <div class="form-group">
                              <label class="sr-only" for="form-password">password</label>
                              <input type="password" onChange={this.handleChange} value={this.state.input.password} name="password" placeholder="password..." class="form-password form-control" id="form-password" />
                              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.password}</div>
                          </div>      
                          <input type="submit" value="Continue" class="btn btn-success btn-lg btn-block" style={{height:'30px',fontSize:'12px'}}/>
                          <Link to = "/UserSignup"><p style={{marginTop:'20px', color:'blue'}}>Don't have an account ? <b>Create One</b></p></Link> 
                        </form>
                      </div>
                      </div>
                      <div class="col-sm-1">

                      </div>
                  </div>
              </div>
          </div>
          
      </div>     
    </>
    );
  }
}
  
export default UserLogin;