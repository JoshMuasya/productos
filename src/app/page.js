'use client'

import React, { useState, useEffect } from 'react'

const Page = () => {
  const phone = '+573009121645';
  const email = 'info@productosprairiepulse.co';

  const handleNumberClick = () => {
    window.location.href = `whatsapp://send?phone=${phone}`
  }

  const handleMailClick = () => {
    window.location.href = `mailto:${email}`;
  }

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());    

  function calculateTimeRemaining() {
    const targetDate = new Date('2023-10-31T23:59:59').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const isServer = typeof window === 'undefined';
    if (!isServer) {
      const countdownInterval = setInterval(() => {
        setTimeout(() => {
          const newTimeRemaining = calculateTimeRemaining();
          setTimeRemaining(newTimeRemaining);
        }, 1000)
      }, 1000);
  
      return () => clearInterval(countdownInterval);
    }
  }, []);

  return (
    <main className='bg-gradient-to-r from-forest-green to-orange h-screen w-full flex flex-col justify-center align-middle items-center'>
      {/* Date to Open */}
      <div className='bg-light-gray flex flex-row justify-center align-middle items-center rounded-bl-xl rounded-br-xl l:rounded-bl-2xl l:rounded-br-2xl fixed top-0 p-5 text-dark-gray'>
        {/* Days */}
        <div className='flex flex-col justify-center align-middle items-center pr-3 l:pr-6'>
          <h1 className='font-titles text-m l:text-l font-bold'>
            {timeRemaining.days}
          </h1>
          <h1 className='font-paragraphs text-sx l:text-lm font-semibold'>
            Días
          </h1>
        </div>

        {/* Hours */}
        <div className='flex flex-col justify-center align-middle items-center pr-3 l:pr-6'>
          <h1 className='font-titles text-m font-bold l:text-l'>
            {timeRemaining.hours}
          </h1>
          <h1 className='font-paragraphs text-sx font-semibold l:text-lm'>
            Horas
          </h1>
        </div>

        {/* Minutes */}
        <div className='flex flex-col justify-center align-middle items-center pr-3 l:pr-6'>
          <h1 className='font-titles text-m l:text-l font-bold'>
            {timeRemaining.minutes}
          </h1>
          <h1 className='font-paragraphs text-sx font-semibold l:text-lm'>
            Minutos
          </h1>
        </div>

        {/* Seconds */}
        <div className='flex flex-col justify-center align-middle items-center'>
          <h1 className='font-titles text-m l:text-l font-bold'>
            {timeRemaining.seconds}
          </h1>
          <h1 className='font-paragraphs text-sx font-semibold l:text-lm'>
            Segundos
          </h1>
        </div>
      </div>

      {/* Coming Soon */}
      <div className='flex flex-col justify-center align-middle items-center pb-14'>
        {/* Coming Soon */}
        <div className='font-titles font-black text-ml md:text-xl text-light-gray'>
          MUY PRONTO
        </div>

        <div className='font-paragraphs font-semibold text-sx md:text-m text-light-gray'>
          Nuestro sitio web está en construcción,
        </div>
      </div>

      {/* Contacts */}
      <div className='text-light-gray flex flex-col justify-center align-middle items-center'>
        {/* email */}
        <div className='flex flex-col justify-center align-middle items-center'>
          <h1 className='font-titles font-bold text-m md:text-ml'>
            Correo Electrónico
          </h1>

          <a 
            className='font-paragraphs font-semibold text-lm md:text-l cursor-pointer'
            onClick={handleMailClick}
          >
            {email}
          </a>
        </div>

        <div className='flex flex-col justify-center align-middle items-center'>
          <h1 className='font-titles font-bold text-m md:text-ml'>
            WhatsApp
          </h1>

          <a 
            className='font-paragraphs font-semibold text-lm md:text-l cursor-pointer'
            onClick={handleNumberClick}
          >
            {phone}
          </a>
        </div>
      </div>
    </main>
  )
}

export default Page