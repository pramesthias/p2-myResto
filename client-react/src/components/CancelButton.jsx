import { useNavigate } from 'react-router-dom';

// BUAT ADD/EDIT FORM PATCH IMAGE
export default function CancelButton() {
    const navigate = useNavigate()

    const handleCancel = () => {
        navigate("/cuisines")
    }

    return (
        <button id="cancel-cuisine" type="button" 
        className="btn btn-primary" onClick={handleCancel}>
            Cancel
        </button>
    );
}

