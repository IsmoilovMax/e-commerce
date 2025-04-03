import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'


interface Props {
  product: Partial<any>
}

const ProductCard:FC<Props> = ({product}) => {
  const router = useRouter()


  return (
    <div onClick={() => router.push(`/product/${product._id}`)}
      className='cursor-pointer'
    >
      <div className='bg-secondary relative group'>
        <Image src={product.img} alt={product.title}
          width={300} height={300} className='mx-auto'
        />
      </div>
    </div>
  )
}


export default ProductCard
