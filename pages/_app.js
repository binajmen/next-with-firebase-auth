import Link from 'next/link'
import initAuth from '../utils/initAuth'

initAuth()

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Component {...pageProps} />

            <Link href="/" as="/">/home</Link>
            <Link href="/user" as="/user">/user</Link>
            <Link href="/admin" as="/admin">/admin</Link>
        </div>
    )
}

export default MyApp
