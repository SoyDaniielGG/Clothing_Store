'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import '../../styles/login.css';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            // Crear usuario con email y contraseña
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            // Actualizar el perfil del usuario con el nombre
            await updateProfile(userCredential.user, {
                displayName: formData.nombre
            });

            router.push('/login');
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setError('El email ya está registrado');
                    break;
                case 'auth/weak-password':
                    setError('La contraseña debe tener al menos 6 caracteres');
                    break;
                case 'auth/invalid-email':
                    setError('El email no es válido');
                    break;
                default:
                    setError('Error al registrar el usuario');
                    console.error('Error de registro:', error);
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Registro</h1>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre Completo</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength={6}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            minLength={6}
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Registrarse
                    </button>
                </form>
                <div className="register-link">
                    ¿Ya tienes cuenta? <Link href="/login">Inicia Sesión</Link>
                </div>
            </div>
        </div>
    );
} 