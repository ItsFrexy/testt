import { useTranslation } from 'react-i18next';


function Page404() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="flex flex-col py-32 gap-10 justify-center items-center w-full h-2/3 -mb-[200px] md:px-[10%] px-[5%] text-center">
        <h1 className='lg:text-9xl md:text-8xl text-6xl font-bold bg-gradient-to-r from-main to-pink-400 bg-clip-text text-transparent pb-2'>{t('Page404.title')}</h1>
        <p className='max-w-[600px]'>{t('Page404.desc')}<a href="/" className='text-main text-medium hover:opacity-90'>{t('Page404.href')}</a>.</p>
      </div>

    </>
  )

}

export default Page404