'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { signIn } from "../../auth"

export default function SignInPage() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [exists, setExists] = useState<boolean>(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("clicked")

        if (username === '' || password === '') return;

        fetch('/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password }),
        }).then((res) => {
            if (res.ok) {
                alert('User created successfully');
                setUsername('');
                setPassword('');
                router.push('/');
            }
        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <main className="main">
            <h1 className='text-[2em] font-bold'>SignIn to Nymes's Chat App</h1>
            <form className="form" onSubmit={handleSubmit} action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }} >
                <div className='flex flex-col gap-1'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username" className="inpt" id="username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" className="inpt" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="send-btn">SignIn</button>
            </form>
        </main>
    )
}
/*
const ConfirmPopUp = () => {
    return (
        <div className='absolute top-2 left-1/2 -translate-x-1/2 bg-green-600 rounded-lg'>
            <div className="p-5">
                <h3 className='font-bold mb-1'>Utente creato con successo</h3>
            </div>
            <hr className='w-full border-[6px] rounded-b-lg popUpHr' />
        </div>
    );
}
*/