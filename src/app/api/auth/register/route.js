import { NextResponse } from 'next/server';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Removed getDoc
import { auth, db } from '@/lib/firebase/config';

export async function POST(request) {
    try {
        const { nombre, email, password } = await request.json();

        // Intentar crear el usuario con Firebase Auth
        // createUserWithEmailAndPassword ya verifica si el email existe
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Guardar información adicional del usuario en Firestore
        await setDoc(doc(db, 'usuarios', user.uid), {
            nombre: nombre,
            email: user.email,
            // No guardes la contraseña aquí, Firebase Auth la maneja de forma segura
        });

        return NextResponse.json(
            { message: 'Usuario registrado exitosamente' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error en el registro:', error);
        return NextResponse.json(
            { message: 'Error al registrar el usuario' },
            { status: 500 }
        );
    }
}