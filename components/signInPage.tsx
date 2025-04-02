'use client';
import { useState } from 'react';
import { db } from './fireBase'

import { doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";

export default function SignInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        /* Prendo tutti gli utenti nel database*/
        const querySnapshot = await getDocs(collection(db, "cities"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });

        /* Salvo l'utente nel database con id generato */
        const ref =  collection(db, 'users');
        await addDoc(ref, {
            username: username,
            password: password,
            createdAt: new Date(),
        });
        alert('User created successfully');
        setUsername('');
        setPassword('');
    }

    return (
        <main className="main">
            <h1 className='text-[2em] font-bold'>SignIn to Nymes's Chat App</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" className="inpt" id="username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" className="inpt" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit" className="send-btn">SignIn</button>
            </form>
        </main>
    )
}