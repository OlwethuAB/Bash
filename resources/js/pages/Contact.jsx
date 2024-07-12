import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Contact(props) {
    return (
        <div>
            <h1>Contact page</h1>
            <InertiaLink href='/'>Home</InertiaLink>
            <InertiaLink href='/contact'>Contact</InertiaLink>
        </div>
    );
}
