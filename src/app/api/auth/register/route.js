import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export async function POST(request) {
    try {
        const { nombre, email, password } = await request.json();

        // Verificar si el usuario ya existe
        const existingUser = await prisma.usuario.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json(
                { message: 'El email ya está registrado' },
                { status: 400 }
            );
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el nuevo usuario
        const user = await prisma.usuario.create({
            data: {
                nombre,
                email,
                password: hashedPassword,
            },
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