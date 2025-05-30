import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(/* req */) { // Removed req parameter
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: [
        '/perfil/:path*',
        '/carrito/:path*',
        '/checkout/:path*',
    ],
};