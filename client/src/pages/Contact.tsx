
const Contact = () => {
  return (
    <section className="flex-1 pt-28 px-6 min-h-screen bg-blue-400">
      <div className="grid grid-cols-2 gap-8">
        <form action="post" className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center text-white font-poppins">Contact Us</h1>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-white text-xl">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-white text-xl">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-white text-xl">Message</label>
            <textarea
              name="message"
              id="message"
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-white text-blue-500 rounded-lg mx-auto" 
          >
            Submit
          </button>
        </form>
        <div className="border rounded-lg"></div>
      </div>
    </section>
  )
}

export default Contact
