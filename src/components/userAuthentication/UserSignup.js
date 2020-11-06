import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Captcha from '../../Captcha';

class UserSignup extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
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
        input["name"] = "";
        input["email"] = "";
        input["phone"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Registration Successful !!');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }

      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
      
      if (!input["phone"]) {
        isValid = false;
        errors["phone"] = "Please enter your mobile number.";
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] !== input["confirm_password"]) {
          isValid = false;
          errors["confirm_password"] = "Passwords must be same.";
        }
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
                            <p style={{fontSize:'20px'}}>Sign up </p>
                              <p >Fill in the form below to get <br />instant access:</p>
                          </div>
                          <div class="form-top-right">
                            <i class="fa fa-pencil"></i>
                          </div>
                          </div>
                          <div class="form-bottom" style={{backgroundColor:'#fff', borderTop:'2px solid red'}}>
                        <form onSubmit={this.handleSubmit} value={this.state.input.name} role="form" action="" method="post" class="registration-form">
                          <div class="form-group">
                            <label class="sr-only" for="form-Name">Name</label>
                              <input type="text" onChange={this.handleChange} name="name" placeholder=" Name..." class="form-name form-control" id="form-name" />
                              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.name}</div>
                            </div>
                            <div class="form-group">
                              <label class="sr-only" for="form-Mobile-No">MobileNo</label>
                              <input type="text" onChange={this.handleChange} value={this.state.input.phone} name="phone" placeholder="MobileNo..." class="form-Mobile-No form-control" id="form-Mobile-no" /> 
                              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.phone}</div>
                            </div>
                            <div class="form-group">
                              <label class="sr-only" for="form-email">Email</label>
                              <input type="text" onChange={this.handleChange} value={this.state.input.email} name="email" placeholder="Email..." class="form-email form-control" id="form-email" />
                              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.email}</div>
                            </div>
                            <div class="form-group">
                              <label class="sr-only" for="form-password">password</label>
                              <input type="password" onChange={this.handleChange} value={this.state.input.password} name="password" placeholder="password..." class="form-password form-control" id="form-password" />
                              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.password}</div>
                          </div>
                            <div class="form-group">
                              <label class="sr-only" for="form-confirmpassword">confirmpassword</label>
                              <input type="password" onChange={this.handleChange} value={this.state.input.confirm_password} name="confirm_password" placeholder="confirmpassword..." class="form-email form-control" id="form-confirmpassword" />
                              <div className="text-danger" style={{fontStyle:'italic', fontFamily:'Helvetica Neue'}}>{this.state.errors.confirm_password}</div>
                          </div>
                          <input type="submit" value="Continue" class="btn btn-success btn-lg btn-block" style={{height:'30px',fontSize:'12px'}}/>
                          <Link to = "/UserLogin"><p style={{marginTop:'20px', color:'blue'}}>Sign in to an existing account</p></Link>
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
  
export default UserSignup;