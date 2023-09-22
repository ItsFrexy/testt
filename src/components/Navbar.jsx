import Logo from '../assets/feher_behu.svg'
import React, { useState } from 'react'
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import i18n from '../i18n';
import { Link } from "react-router-dom";





import '../index.css'



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };




  const [phonedropdown, setPhoneDropdown] = useState(false);
  const handlePhoneDropdown = () => {
    setPhoneDropdown(!phonedropdown);

  };





  const changeLanguage = (ln) => {
    return () => {
      var body = document.body
      body.classList.add("elementToFadeInAndOut");
      // Wait until the animation is over and then remove the class, so that
      // the next click can re-add it.
      setTimeout(function () { body.classList.remove("elementToFadeInAndOut"); },);

      setTimeout(() => {
        i18n.changeLanguage(ln)
      }, 50);

    }
  };


  const { t, i18n } = useTranslation();

  return (



    <>





      {
        nav ? (
          // Phone Menu 
          <>
            <div className="navbar-menu relative z-50">
              <div className="navbar-backdrop w-screen h-screen fixed bg-black/30 backdrop-blur-sm" onClick={handleNav}></div>
              <nav className='fixed top-0 right-0 bottom-0 flex flex-col md:w-1/2 w-4/5 p-6 bg-[#161616] h-auto overflow-auto'>
                <div className="flex justify-between items-center mb-10">
                  <a href="/">
                    <img src={Logo} className='w-[100px] min-w-[100px]' alt="" />
                  </a>
                  <button className='navbar-close p-2' onClick={handleNav}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 18L13 13M13 13L8 8M13 13L18 8M13 13L8 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </button>
                </div>

                <div className="flex flex-col item-center gap-8 h-full">

                  <hr className='border-secondary/25' />


                  <ul className="flex flex-col gap-3">
                    <li className="">
                      <a href="/" className='pl-[40px] block w-full hover:bg-[#212121] font-medium hover:font-bold p-3 rounded-sm duration-150'>{t('Navbar.home')}</a>
                    </li>

                    <li className="">
                      <a href="/about-us/" className='pl-[40px] block w-full hover:bg-[#212121] font-medium hover:font-bold p-3 rounded-sm duration-150'>{t('Navbar.about')}</a>
                    </li>

                    <li className="">


                      {
                        phonedropdown ? (
                          // Phone Dropdown
                          <>
                            <Link onClick={handlePhoneDropdown} className='flex flex-row-reverse justify-end gap-2 items-center w-full bg-[#212121] font-bold p-3 rounded-sm duration-150'>{t('Navbar.services')}

                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.6875 7.1875L10 12.8125L15.3125 7.1875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>



                            </Link>

                            <div className="block duration-150 rounded-b-lg rounded-t-sm border-t-[2px] bg-[#0e0e0e] border-white">
                              <ul className="flex flex-col ">
                                <a href="/strategic-consulting/">
                                  <li className="hover:bg-[#212121] duration-150 px-12 py-3 pt-[14px] rounded-sm">{t('Services.Strategiai.title')}</li>
                                </a>

                                <a href="/implementation-and-function-extension/">
                                  <li className="hover:bg-[#212121] px-12 py-3 rounded-sm duration-150">{t('Services.Implementacio.title')}</li>
                                </a>

                                <a href="/technology-consulting/">
                                  <li className="hover:bg-[#212121] px-12 py-3 rounded-sm duration-150">{t('Services.Technologiai.title')}</li>
                                </a>

                                <a href="/system-operation/">
                                  <li className="hover:bg-[#212121] px-12 py-3 rounded-sm duration-150">{t('Services.Rendszeruzemeltetes.title')}</li>
                                </a>

                                <a href="/application-support/">
                                  <li className="hover:bg-[#212121] px-12 py-3 rounded-sm duration-150">{t('Services.Alkalmazas.title')}</li>
                                </a>

                                <a href="/project-management-and-quality-assurance/">
                                  <li className="hover:bg-[#212121] px-12 py-3 rounded-sm duration-150">{t('Services.Projektmenedzsment.title')}</li>
                                </a>

                              </ul>
                            </div>


                          </>
                        )
                          : ( // Phone Dropdown PC
                            <Link onClick={handlePhoneDropdown} className='flex flex-row-reverse justify-end gap-2 items-center w-full hover:bg-[#212121] font-medium hover:font-bold p-3 rounded-sm duration-150'>{t('Navbar.services')}

                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.1875 15.3125L12.8125 10L7.1875 4.6875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>


                            </Link>
                          )
                      }


                    </li>


                  </ul>

                  <hr className='border-secondary/25' />


                  <a href='/contact-us/' className="text-center w-full mt-auto py-[10px] border border-secondary rounded-lg hover:bg-stone-400/25 duration-150">{t('Navbar.contact')}</a>

                </div>
              </nav>
            </div >
          </>
        )
          : ( // PC Menu
            <div></div>
          )
      }

      <div className=" py-6 flex justify-between items-center md:mx-[10%] mx-[5%]">
        <div className="lg:w-[240px]">
          <div className="w-[100px]">
            <a href="/">
              <img src={Logo} className='w-[100px] min-w-[100px] ' alt="" />
            </a>
          </div>

        </div>

        <ul className="lg:flex hidden gap-8 justify-between items-center ">
          <li className="">
            <a href="/about-us/" className='duration-150 text-secondary hover:text-white'>{t('Navbar.about')}</a>
          </li>


          <li className="group relative -my-6 flex items-center h-[90px] duration-150">
            <Link className='lg:block hidden duration-150 text-secondary group-hover:text-white cursor-pointer'>{t('Navbar.services')}</Link>


            <div className="absolute group-hover:block hidden duration-150 rounded-b-lg rounded-t-sm pt-0 top-[90px] z-50 w-[320px] border-t-[2px] bg-[#121212] border-white">
              <ul className="flex flex-col">
                <a href="/strategic-consulting/">
                  <li className="hover:bg-[#212121] duration-150 px-6 py-3 pt-[14px] rounded-sm">{t('Services.Strategiai.title')}</li>
                </a>

                <a href="/implementation-and-function-extension/">
                  <li className="hover:bg-[#212121] px-6 py-3 rounded-sm duration-150">{t('Services.Implementacio.title')}</li>
                </a>

                <a href="/technology-consulting/">
                  <li className="hover:bg-[#212121] px-6 py-3 rounded-sm duration-150">{t('Services.Technologiai.title')}</li>
                </a>

                <a href="/system-operation/">
                  <li className="hover:bg-[#212121] px-6 py-3 rounded-sm duration-150">{t('Services.Rendszeruzemeltetes.title')}</li>
                </a>

                <a href="/application-support/">
                  <li className="hover:bg-[#212121] px-6 py-3 rounded-sm duration-150">{t('Services.Alkalmazas.title')}</li>
                </a>
                <a href="/project-management-and-quality-assurance/">
                  <li className="hover:bg-[#212121] px-6 py-3 rounded-sm duration-150">{t('Services.Projektmenedzsment.title')}</li>
                </a>

              </ul>
            </div>







          </li>
        </ul>

        <div className="lg:flex hidden w-[230px]  justify-end">
          <a href='/contact-us/' className="border border-secondary text-center py-2 px-4 rounded-lg hover:bg-stone-400/25 duration-150 w-[108.69px]">
            {t('Navbar.contact')}
          </a>
        </div>

        <button className="lg:hidden block p-2 " onClick={handleNav}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.25 18.4173H22.75M3.25 13.0007H22.75M3.25 7.58398H22.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <div className="w-full h-[90px] absolute top-0 left-0 bg-background/10 backdrop-blur-xl -z-10"></div>



    </>

  );
}

export default Navbar