import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export const GET = async(req, {params}) =>{

    const p = await params;

    const bookinigCollection = dbConnect(collectionNames.bookingsCollection);
    const singleBooking = await bookinigCollection.findOne({_id:  new ObjectId(p.id)});


    return NextResponse.json({singleBooking});
}

export const PATCH = async ( req, {params}) => {

    const p = await params;
    const bookinigCollection = dbConnect(collectionNames.bookingsCollection);
    const query = {_id:  new ObjectId(p.id)};

    const body = await req.json();
    const filter = {
        $set:{...body},
    }
    const option = {
        upsert:true
    }

    const updateResponse = await bookinigCollection.updateOne(query, filter, option);
    revalidatePath('/mybookings')

    return NextResponse(updateResponse);

}