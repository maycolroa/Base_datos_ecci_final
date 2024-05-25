import React, { useState } from 'react';
import axios from 'axios';

const CreateCliente = () => {
    const [cliente, setCliente] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        email: ''
    });

    const handleChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/clientes', cliente);
            alert('Cliente creado exitosamente');
        } catch (error) {
            alert('Error al crear el cliente');
        }
    };

    return (
        <div>
            <h2>Crear Cliente</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">Crear Cliente</button>
            </form>
        </div>
    );
};

export default CreateCliente;
