import axios from "axios";
import { useEffect, useState } from "react";

{/* <!-- CUISINES TABLE --> */ }


export default function Cuisines() {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios("http://localhost:3000/cuisines");
          console.log(data)
          setData(data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    }, [])

    return (
        <div id="cuisines-table">
            <h2 className="text-center mt-4">The Cuisines</h2><br />
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
                            <td className="pt-3-half">{d.Category.name}</td>
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
                                        <span className="table-edit"><button id="edit-image-button" type="button"
                                            className="btn btn-outline-dark flex-shrink-0">
                                            Edit Image
                                        </button></span><br />
                                    </li>
                                    <li className="m-3">
                                        <span className="table-remove"><button id="remove-button" type="button"
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

            <span><button id="add-cuisine-button" type="button" style={{ float: "right" }}
                className="btn btn-outline-dark flex-shrink-0 me-4">
                Add Cuisine
            </button></span>

        </div>
    )
}

