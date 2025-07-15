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
          <div className="flex flex-col items-start justify-center w-full lg:w-1/2 h-full p-8">
            <h1 className="text-white font-nunito font-bold lg:text-7xl text-5xl mx-6 mt-20">
              Helping create timeless music
            </h1>
            <p className="font-poppins mx-6 mt-5 text-white text-lg lg:text-3xl">
              We're here to help you bring your next music project to life.
            </p>
            <div className='mt-10 mx-6 max-lg:mx-auto'>
              <a href="#intro">
                <Button
                  variant={'solid'}
                  colorScheme='whiteAlpha'
                  fontFamily={'Comfortaa'}
                  // color={'white'}
                  _hover={{ bg: 'white', color: 'black' }}
                >
                  Find out how
                </Button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default BackgroundVideo
