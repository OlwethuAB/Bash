import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function About(props) {
    return (
        <div>
            <h1>About Page</h1>
            <InertiaLink href='/'>Home</InertiaLink>
            <InertiaLink href='/contact'>Contact</InertiaLink>
        </div>
    );
}
