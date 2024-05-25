import React, { useState } from 'react';
import axios from 'axios';

const DeleteCliente = () => {
    const [id, setId] = useState('');

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:3000/api/clientes/${id}`);
            alert('Cliente eliminado exitosamente');
        } catch (error) {
            alert('Error al eliminar el cliente');
        }
    };

    return (
        <div>
            <h2>Eliminar Cliente</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID del Cliente:</label>
                    <input type="text" className="form-control" id="id" value={id} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-danger">Eliminar Cliente</button>
            </form>
        </div>
    );
};

export default DeleteCliente;
