import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/Navbar";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value)
        console.log(event)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
        console.log(event.target.value)
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const { data } = await axios.post("http://localhost:3000/login",
                { email, password })
            console.log(data)
            localStorage.setItem("access_token", data.access_token)
            navigate("/cuisines")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            <section id="login-page">
                <div className="container m-5">
                    <h2 className="mb-4 text-center">LOGIN</h2>
                    <form onSubmit={handleLogin} id="login-form" className="w-50 mx-auto">
                        <div className="form-group">
                            <label htmlFor="login-email">Email</label>
                            <input id="login-email" type="email" className="form-control"
                                name="email" autoComplete="on"
                                value={email} onChange={handleEmail} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="login-password">Password</label>
                            <input id="login-password" type="password" className="form-control"
                                name="password" autoComplete="on"
                                value={password} onChange={handlePassword} required />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
