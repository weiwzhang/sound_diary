import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAnlti3dRRabujlWRpLyr1TF0-YPuZOR3E",
      authDomain: "sounddiary-919e7.firebaseapp.com",
      databaseURL: "https://sounddiary-919e7.firebaseio.com",
      projectId: "sounddiary-919e7",
      storageBucket: "sounddiary-919e7.appspot.com",
      messagingSenderId: "827832028395"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
