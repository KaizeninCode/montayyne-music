
const About = () => {
  return (
    <section className="section bg-red-500" id="about">
      <div className="w-full h-full flex max-md:flex-col items-center justify-center">
        <div className="mt-16 mx-6 md:w-1/2">
            <h2 className="lg:text-7xl text-2xl text-white font-poppins">Who are we?</h2>
            <p className="lg:text-2xl text-md text-white font-nunito mb-8">Well, we (read <span>I</span>) are professionally known as <em>Montayyne</em>. A capable music producer with more than 5 years of experience making music. All genres - you name it.</p>
            <h2 className="lg:text-7xl text-2xl text-white font-poppins">Why us?</h2>
            <p className="lg:text-2xl text-md text-white font-nunito mb-4 mt-4">With a portfolio that includes working with reputable artists both locally and internationally, quality is assured. I will walk with you through every step of the creation process, and help you achieve your creative vision.</p>
            <span className="lg:text-4xl text-white font-nunito">Seriously though, WHY WOULDN'T YOU TAKE ME UP ON MY OFFER?</span>
            <p className="lg:text-md text-sm text-white font-comfortaa">(Please take me up on my offer)</p>
        </div>
        <div className="w-1/2 h-full max-lg:hidden">
            <img src="/Blogging-bro.png" alt="Pick me bro" />
        </div>
      </div>
    </section>
  )
}

export default About
