// Ejercicio 2. Obtén los valores de los campos de entrada y 
// muéstralos debajo según el ejemplo de salida:

import { useState } from "react";

function ShowRequest() {
    const [formData, setFormData] = useState({
        userName: "",
        fullName: "",
        age: ""
    });

    const [request, setRequest] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        formData.userName != "" && formData.fullName != "" && formData.age != ""
        &&
        setRequest(formData); 
        setFormData({
            userName: "",
            fullName: "",
            age: ""
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">Username:</label>
                <br />
                <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="fullName">FullName:</label>
                <br />
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="age">Age:</label>
                <br />
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button>Submit</button>
            </form>

            {request && (
                <>
                    <h2>Request Sent to DB with below request data:</h2>
                    <ul>
                        <li>Username: {request.userName.toUpperCase()}</li>
                        <li>FullName: {request.fullName.toUpperCase()}</li>
                        <li>Age: {request.age}</li>
                    </ul>
                </>
            )}
        </>
    );
}

export default ShowRequest;