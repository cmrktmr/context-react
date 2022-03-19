import { useContext, useState } from 'react'

import UserContext from '../context/UserContext'

function Profile() {

    const { user, setUser } = useContext(UserContext)


    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({ id: 1, username: "cemre", bio: "lorem" })
            setLoading(false)

        }, 1500)
    }
    return (
        <div>
            {!user && <button onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>}
            <code>{JSON.stringify(user)}</code>
        </div>
    )
}

export default Profile