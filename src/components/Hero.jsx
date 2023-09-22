
import { useTranslation } from 'react-i18next';


const Hero = () => {
  const { t, i18n } = useTranslation();


  return (
    <>

      <div className="lg:opacity-100 opacity-40 h-screen -mt-24 bg-hero bg-no-repeat bg-right bg-contain -z-50 relative">
      </div>


      <div className="lg:text-left lg:max-w-[60%] sm:top-[30%] top-[25%] md:mx-[10%] mx-[5%] text-center flex flex-col gap-10 absolute">
        <div data-aos="fade-up" data-aos-delay="0" data-aos-offset="0">
          <h1 className='2xl:text-8xl md:text-5xl text-3xl font-bold bg-gradient-to-r from-main to-pink-400 bg-clip-text text-transparent pb-2'>{t('Hero.header')}</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="75" data-aos-offset="0">
          <p className='text-secondary'>{t('Hero.desc')}</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="150" data-aos-offset="0">
          <a href="/about-us/">
            <button className="lg:mx-0 mt-1 mx-auto max-w-[200px] border border-secondary py-2 px-4 rounded-lg hover:bg-stone-400/25 duration-150">
              {t('Hero.call-btn')}
            </button>
          </a>
        </div>
      </div>










    </>
  )
}



export default Hero