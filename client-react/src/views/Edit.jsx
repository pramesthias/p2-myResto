import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import axios from "axios";
import { toast } from 'react-toastify';

export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token")
    const [formData, setData] = useState({
        name: "",
        price: 0,
        imgUrl: "",
        description: "",
        categoryId: 1
    })


    const fetchData = async () => {
        try {
            const { data } = await axios({
                url: `http://localhost:3000/cuisines/${id}`,
                method: "get",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            setData(data)
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
        
        // catch (error) {
        //     console.log(error)
        // }
    }


    useEffect(() => {
        fetchData()
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({...formData, [name]: value});

        console.log({...formData, [name]: value})
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios({  //dipersatu
                url: `https://resto-server-h8.pramresto.site/cuisines/${id}/edit`,
                method: "put",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data:
                {
                    name: formData.name,
                    price: formData.price,
                    imgUrl: formData.imgUrl,
                    description: formData.description,
                    categoryId: formData.categoryId
                }
            })
            fetchData(data);
            toast.success('🎉 You successfully EDITED THE CUISINE 🎉', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/cuisines");
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
        
        // catch (error) {
        //     console.log(error)
        // }
    }


    return (
        <>
            <Form
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    )
}

