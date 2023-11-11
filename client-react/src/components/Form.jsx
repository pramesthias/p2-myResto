import CancelButton from "./CancelButton";


export default function Form({ formData, onChange, onSubmit }) {

    return (
        <section id="add-cuisine">
            <div className="container mt-5">
                <h2 className="mb-4 text-center">Cuisine Form</h2>
                <form id="cuisine-form" encType="multipart/form-data"
                    className="w-50 mx-auto" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="add-name" type="text" className="form-control"
                            name="name" onChange={onChange}
                            defaultValue={formData.name} required />
                    </div><br></br>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input id="add-price" type="number" className="form-control"
                            name="price" onChange={onChange}
                            defaultValue={formData.price} required />
                    </div><br></br>

                    <div className="form-group">
                        <label htmlFor="imgUrl">Image URL</label>
                        <input id="add-imgUrl" type="text" className="form-control" name="imgUrl"
                            aria-describedby="basic-addon3 basic-addon4" required
                            onChange={onChange} defaultValue={formData.imgUrl} />
                    </div><br></br>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="add-description" className="form-control" name="description"
                            rows="4" required onChange={onChange} 
                            defaultValue={formData.description}></textarea>
                    </div><br></br>

                    <div className="form-group">
                        <select name="categoryId" className="form-select"
                            onChange={onChange} defaultValue={formData.categoryId}>
                            <option value="1">Indonesian Food</option>
                            <option value="2">Chinese Food</option>
                            <option value="3">Japanese Food</option>
                        </select>
                    </div>
                    <br />

                    <div className="d-flex justify-content-between">
                        <CancelButton />
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </section>
    )

}







