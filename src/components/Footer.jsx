import React from 'react'
import Logo from '../assets/feher_behu.svg'
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <footer class="mt-[200px] md:px-[10%] px-[5%] pb-14 bg-background">
        <hr class="mb-8 border-[#252525] sm:mx-auto lg:mb-8" />
        <div class="flex md:items-center md:justify-between md:flex-row flex-col">
          <div className="flex gap-5 items-start flex-col justify-start">
            <img src={Logo} className='w-[100px] min-w-[100px] md:mx-0 mx-auto' alt="" />
            <span class="text-sm text-secondary md:mx-0 mx-auto">© 2023 <a href="/" class="hover:underline">Bázisellátó Kft.</a> Minden jog fenntartva.
            </span>
          </div>

          <div class="flex gap-6 md:justify-start justify-center md:mt-0 mt-10">
            <a href="/about-us/" className='duration-150 text-secondary hover:text-white'>{t('Navbar.about')}</a>
            <a href="/contact-us/" className='duration-150 text-secondary hover:text-white'>{t('Navbar.contact')}</a>
          </div>
        </div>
      </footer >


    </>
  )
}

export default Footer