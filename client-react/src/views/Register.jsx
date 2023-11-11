import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();
    const token = localStorage.getItem("access_token")
    const [formData, setData] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
    })

    const handleInput = (event) => {
        const { name, value } = event.target
        setData({ ...formData, [name]: value });

        console.log({ ...formData, [name]: value })
    };


    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios({  //dipersatu
                url: "http://localhost:3000/add-users",
                method: "post",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data:
                {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    phoneNumber: formData.phoneNumber,
                    address: formData.address
                }
            })
            // setData(data)
            console.log(data)
            navigate("/cuisines");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                                        <form onSubmit={handleRegister} className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="username">Username</label>
                                                    <input onChange={handleInput} type="text" id="username" name="username" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                    <input onChange={handleInput} type="email" id="email" name="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                    <input onChange={handleInput} type="password" id="password" name="password" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                    <input onChange={handleInput} type="text" id="phoneNumber" name="phoneNumber" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="address">Address</label>
                                                    <input onChange={handleInput} type="text" id="address" name="address" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                                <Link to={"/pub/cuisines"}>
                                                    <button type="button" className="btn btn-primary btn-lg ms-5">Cancel</button>
                                                </Link>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://sg.sodexo.com/files/live/sites/com-sg/files/Images/inspired%20thinking/food%20across%20cultures.png"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

