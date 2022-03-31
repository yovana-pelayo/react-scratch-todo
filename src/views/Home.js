import React, { useState } from 'react';
import { signInUser } from '../services/users';
export default function Home() {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
};
return (
    <div>
        Home
    </div>
);
}
