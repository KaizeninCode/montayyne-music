import { services } from "../pages/Services";
// import { Card, CardBody, CardHeader } from "@chakra-ui/react";

const ServiceCarousel = () => {

  return (
    <section className="flex items-center justify-center section p-4 max-md:overflow-y-scroll" id="section">
      <div className="flex items-center justify-center py-4">
        <img src="/Boombox-amico.png" alt="broooo" width={400} className="mr-40 max-lg:hidden"/>

        <div className=" max-lg:px-10 lg:w-1/2 lg:mt-14 flex flex-col justify-center items-start">
          {services.map((service, index) => (
            <div key={index} className="text-white">
              <h2 className="font-nunito font-extrabold md:text-2xl lg:text-3xl text-md flex items-center">{service.icon}&nbsp;{service.name}</h2>
              <p className="font-poppins max-md:mb-8 mb-6 lg:text-xl md:text-lg text-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section> 
  )
}

export default ServiceCarousel
