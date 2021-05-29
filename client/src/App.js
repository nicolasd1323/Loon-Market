import { useState, useEffect } from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Vendors from './screens/Vendors/Vendors'
import VendorDetail from './screens/VendorDetail/VendorDetail'
import { Route, Switch } from 'react-router-dom'
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
        </Route>
        <Route exact path="/vendor/:id/edit">
        </Route>
        <Route exact path="/vendors/:id">
          <VendorDetail user={user}/>
        </Route>
        </Switch>
    </div>
  )
}

export default App
