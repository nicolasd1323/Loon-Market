import { useState, useEffect } from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Vendors from './screens/Vendors/Vendors'
import VendorCreate from './screens/VendorCreate/VendorCreate'
import VendorDetail from './screens/VendorDetail/VendorDetail'
import VendorEdit from './screens/VendorEdit/VendorEdit'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/users'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'


const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route exact path="/vendors">
          <Vendors user={user} />
        </Route>
        <Route path="/add-vendor">
        {user ? <VendorCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/vendor/:id/edit">
          {user ? <VendorEdit user={user} /> : <Redirect to='/' />}
        </Route>
        <Route exact path="/vendors/:id">
          <VendorDetail user={user}/>
        </Route>
        </Switch>
    </div>
  )
}

export default App
