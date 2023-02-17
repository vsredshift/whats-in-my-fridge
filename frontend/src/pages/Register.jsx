import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"

const Register = () => {
    const [formData, setFormDate] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const { username, email, password, password2 } = formData

    const onChange = () => {
        
    }
    return <>
        <section className="heading">
            <h1>
                <FaUser />Register
            </h1>
            <p>Create an account here</p>
        </section>

        <section className="form">
            <form>
                <input type="text" className="form-control" id="username" name="username" value={username} placeholder="Enter username" onChange={onC
                }/>
            </form>
        </section>
    </>
}

export default Register