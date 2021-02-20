import Link from 'next/link'

export default function Menu() {
    return (
        <nav style={{ padding: '2rem' }}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/signin">Sign in</Link></li>
                <li><Link href="/user">User</Link></li>
                <li><Link href="/admin">Admin</Link></li>
                <li><Link href="/signout">Sign out</Link></li>
            </ul>
        </nav>
    )
}