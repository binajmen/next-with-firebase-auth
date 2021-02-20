import './firebase'
import { init } from 'next-firebase-auth'

const TWELVE_DAYS = 12 * 60 * 60 * 24 * 1000

const initAuth = () => {
    init({
        authPageURL: '/signin',
        appPageURL: '/user',
        loginAPIEndpoint: '/api/login', // required
        logoutAPIEndpoint: '/api/logout', // required
        firebaseAdminInitConfig: {
            credential: {
                projectId: process.env.FIREBASE_PROJECT_ID,
                privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
                clientEmail: process.env.FIREBASE_ADMIN_CLIENTEMAIL
            },
            databaseURL: process.env.FIREBASE_DATABASE_URL
        },
        firebaseClientInitConfig: {
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
            measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
        },
        cookies: {
            name: 'STBK', // required
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: TWELVE_DAYS,
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production' ? true : false,
            signed: true,
        },
    })
}

export default initAuth
