import Link from 'next/link'
import React from 'react'

export function ProductCard({product}) {
  return (
    
    <Link href={`/products/${product.id}`} key={product.id}>
        <a>
        <div className="border boder-gray-200 shadow-md p-6">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
        </a>
    </Link> 

  )
}

