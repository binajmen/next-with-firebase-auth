import * as React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import firebase from '../firebase'

const firebaseUIConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
}

export default function SignInScreen() {
    return (
        <div>
            <h1>My App</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}