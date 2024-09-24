import { logoBlack } from '@/assets/img/logo/logo'
import { mainCover, imgBack } from '@/assets/img/mainCover/mainCover'
import Image from 'next/image'
import React from 'react'

const Cover = () => {
  return (
    // <div className='h-[100vh] bg-gray-500'>

    //     <Image src={mainCover} alt='civiltec' />
    // </div>
    <div className="relative w-full h-[100vh] bg-blue-500">
    {/* Fondo del div principal */}
    <div className="inset-0 w-full h-full overflow-hidden">
    <Image src={mainCover} alt='civiltec' layout='fill' objectFit='cover'  />
    </div>

    {/* Fondo de la esquina inferior izquierda recortada */}
    <div
      className="absolute bottom-0 left-0 w-full h-full bg-black"
   //   style={{ clipPath: 'polygon(0% 100%, 0% 50%, 50% 100%)', backgroundImage:  `url(${imgBack})`, }}
   style={{ clipPath: 'polygon(0% 100%, 0% 50%, 50% 100%)', backgroundImage:  `url(./img/green-background.png)`,  backgroundSize: 'cover',       // Para que la imagen cubra el área
    backgroundRepeat: 'no-repeat', // Evita que la imagen se repitas
    backgroundPosition: 'center',  // Centra la imagen
     }}
    > 
        <div className='absolute bottom-10 left-5 w-[40%] xl:w-[35%] 2xl:w-[30%]' >
        <Image src={logoBlack} alt='logo'  />
        </div>
    
  
    </div>

    {/* <div className="relative z-10 p-8 text-white">
      <h1 className="text-xl font-bold">Diagonal Corner Example</h1>
      <p>This div has a diagonal cut at the bottom-left corner with a different background.</p>
    </div> */}
  </div>
  )
}

export default Cover