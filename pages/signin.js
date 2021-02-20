import * as React from 'react'
import { withAuthUser, AuthAction } from 'next-firebase-auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import firebase from '../utils/firebase'

const firebaseUIConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/user',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
}

function SignInPage() {
    return (
        <div>
            <h1>Sign in:</h1>
            <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
})(SignInPage)
