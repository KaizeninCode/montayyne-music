
const Portfolio = () => {
  return (
    <section className="section bg-red-500 text-white">
      <div className="w-full h-screen flex max-md:flex-col items-center justify-center">
        <div className="w-1/2 h-screen flex items-center justify-center max-lg:hidden">
            <img src="/Boombox-amico.png" alt="Pick me bro" className="h-[500px] mt-16"/>
        </div>
        <div className="mt-16 mx-6 md:w-1/2">
            <h2 className="lg:text-5xl text-2xl text-white font-poppins">Who we've worked with before</h2>
            <p className="lg:text-2xl text-md text-white font-nunito mb-4 mt-4">Well, we (read <em>I</em>) are professionally known as <em>Montayyne</em>. A capable music producer with more than 5 years of experience making music. All genres - you name it.</p>
            
        </div>
      </div>
    </section>
  )
}

export default Portfolio
