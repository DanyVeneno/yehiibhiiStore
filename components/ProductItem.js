import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className='card  shadow-lg shadow-cyan-500/50 rounded-md'>
      <Link href={`/product/${product.slug}`}>
        <a>
          <Image
            src={product.image}
            alt={product.name}
            className='rounded-md shadow object-cover h-64 w-full'
          />
        </a>
      </Link>

      <div className='flex flex-col items-center justify-center p-5'>
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className='text-lg'>{product.name}</h2>
          </a>
        </Link>
        <p className='mb-2'>{product.brand}</p>
        <p>${product.price}</p>
        <button
          className=' bg-gradient-to-r from-slate-800 to-emerald-500 hover:from-zinc-800 hover:to-lime-500 rounded-sm p-3 w-full'
          type='button'
          onClick={() => addToCartHandler(product)}
        >
          Agregar a mi Carrito
        </button>
      </div>
    </div>
  );
}
