import React, { useState } from 'react';
import '../Styles/IniciarSesion.css';

const IniciarSesion = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleInicioSesion = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !email) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        console.log('Usuario autenticado');
        setError('');
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleInicioSesion}>
                <label>
                    Nombre:
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </label>
                <label>
                    Apellido:
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </label>
                <label>
                    Correo Electrónico:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default IniciarSesion;
