{/* <!-- CUISINES TABLE --> */ }


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
            <tr>
                <td className="pt-3-half" style={{ width: '20%', height: '20%' }}><img className="card-img-top"
                    src="https://asset.kompas.com/crops/x6OULHa8pMi47UnvDTzf1j62ov4=/3x0:700x465/750x500/data/photo/2022/08/25/6306b48bb80a1.jpeg" />
                </td>
                <td className="pt-3-half">Bakso</td>
                <td className="pt-3-half">Bulat seperti bola ping-pong</td>
                <td className="pt-3-half">18.000</td>
                <td className="pt-3-half">1</td>
                <td className="pt-3-half">1</td>
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
        </tbody>
    </table>

    <span><button id="add-cuisine-button" type="button" style={{ float: "right" }}
        className="btn btn-outline-dark flex-shrink-0 me-4">
        Add Cuisine
    </button></span>

</div>