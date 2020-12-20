import './App.css';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import User from './components/User';

function App() {
  return (
  <>
  <Navbar/>
  <Container>
    <Route exact path="/" render={ () => <div>Home</div> }/>
    <Route exact path="/user/profile" component={User}/>
  </Container>
  </>
  );
}

export default App;