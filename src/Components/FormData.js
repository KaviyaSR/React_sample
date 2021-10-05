import React from "react";

class FormData extends React.Component {
  state = {
    name: " ",
    lname: " ",
    mail: " ",
    password: " ",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.mail === "") {
      alert("Fields cannot be Empty");
      return;
    }
    this.setState({ name: "", mail: "", lname: "", password: "" });
    console.log(this.state);
    this.props.addDetails(this.state);
  };

  render() {
    return (
      <div className="ui form">
      <form onSubmit={this.add} >
        <div class=" field">
          
            <label>First Name</label>
            <input
              placeholder="First Name"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
         </div>
        <br />
        <br />

        <div class=" field">
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              name="lname"
              value={this.state.lname}
              onChange={(e) => this.setState({ lname: e.target.value })}
            />
          </div>
        <br />
        <br />

        <div class=" field">
            <label>Email ID  </label>
            <input
              placeholder="Mail id"
              name="mail"
              value={this.state.mail}
              onChange={(e) => this.setState({ mail: e.target.value })}
            />
          </div>
        <br />
        <br />

        <div class=" field">
            <label>Password</label>
            <input
            type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
         </div>
        <br />
        <br />

        <button class="ui button" type="submit">
          Register
        </button>
        
      </form>
      </div>
     
    );
  }
}

export default FormData;
