
const RateCard = () => {
    const licenses = [
        {
            name: 'Basic',
            contents: 'MP3 file only',
            price: '$49.99'
        },
        {
            name: 'Premium',
            contents: 'MP3 and WAV files only',
            price: '$79.99'
        },
        {
            name: 'Trackout',
            contents: 'Beat stems only',
            price: '$99.99'
        },
        {
            name: 'Exclusive',
            contents: 'MP3, WAV and beat stems',
            price: '$249.99'
        },
    ]
  return (
    <section className="section bg-purple-800">
        <div className="flex max-lg:flex-col items-center justify-center max-lg:pt-16">
            {licenses.map((license, index) => (
                <div key={index} className="mb-4 lg:m-4 lg:mt-32 mt-2 lg:h-[400px] h-[100px] w-[300px] flex flex-col items-center justify-center shadow shadow-white rounded-md font-nunito text-white hover:bg-white hover:text-purple-700 cursor-pointer transition ">
                    <h2 className="lg:text-3xl lg:mb-16 uppercase font-bold">{license.name}</h2>
                    <p className="lg:text-xl lg:mb-16">{license.contents}</p>
                    <h3 className="lg:text-4xl font-extrabold">{license.price}</h3>
                </div>
            ))}
        </div>
      
    </section>
  )
}

export default RateCard
