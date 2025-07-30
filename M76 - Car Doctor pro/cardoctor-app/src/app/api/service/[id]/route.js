import { NextResponse } from "next/server";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const DELETE = async (req, {params}) =>{

  const p = await params;
  const bookingCollection = dbConnect(collectionNames.bookingsCollection);
  const query = { _id : new ObjectId(p.id)};
  const deleteResponse = await bookingCollection.deleteOne(query);
  revalidatePath('/mybookings')

  return NextResponse.json(deleteResponse);

}

export const GET = async (req, { params }) => {
  try {
    const { id } = await params;

    const collection = await dbConnect(collectionNames.servicesColection);
    const data = await collection.findOne({ _id: new ObjectId(id) });

    if (!data) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};

