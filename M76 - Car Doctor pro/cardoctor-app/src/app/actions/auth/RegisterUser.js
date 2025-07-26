"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
export const RegisterUser = async (payload) => {

    const userCollection = dbConnect(collectionNames.usersColection);

    const user = await userCollection.findOne({email: payload.email});

    if(!user){
        const hashedPassword = await bcrypt.hash(payload.password, 10);
        payload.password = hashedPassword;
        const result = await userCollection.insertOne(payload);
        result.insertedId = result.insertedId.toString();
        return result;
    }

    return {success : false};
    
}