import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { useTranslation } from 'react-i18next';







const SliderMenu = () => {

  const { t, i18n } = useTranslation();


  return (
    <>
      <h2 data-aos="fade-up" id='home-services' className='md:text-3xl text-2xl text-center my-10 mx-[5%] mt-[200px]'>{t('Slider.title')}</h2>
      <div data-aos="fade-up" data-aos-delay="100" className='md:mx-[10%] mx-[5%]'>

        <Swiper
          style={{
            "--swiper-pagination-color": "#609FFF",
            "--swiper-pagination-bullet-inactive-color": "#A4A4A4",
            "--swiper-pagination-bullet-inactive-opacity": "0.2",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
          }}
          slidesPerView={1}
          spaceBetween={20}
          freeMode={false}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            900: {
              slidesPerView: 2,

            },
            1370: {
              slidesPerView: 3,

            },
            1820: {
              slidesPerView: 4,

            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >


          <SwiperSlide className='h-[520px]'>
            <a href="/strategic-consulting/" className='group'>
              <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto  relative overflow-hidden">
                <div className="w-auto bg-no-repeat h-[200px] bg-strategiaiImg rounded-t-lg bg-cover bg-center"></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Strategiai.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Strategiai.short-desc')}</p>
                  <button href="/strategic-consulting/" className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150 ">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide >
            <a href="/implementation-and-function-extension/" className='group'>
              <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto  relative overflow-hidden">
                <div className="w-auto bg-no-repeat h-[200px] bg-implementacioImg rounded-t-lg bg-cover bg-center"></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Implementacio.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Implementacio.short-desc')}</p>
                  <button href="/implementation-and-function-extension/" className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/technology-consulting/" className='group'>
              <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto relative overflow-hidden">
                <div className="w-auto bg-no-repeat h-[200px] bg-technologiaiImg rounded-t-lg bg-cover bg-center"></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Technologiai.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Technologiai.short-desc')}</p>
                  <button href="/technology-consulting/" className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/system-operation/" className='group'>
              <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto relative overflow-hidden">
                <div className="w-auto bg-no-repeat h-[200px] bg-rendszeruzemeltetesImg rounded-t-lg bg-cover bg-center "></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Rendszeruzemeltetes.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Rendszeruzemeltetes.short-desc')}</p>
                  <button href="/system-operation/" className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/application-support/" className='group'>
              <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto relative overflow-hidden">
                <div className="w-auto bg-no-repeat h-[200px] bg-alkalmazasImg rounded-t-lg bg-cover bg-center"></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Alkalmazas.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Alkalmazas.short-desc')}</p>
                  <button href="/application-support/" className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/project-management-and-quality-assurance/" className='group'>
              <div className="CARD w-auto max-w-[350px] h-auto border border-[#363636] rounded-lg mx-auto relative overflow-hidden">
                <div className="w-auto bg-no-repeat h-[200px] bg-projektmenedzsmentImg rounded-t-lg bg-cover bg-center"></div>
                <div className="text m-5 flex flex-col gap-[10px] min-h-[221px]">
                  <h3 className='font-bold'>{t('Services.Projektmenedzsment.title')}</h3>
                  <hr className='border-secondary' />
                  <p className='text-sm'>{t('Services.Projektmenedzsment.short-desc')}</p>
                  <button href="/project-management-and-quality-assurance/" className=" block text-center text-sm font-medium border border-secondary rounded-md py-[10px] mt-auto cursor-pointer group-hover:bg-stone-400/25 duration-150">
                    {t('Services.home-call-btn')}
                  </button>
                  <span className='absolute bottom-0 left-0 h-[160px] w-[160px] rounded-full bg-[#FCFDF2] opacity-30 blur-[150px] bg-clip-border -z-10'></span>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div >



    </>
  )
}

export default SliderMenu