import React from 'react'
import { useTranslation } from 'react-i18next';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const HomeServices = () => {
  const { t, i18n } = useTranslation();




  let location = useLocation()
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,])



  return (
    <>
      <h2 id='home-services' className='md:text-3xl text-2xl text-center my-10 mx-[5%]'>{t('Services.home-header')}</h2>

      <div className="flex justify-center">

        <div className="CONTAINER md:mx-[10%] mx-[5%] grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 max-w-[1500px]">

          <div data-aos="fade-up">
            <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto  relative overflow-hidden">
              <a href="/strategic-consulting/" className='group'>
                <div className="w-auto bg-no-repeat h-[200px] bg-strategiaiImg rounded-t-lg bg-cover bg-center"></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Strategiai.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Strategiai.short-desc')}</p>
                  <button className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150 ">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" >
            <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto  relative overflow-hidden">
              <a href="/implementation-and-function-extension/" className='group'>
                <div className="w-auto bg-no-repeat h-[200px] bg-implementacioImg rounded-t-lg bg-cover bg-center"></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Implementacio.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Implementacio.short-desc')}</p>
                  <button className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" >
            <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto relative overflow-hidden">
              <a href="/technology-consulting/" className='group'>
                <div className="w-auto bg-no-repeat h-[200px] bg-technologiaiImg rounded-t-lg bg-cover bg-center"></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Technologiai.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Technologiai.short-desc')}</p>
                  <button className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" >
            <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto relative overflow-hidden">
              <a href="/system-operation/" className='group'>
                <div className="w-auto bg-no-repeat h-[200px] bg-rendszeruzemeltetesImg rounded-t-lg bg-cover bg-center "></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Rendszeruzemeltetes.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Rendszeruzemeltetes.short-desc')}</p>
                  <button className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" >
            <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto relative overflow-hidden">
              <a href="/application-support/" className='group'>
                <div className="w-auto bg-no-repeat h-[200px] bg-alkalmazasImg rounded-t-lg bg-cover bg-center"></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Alkalmazas.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Alkalmazas.short-desc')}</p>
                  <button className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" >
            <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto relative overflow-hidden">
              <a href="/project-management-and-quality-assurance/" className='group'>
                <div className="w-auto bg-no-repeat h-[200px] bg-projektmenedzsmentImg rounded-t-lg bg-cover bg-center"></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Projektmenedzsment.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Projektmenedzsment.short-desc')}</p>
                  <button className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default HomeServices