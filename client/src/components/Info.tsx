import { Button } from "@chakra-ui/react"

const Info = () => {
  return (
    <section className="section bg-red-500 overflow-hidden">
      <div className="w-full h-screen flex max-md:flex-col items-center justify-center">
        <div className="flex flex-col justify-around mx-6 md:w-1/2">
            <p className="lg:text-2xl text-md text-white font-nunito mb-4 mt-4">
              Montayyne is a capable music producer with more than 5 years of experience making music. All genres, you name it.
            </p>
            <p className="lg:text-2xl text-md text-white font-nunito mb-8 mt-4">
              With a portfolio that includes working with reputable artists both locally and internationally, quality is assured. I will walk with you through every step of the creation process, and help you achieve your creative vision.
            </p>
            <a href="#portfolio">
              <Button
                variant={'outline'}
                fontFamily={'Nunito'}
                color={'white'}
                _hover={{color: 'red.500', backgroundColor: 'white'}}
              >
                Check my portfolio out
              </Button>
            </a>
        </div>
        <div className="w-1/2 h-fit max-lg:hidden">
            <img src="/Blogging-bro.png" alt="Pick me bro"/>
        </div>
      </div>
    </section>
  )
}

export default Info
