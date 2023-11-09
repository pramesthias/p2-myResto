
export default function Register() {
    return (
        <section id="register-page" className="vh-100 gradient-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                        <div className="card-body p-5 text-center">
                            <h2 className="fw-bold mb-2 text-uppercase">Register</h2><br />
                            <form>
                                <div className="form-outline form-white mb-4">
                                    <label className="form-label" htmlFor="registerUsername">Username</label>
                                    <input type="text" id="registerUsername" className="form-control" />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <label className="form-label" htmlFor="registerPassword">Password</label>
                                    <input type="password" id="registerPassword" className="form-control" />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <label className="form-label" htmlFor="registerEmail">Email</label>
                                    <input type="email" id="registerEmail" className="form-control" />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <label className="form-label" htmlFor="registerPhoneNumber">PhoneNumber</label>
                                    <input type="text" id="registerPhoneNumber" className="form-control" />
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <label className="form-label" htmlFor="registerAddress">Address</label>
                                    <input type="text" id="registerAddress" className="form-control" />
                                </div>
                                <br />
                                <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

