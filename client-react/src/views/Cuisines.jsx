import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Cuisines() {

    const [data, setData] = useState([]);
    // const [loading, setLoading] =useState(true)
    const token = localStorage.getItem("access_token")
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/cuisines",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log(data)
            setData(data)
            // setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);


    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/cuisines/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log(id)
            fetchData()
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = async () => {
        localStorage.removeItem("access_token");
        navigate("/pub/cuisines");
    }

    return (
        <>
            <header className="bg-dark py-3">
                <div className="text-center text-white">
                    <h1 className="display-5 fw-bolder">The Cuisines</h1>
                </div>
            </header>
            <div className="row">
                <ul style={{ listStyleType: "none" }}>
                    <li className="m-3">
                        <span><button id="logout-button" type="button" style={{ float: "right" }}
                            className="btn btn-danger top-0 end-0 m-3" onClick={handleLogout}>
                            Log Out
                        </button></span>
                    </li>
                    <li className="m-3">
                        <span><button id="add-cuisine-button" type="button" style={{ float: "right" }}
                            className="btn btn-primary top-0 end-0 m-3">
                            Add Cuisine
                        </button></span>
                    </li>
                </ul>

                <div id="cuisines-table">
                    {/* <br /><h2 className="text-center mt-5">The Cuisines</h2><br /> */}
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th className="text-center">Image</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Description</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Category</th>
                                <th className="text-center">Author</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map((d) => (
                                <tr key={d.id}>
                                    <td className="pt-3-half" style={{ width: '20%', height: '20%' }}><img className="card-img-top"
                                        src={d.imgUrl} />
                                    </td>
                                    <td className="pt-3-half">{d.name}</td>
                                    <td className="pt-3-half">{d.description}</td>
                                    <td className="pt-3-half">{d.price}</td>
                                    <td className="pt-3-half">{d.Category.name}
                                        <Link to={`/categories`}>
                                            <span className="table-detail"><button id="edit-cuisine-button" type="button"
                                                className="btn btn-info mt-3">
                                                Detail
                                            </button></span>
                                        </Link>
                                    </td>
                                    <td className="pt-3-half">{d.User.username}</td>
                                    <td>

                                        <ul style={{ listStyleType: "none" }}>
                                            <li className="m-3">
                                                <span className="table-edit"><button id="edit-cuisine-button" type="button"
                                                    className="btn btn-outline-dark flex-shrink-0">
                                                    Edit
                                                </button></span><br />
                                            </li>
                                            <li className="m-3">
                                                <Link to={`/cuisines/${d.id}/image-url`}>
                                                    <span className="table-edit">
                                                        <button id="edit-image-button" type="button" className="btn btn-warning">
                                                            Edit Image
                                                        </button>
                                                    </span>
                                                </Link><br />
                                            </li>
                                            <li className="m-3">
                                                <span className="table-remove"><button onClick={() => handleDelete(d.id)} id="remove-button" type="button"
                                                    className="btn btn-danger flex-shrink-0">
                                                    Remove
                                                </button></span>
                                            </li>
                                        </ul>

                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

