import { useState } from "react";
import CancelButton from "../components/CancelButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';


export default function Upload() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const token = localStorage.getItem("access_token")

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        console.log(event.target)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', file); //name di attribute
        try {
            const { data } = await axios.patch(`https://resto-server-h8.pramresto.site/cuisines/${id}/image-url`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                  },
            });

            toast.success('🎉 You successfully UPLOADED NEW IMAGE 🎉', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            navigate("/cuisines")
            // console.log({data})
        } catch ({ response }) {
            toast.error(response.data.message, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            console.log(error)
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
