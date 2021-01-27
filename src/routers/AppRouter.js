import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import {useEffect} from 'react';
import firebase from 'firebase/app';
import {useDispatch} from 'react-redux';
import {login} from '../actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {startLoadingNotes} from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);



    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
                dispatch(startLoadingNotes(user.uid))
            }else{
                setIsLoggedIn(false)
            }
            setChecking(false)
        });
    }, [dispatch, setChecking, setIsLoggedIn])



    if(checking){
        return (
            <h1
                style={{
                    height: '100vh', 
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                Cool people is patience...
            </h1>
        )
    }



    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={ JournalScreen }
                        isAuthenticated={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
