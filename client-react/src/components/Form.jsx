import CancelButton from "./CancelButton";


export default function Form(){

    return(
<section id="add-cuisine">
    <div className="container mt-5">
    <h2 className="mb-4 text-center">Add New Cuisine</h2>
    <form id="add-cuisine-form" action="#" method="post" enctype="multipart/form-data" className="w-50 mx-auto">
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="add-name" type="text" className="form-control" name="name" required />
        </div>

        <div className="form-group">
        <label htmlFor="price">Price</label>
        <input id="add-price" type="number" className="form-control" name="price" required />
        </div>

        <div className="form-group">
        <label htmlFor="imgUrl">Image URL</label>
        <input id="add-imgUrl" type="text" className="form-control" name="imgUrl"
            aria-describedby="basic-addon3 basic-addon4" required />
        </div>

        <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="add-description" className="form-control" name="description" rows="4" required></textarea>
        </div>

        <div className="form-group">
        <label htmlFor="authorId">Author ID</label>
        <input id="add-authorId" type="number" className="form-control" name="authorId" required />
        </div>

        <div className="form-group">
        <label htmlFor="categoryId">Category ID</label>
        <input id="add-categoryId" type="number" className="form-control" name="categoryId" required />
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







