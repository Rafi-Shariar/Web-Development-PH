import dbConnect, { collectionNames } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

const ServiceDetailsPage = async({params}) => {

    const p = await params;

    const data = await dbConnect(collectionNames.servicesColection).findOne({_id: new ObjectId(p.id)});

    return (
        <div className='max-w-7xl mx-auto mt-16'>
            <section>
                <Image src={data.img} width={700} height={350} alt='Image'/>
                <h1>Title : {data.title}</h1>
                <p className='mt-6'>{data.description}</p>

                <p className='mt-6 text-2xl font-semibold text-orange-400'>Price: {data.price}</p>
            </section>
        </div>
    );
};

export default ServiceDetailsPage;