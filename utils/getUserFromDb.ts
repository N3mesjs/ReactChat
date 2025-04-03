import { db } from ".././components/fireBase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default async function getUserFromDb(username: any, passwordHash: any) {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("username", "==", username), where("password", "==", passwordHash));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null; // Nessun utente trovato
  }

  const userDoc = querySnapshot.docs[0];
  const userData = userDoc.data();

  return {
    id: userDoc.id, // ID del documento nel database
    name: userData.username, // Nome utente
  };
}