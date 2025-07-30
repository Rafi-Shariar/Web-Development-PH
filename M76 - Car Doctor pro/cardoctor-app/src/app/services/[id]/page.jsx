import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceDetailsPage = async({params}) => {

    const p = await params;
    const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
    const data = await res.json();

    return (
        <div className='max-w-7xl mx-auto mt-16'>
            <section>
                <Image src={data.img} width={700} height={350} alt='Image'/>
                <h1>Title : {data.title}</h1>
                <p className='mt-6'>{data.description}</p>

                <p className='mt-6 text-2xl font-semibold text-orange-400'>Price: {data.price}</p>
            </section>

            <section>
                <Link href={`/checkout/${data._id}`}>
                    <button className='btn btn-primary mt-6'>Checkout</button>
                </Link>
            </section>
        </div>
    );
};

export default ServiceDetailsPage;