import './App.css'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import AddFriendForm from './components/AddFriendForm'
function App() {
  return (
    <Router>
      <div className="App">
        <h1> hello friends!</h1>
        <Link to="/friends" stype={{marginRight:"16px"}}> see friends</Link>
        <Link to="/friends/add-new"> add friend</Link>
        <Switch>

          <PrivateRoute path="/friends/add-new" component={AddFriendForm}/>
          <PrivateRoute path="/friends" component={FriendsList}/>

          <Route path="/login">
            <Login />
          </Route>

          <Route>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App