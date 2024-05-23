import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchClientes = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/clientes');
      setClientes(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Listado de Clientes</h1>
      <button onClick={fetchClientes} disabled={loading}>
        {loading ? 'Cargando...' : 'Obtener Clientes'}
      </button>
      {error && <div>Error al cargar los clientes: {error}</div>}
      {!loading && clientes.length > 0 && (
        <ul>
          {clientes.map((cliente) => (
            <li key={cliente.ClienteID}>
              Nombre: {cliente.Nombre}, Dirección: {cliente.Dirección}, Teléfono: {cliente.Teléfono}, Email: {cliente.Email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
