import axios from 'axios';

export default function ButtonDelete({ id, token, fetchData }) {
   
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/cuisines/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchData()
        } catch (error) {
            console.error(error);
        }
    };
    return (
    <span className="table-remove"><button onClick={handleDelete} id="remove-button" type="button"
        className="btn btn-danger flex-shrink-0">
        Remove
    </button></span>
    );
}

