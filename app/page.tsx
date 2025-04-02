"use client";

import { useEffect } from 'react';

import SignInPage from '../components/signInPage';

export default function Page() {

    useEffect(() => {
        fetch('/api/')
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    }, []);
    return (
        <>
            <SignInPage />
        </>
    )
  }