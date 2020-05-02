import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/signin-signup/SignInAndSignUpPage.jsx";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
//imported auth from firebase so as to know if a used is signed in or out inside of our app

class App extends Component {
  //we convert App component to class based so that we can have access to use object
  // by maintaining a state to store our user.
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  //we are going to use subscription methods on auth to update state of current user when user
  //signs in and signs out.
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(async (snapshot)=>{
           this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, ()=>console.log(this.state) )
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
