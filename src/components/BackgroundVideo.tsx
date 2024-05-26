import { Button } from '@chakra-ui/react'
const BackgroundVideo = () => {
  return (
    <div className="video-container">
        <video
              className="w-full h-full object-cover"
              src="/video.mp4"
              autoPlay
              loop
              muted
          />
        <div className="overlay">
          <div className="flex flex-col items-start justify-center w-full lg:w-1/2 h-full">
            <h1 className="text-white font-nunito font-bold lg:text-7xl text-5xl ml-10 mt-20">
              Helping create timeless music.
            </h1>
            <p className="font-poppins ml-10 mt-5 text-white text-lg lg:text-3xl">
              We're here to help you bring your next music project to life.
            </p>
            <div className='mt-10 ml-10 max-lg:mx-auto'>
              <Button 
                // variant={'outline'} 
                colorScheme='blackAlpha'
                fontFamily={'Comfortaa'} 
                color={'white'}
                _hover={{ bg: '#000', color: 'red.200' }}
              >
                Find out how
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BackgroundVideo
