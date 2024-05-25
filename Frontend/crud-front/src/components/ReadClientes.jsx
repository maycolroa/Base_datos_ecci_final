import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadClientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/clientes');
                setClientes(response.data);
            } catch (error) {
                console.error('Error fetching clientes:', error);
            }
        };
        fetchClientes();
    }, []);

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ClienteID</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.ClienteID}>
                            <td>{cliente.ClienteID}</td>
                            <td>{cliente.Nombre}</td>
                            <td>{cliente.Dirección}</td>
                            <td>{cliente.Teléfono}</td>
                            <td>{cliente.Email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReadClientes;
