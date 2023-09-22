import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {



  const { t, i18n } = useTranslation();

  return (
    <>

      <div className="bg-contactImg h-[200px] w-full  bg-cover bg-no-repeat bg-right relative">
        <h1 className="text-3xl font-bold md:mx-[10%] mx-[5%] h-full flex items-center absolute z-10">{t('Contact.banner-text')}</h1>
        <div className="mt-[2px] h-[201px] w-full bg-gradient-to-r  from-black xl:from-50% from-40% to-transparent relative">
        </div>
      </div>


      <div data-aos="fade" data-aos-delay="0" data-aos-offset="0" data-aos-duration="500" className="text-center my-10 mx-[5%]">
        <h2 id='home-services' className='text-3xl mb-3'>{t('Contact.title')}</h2>
        <div data-aos="fade" data-aos-delay="50" data-aos-offset="0" data-aos-duration="500">
          <p className=''>{t('Contact.title-desc')}</p>
        </div>
      </div>



      <div className="md:mx-[10%] mx-[5%] flex flex-wrap justify-center sm:gap-[50px] gap-[20px]">


        <div data-aos="fade-up" data-aos-delay="0" data-aos-offset="0" className="w-full sm:max-w-[300px] bg-[#161616] border-[#252525] border-[2px] rounded-lg p-[20px]">
          <div className="flex items-center gap-[10px]">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="35" height="35" rx="10" fill="#363636" />
              <path d="M25.5 9.5H9.5C8.4 9.5 7.5 10.4 7.5 11.5V23.5C7.5 24.6 8.4 25.5 9.5 25.5H25.5C26.6 25.5 27.5 24.6 27.5 23.5V11.5C27.5 10.4 26.6 9.5 25.5 9.5ZM25.1 13.75L18.56 17.84C17.91 18.25 17.09 18.25 16.44 17.84L9.9 13.75C9.79973 13.6937 9.71192 13.6177 9.64189 13.5265C9.57186 13.4352 9.52106 13.3308 9.49258 13.2194C9.46409 13.108 9.4585 12.9919 9.47616 12.8783C9.49381 12.7647 9.53434 12.6558 9.59528 12.5583C9.65623 12.4608 9.73632 12.3767 9.83073 12.311C9.92513 12.2453 10.0319 12.1995 10.1445 12.1763C10.2571 12.1531 10.3733 12.153 10.486 12.1759C10.5986 12.1989 10.7055 12.2445 10.8 12.31L17.5 16.5L24.2 12.31C24.2945 12.2445 24.4014 12.1989 24.514 12.1759C24.6267 12.153 24.7429 12.1531 24.8555 12.1763C24.9681 12.1995 25.0749 12.2453 25.1693 12.311C25.2637 12.3767 25.3438 12.4608 25.4047 12.5583C25.4657 12.6558 25.5062 12.7647 25.5238 12.8783C25.5415 12.9919 25.5359 13.108 25.5074 13.2194C25.4789 13.3308 25.4281 13.4352 25.3581 13.5265C25.2881 13.6177 25.2003 13.6937 25.1 13.75Z" fill="white" />
            </svg>
            <p className=' font-medium'>{t('Contact.email-title')}</p>
          </div>
          <div className="mt-[10px] text-secondary">{t('Contact.email-desc')}</div>
          <div className="mt-[10px] text-main">{t('Contact.email')}</div>
        </div>



        <div data-aos="fade-up" data-aos-delay="50" data-aos-offset="0" className="w-full sm:max-w-[300px] bg-[#161616] border-[#252525] border-[2px] rounded-lg p-[20px]">
          <div className="flex items-center gap-[10px]">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1034_691)">
                <rect width="35" height="35" rx="10" fill="#363636" />
                <rect x="-2.0293" y="-1.5" width="39.0591" height="38" rx="19" fill="#363636" />
                <path d="M21.2663 20.0476L20.7845 20.5273C20.7845 20.5273 19.6378 21.6666 16.509 18.5557C13.3801 15.4449 14.5268 14.3056 14.5268 14.3056L14.8297 14.0027C15.5783 13.2594 15.6492 12.0651 14.9959 11.1926L13.6618 9.41057C12.8528 8.33057 11.291 8.18762 10.3646 9.10881L8.7022 10.7606C8.24373 11.218 7.93667 11.8088 7.97373 12.4653C8.06902 14.1457 8.82926 17.7595 13.0688 21.9757C17.5657 26.4461 21.7851 26.624 23.51 26.4631C24.0563 26.4122 24.5307 26.1348 24.9129 25.7536L26.4165 24.2586C27.4329 23.2495 27.1471 21.5183 25.8468 20.8121L23.8244 19.712C22.971 19.2482 21.9334 19.3848 21.2663 20.0476Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1034_691">
                  <rect width="35" height="35" rx="10" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className=' font-medium'>{t('Contact.phone-title')}</p>
          </div>
          <div className="mt-[10px] text-secondary">{t('Contact.phone-desc')}</div>
          <div className="mt-[10px] text-main">{t('Contact.phone')}</div>
        </div>



        <div data-aos="fade-up" data-aos-delay="100" data-aos-offset="0" className="w-full sm:max-w-[300px] bg-[#161616] border-[#252525] border-[2px] rounded-lg p-[20px]">
          <div className="flex items-center gap-[10px]">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1034_699)">
                <rect width="35" height="35" rx="10" fill="#363636" />
                <rect width="35" height="35" rx="10" fill="#363636" />
                <path d="M17.5 8.75C15.6773 8.75215 13.9299 9.47717 12.641 10.766C11.3522 12.0549 10.6272 13.8023 10.625 15.625C10.6228 17.1145 11.1094 18.5636 12.01 19.75C12.01 19.75 12.1975 19.9969 12.2281 20.0325L17.5 26.25L22.7744 20.0294C22.8019 19.9963 22.99 19.75 22.99 19.75L22.9906 19.7481C23.8908 18.5623 24.3771 17.1138 24.375 15.625C24.3729 13.8023 23.6478 12.0549 22.359 10.766C21.0701 9.47717 19.3227 8.75215 17.5 8.75ZM17.5 18.125C17.0056 18.125 16.5222 17.9784 16.1111 17.7037C15.7 17.429 15.3795 17.0385 15.1903 16.5817C15.0011 16.1249 14.9516 15.6222 15.048 15.1373C15.1445 14.6523 15.3826 14.2069 15.7322 13.8572C16.0819 13.5076 16.5273 13.2695 17.0123 13.173C17.4972 13.0766 17.9999 13.1261 18.4567 13.3153C18.9135 13.5045 19.304 13.825 19.5787 14.2361C19.8534 14.6472 20 15.1305 20 15.625C19.9992 16.2878 19.7355 16.9232 19.2669 17.3919C18.7982 17.8605 18.1628 18.1242 17.5 18.125Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1034_699">
                  <rect width="35" height="35" rx="10" fill="white" />
                </clipPath>
              </defs>
            </svg>


            <p className='font-medium'>{t('Contact.address-title')}</p>
          </div>
          <div className="mt-[10px] text-secondary whitespace-pre-line ">{t('Contact.address-desc')}</div>
          <div className="mt-[10px] text-main">{t('Contact.address-country')}</div>
        </div>



      </div>








    </>
  )

}

export default Contact