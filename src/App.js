import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/user-actions";
import Homepage from './pages/homepage/homepage.jsx';
import Shop from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null;
//async here as making request to firestore database
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
           setCurrentUser({
               id: snapshot.id,
               ...snapshot.data()
           })
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />    
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>  ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
