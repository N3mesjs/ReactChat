import * as argon2 from "argon2";


export default async function saltAndHashPassword(pass: any) {
    const password: string = await argon2.hash(pass);

    return password;
}