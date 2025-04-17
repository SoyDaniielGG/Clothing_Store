'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import '../../styles/perfil.css';

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                router.push('/login');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            router.push('/login');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    if (loading) {
        return <div className="loading">Cargando...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1>Mi Perfil</h1>
                <div className="profile-info">
                    <div className="profile-field">
                        <label>Nombre:</label>
                        <p>{user?.displayName || 'No especificado'}</p>
                    </div>
                    <div className="profile-field">
                        <label>Email:</label>
                        <p>{user?.email}</p>
                    </div>
                    <div className="profile-field">
                        <label>Último inicio de sesión:</label>
                        <p>{user?.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleString() : 'No disponible'}</p>
                    </div>
                </div>
                <button onClick={handleLogout} className="logout-button">
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
} 