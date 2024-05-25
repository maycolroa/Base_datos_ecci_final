import React, { useState } from 'react';
import axios from 'axios';

const UpdateCliente = () => {
    const [id, setId] = useState('');
    const [cliente, setCliente] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        email: ''
    });

    const handleChangeId = (e) => {
        setId(e.target.value);
    };

    const handleChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/clientes/${id}`, cliente);
            alert('Cliente actualizado exitosamente');
        } catch (error) {
            alert('Error al actualizar el cliente');
        }
    };

    return (
        <div>
            <h2>Actualizar Cliente</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID del Cliente:</label>
                    <input type="text" className="form-control" id="id" value={id} onChange={handleChangeId} />
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={cliente.nombre} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección:</label>
                    <input type="text" className="form-control" id="direccion" name="direccion" value={cliente.direccion} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" id="telefono" name="telefono" value={cliente.telefono} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={cliente.email} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar Cliente</button>
            </form>
        </div>
    );
};

export default UpdateCliente;
