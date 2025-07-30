"use server";
import bcrypt from 'bcrypt';
import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const loginUser = async (payload) =>{

    const {email, password} = payload;

    const userCollection = dbConnect(collectionNames.usersColection);
    const user = await userCollection.findOne({email});

    if(!user) return null;

    const isPasswordOK = await bcrypt.compare(password, user.password);
    console.log(isPasswordOK);
    
    if(!isPasswordOK) return null;

    return user;
}