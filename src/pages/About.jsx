import { useTranslation } from 'react-i18next';

function About() {

  const { t, i18n } = useTranslation();

  return (
    <>

      <div className="bg-aboutBannerImg h-[200px] w-full  bg-cover bg-no-repeat bg-right relative">
        <h1 className="text-3xl font-bold md:mx-[10%] mx-[5%] h-full flex items-center absolute z-10">{t('About.banner-text')}</h1>
        <div className="mt-[2px] h-[201px]  w-full bg-gradient-to-r  from-black xl:from-50% from-40% to-transparent relative">
        </div>
      </div>

      <div className="xl:w-1/2 md:w-2/3 md:mx-[10%] mx-[5%] mt-10 flex flex-col gap-5">
        <div data-aos="fade" data-aos-duration="500">
          <h2 className="text-xl font-medium">{t('About.about-us-title')}</h2>
        </div>
        <div data-aos="fade" data-aos-duration="500" data-aos-delay="150">
          <p className="">{t('About.about-us-desc1')}</p>
          <p className="">{t('About.about-us-desc2')}</p>
          <p className="">{t('About.about-us-desc3')}</p>
        </div>
      </div>

      <div className="bg-stone-300/5 py-10 mt-10">

        <div className="xl:w-1/2 md:w-2/3 md:mx-[10%] mx-[5%] flex flex-col gap-5">
          <div data-aos="fade" data-aos-duration="500" data-aos-offset="110">
            <h2 className="text-xl font-medium">{t('About.philosophy-title')}</h2>
          </div>
          <div data-aos="fade" data-aos-duration="500" data-aos-delay="150" data-aos-offset="110">
            <p className="">{t('About.philosophy-desc1')}</p>
            <p className="">{t('About.philosophy-desc2')}</p>
            <p className="">{t('About.philosophy-desc3')}</p>
          </div>
        </div>
      </div>




    </>
  )

}

export default About