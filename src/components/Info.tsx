
const Info = () => {
  return (
    <section className="section bg-red-500 overflow-hidden">
      <div className="w-full h-screen flex max-md:flex-col items-center justify-center">
        <div className="mt-16 mx-6 md:w-1/2">
            <h2 className="lg:text-5xl text-2xl text-white font-poppins">Who is Montayyne?</h2>
            <p className="lg:text-2xl text-md text-white font-nunito mb-4 mt-4">A capable music producer with more than 5 years of experience making music. All genres, you name it.</p>
            <h2 className="lg:text-5xl text-2xl text-white font-poppins">Why Montayyne?</h2>
            <p className="lg:text-2xl text-md text-white font-nunito mb-4 mt-4">With a portfolio that includes working with reputable artists both locally and internationally, quality is assured. I will walk with you through every step of the creation process, and help you achieve your creative vision.</p>
            
        </div>
        <div className="w-1/2 h-fit max-lg:hidden">
            <img src="/Blogging-bro.png" alt="Pick me bro"/>
        </div>
      </div>
    </section>
  )
}

export default Info
