import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDyc9H2eAc--Gnzd62GUkaUNcsaulRubSQ',
      authDomain: 'grub-5f934.firebaseapp.com',
      databaseURL: 'https://grub-5f934.firebaseio.com',
      projectId: 'grub-5f934',
      storageBucket: 'grub-5f934.appspot.com',
      messagingSenderId: '652829562018'
    };

    firebase.initializeApp(config);
  }

  render() {

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
