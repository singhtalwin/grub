import firebase from 'firebase';
import { Navigation, NavigationActions } from 'react-navigation';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({ email, password, navigation }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: user});
                navigation.dispatch(NavigationActions.navigate({
                    routeName: 'Main'
                }));
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: LOGIN_USER_FAIL });
            });
    };
};