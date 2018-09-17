import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import LoginForm from './components/LoginForm';
import Main from './components/Main';

const RouterComponent = createSwitchNavigator({
    LoginForm: { screen: LoginForm },
    Main: { screen: Main }
});

export default RouterComponent;