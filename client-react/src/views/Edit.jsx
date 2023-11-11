import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import axios from "axios";

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
        } catch (error) {
            console.log(error)
        }
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
                url: `http://localhost:3000/cuisines/${id}/edit`,
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
            navigate("/cuisines");
        } catch (error) {
            console.log(error)
        }
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

