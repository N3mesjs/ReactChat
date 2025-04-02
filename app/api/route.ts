import * as argon2 from "argon2";

import { db } from '../../components/fireBase';

import { doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";

//const hash = await argon2.hash("password");

export async function POST(request: Request) {
  const body = await request.json();
  const username = body.username;
  const password = await argon2.hash(body.password);

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
  return new Response(
    JSON.stringify({ message: "Success" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

export async function GET() {
  return new Response(
    JSON.stringify({ message: "Success" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}