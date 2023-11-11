import { useState } from "react";
import CancelButton from "../components/CancelButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Upload() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const token = localStorage.getItem("access_token")

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log(event)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', file); //name di attribute
        try {
            const { data } = await axios.patch(`http://localhost:3000/cuisines/${id}/image-url`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                  },
            });
            navigate("/cuisines")
            console.log({data})
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="vh-80">
            <div className="container-fluid h-custom mt-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://fouraroundtheworld.com/wp-content/uploads/2020/04/Traditional-recipes-from-around-the-world-to-make-at-home-1.jpg"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="form-group files">
                                <label>Upload Your File </label><br></br>
                                <input onChange={handleFileChange} type="file" name="image" className="form-control" />
                            </div>
                            <br></br>
                            <div className="d-flex justify-content-between">
                                <CancelButton />
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}

{/* <div className="container w-50 mx-auto mt-4">
<div className="row">
    <div className="col-md-6">
        <form method="post" action="#" id="#">
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file" className="form-control" />
            </div><br />
            <div className="d-flex justify-content-between">
                <CancelButton />
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</div>
</div> */}