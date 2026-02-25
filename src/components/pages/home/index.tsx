import MainContent from './MainContent'
import TodayVideos from './TodayVideos'

const HomeContainer = () => {
  return (
    <section className='py-10 container'>
      <div className='border border-primary-300 grid grid-cols-1 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <MainContent />
        </div>
        <div className='px-6 py-4'>
          <TodayVideos />
        </div>
      </div>
    </section>
  )
}

export default HomeContainer