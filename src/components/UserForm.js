import React from "react";
import { Form, } from "semantic-ui-react";
import { UserConsumer } from "../providers/UserProvider";

class UserForm extends React.Component {
  state = { username: this.props.username,
            email: this.props.email, 
  };
  handleChange = (e), { name, value }) => this.setState({ [name]: value});
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateUser({
      username:this.state.username, 
      email: this.state.email
    });
  }
  render() {
    const { username, email} = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.onSubmit
          label="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
          />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const ConnectedUserForm = (props) =>{
  return (
    <UserConsumer>
      {user => (
        <UserForm 
          {...props}
          username={user.username}
          email={user.email}
          updateUsert={user.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm;