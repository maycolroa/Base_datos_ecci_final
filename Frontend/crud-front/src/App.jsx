import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateCliente from './components/CreateCliente';
import ReadClientes from './components/ReadClientes';
import UpdateCliente from './components/UpdateCliente';
import DeleteCliente from './components/DeleteCliente';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
    return (
        <Router>
            <div className="container mt-4">
                <h1 className="text-center mb-4">CRUD de Clientes ECCI Base de datos</h1>
                <nav className="mb-4">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Crear Cliente</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/read" className="nav-link">Listar Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/update" className="nav-link">Actualizar Cliente</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/delete" className="nav-link">Eliminar Cliente</Link>
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ReadClientes />} />
                        <Route path="/create" element={<CreateCliente />} />
                        <Route path="/read" element={<ReadClientes />} />
                        <Route path="/update" element={<UpdateCliente />} />
                        <Route path="/delete" element={<DeleteCliente />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

