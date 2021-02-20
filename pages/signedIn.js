import * as React from 'react'

import firebase from '../firebase'

export default function SignInScreen() {

    React.useEffect(() => {
        const unsub = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user)
            } else {
                console.log('no user..')
            }
        })

        return () => unsub()
    }, [])

    return (
        <div>
            <h1>My App</h1>
            <p>Please sign-in:</p>
        </div>
    );
}