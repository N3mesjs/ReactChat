"use client";

import { useEffect } from 'react';

export default function Page() {

    useEffect(() => {
        fetch('/api/')
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    }, []);
    return (
        <>
            
        </>
    )
  }