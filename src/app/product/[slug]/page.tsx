'use client';
import { products } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React from 'react'


export default function Page({ params }: { params: { slug: string } }) {
    const product = products.find((product) => product.slug === params.slug);
if(!product){   
 notFound();
}
return (<>
   <h3>BRAND : {product.brand}</h3> 
   <h3>NAME : {product.name}</h3> 
   <Image src={product.image} alt ='shoe' width={150} height={200}/>
   
</>)

  }
