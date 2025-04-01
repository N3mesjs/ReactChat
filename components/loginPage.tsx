'use client';
import { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    return (
        <main className="bg-gray-900 w-screen h-screen flex flex-col text-white justify-center items-center gap-[3em]">
            <h1 className='text-[2em] font-bold'>SignIn to Nymes's Chat App</h1>
            <form className="flex flex-col bg-black p-7 rounded-3xl gap-6">
                <div className='flex flex-col gap-1'>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" className="rounded-[3px] p-3 border-[1px] focus:outline-none" id="username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" className="rounded-[3px] p-3 border-[1px] focus:outline-none" id="password" />
                </div>

                <button type="submit" className="bg-blue-500 rounded-3xl p-3 hover:bg-blue-700">Login</button>
            </form>
        </main>
    )
}