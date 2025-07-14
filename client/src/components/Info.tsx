import { Button } from "@chakra-ui/react"

const Info = () => {
  return (
    <section className="section p-4 bg-red-500 overflow-hidden">
      <div className="min-h-screen grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center mx-6">
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
        <div className="max-lg:hidden bg-about bg-cover bg-center bg-no-repeat"/>
            {/* <img src="/Blogging-bro.png" alt="Pick me bro"/> */}
      </div>
    </section>
  )
}

export default Info
