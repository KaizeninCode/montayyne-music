import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Intro = () => {
    const navigate = useNavigate()
  return (
    <section className="section" id='intro'>
      <div className="w-full md:h-1/2 h-full max-md:flex max-md:flex-col max-md:justify-center bg-blue-900 pt-16 font-nunito text-center text-white">
        <h2 className="lg:text-5xl text-4xl font-extrabold">Hi there! 👋</h2>
        <p className="lg:text-3xl text-2xl mt-6 mb-6 w-4/5 mx-auto">Heard you were looking for someone to help you make that hit you've been dreaming about for a while now...</p>
        <h3 className="font-poppins lg:text-4xl text-xl font-bold">I might be able to help you!</h3>
      </div>
      <div className="w-full md:h-1/2 h-full flex max-md:flex-col">
        <div className="md:p-8 md:w-1/2 h-full bg-red-700 text-white font-nunito text-center lg:text-3xl text-xl flex flex-col justify-center max-md:pt-16">
            <h3>My name is Phil, but I'd like you to call me <em className='font-bold'>MONTAYYNE</em>.</h3>
            <h4> I'm a music producer.</h4>
            <Button
                variant={'outline'}
                color={'white'}
                // colorScheme='blackAlpha'
                w={'200px'}
                mx={'auto'}
                mt={10}
                _hover={{ bg: 'white', color: 'red.500' }}
                onClick={() => navigate('/about')}
            >
                Read more about me
            </Button>
        </div>
        <div className="md:w-1/2 h-full bg-purple-900 text-white font-nunito text-center lg:text-3xl text-xl  flex flex-col justify-center">
            <h3>I offer a variety of music production services.</h3>
            <h4 className='mt-8'> Interested?</h4>
            <Button
                variant={'outline'}
                color={'white'}
                // colorScheme='purple'
                w={'200px'}
                mx={'auto'}
                mt={10}
                _hover={{ bg: 'white', color: 'purple.700' }}
                onClick={() => navigate('/services')}
            >
                See what I can do
            </Button>
        </div>
      </div>
    </section>
  )
}

export default Intro
