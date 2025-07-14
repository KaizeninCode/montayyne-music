import { RxMixerVertical } from "react-icons/rx";
import { CiSpeaker } from "react-icons/ci";
import { IoMdMicrophone } from "react-icons/io";
import { RiDiscLine } from "react-icons/ri";
import ServiceCarousel from "../components/ServiceCarousel";
import RateCard from "../components/RateCard";

export const services = [
  {
   name: 'Mixing',
   description: 'Creating a balanced and engaging listening experience in your track.',
   icon: <RxMixerVertical/>
  }, 
  {
   name: 'Mastering',
   description: 'Enhancing the overall sound quality, ensuring your track sounds professional and cohesive across all playback systems and media formats.',
   icon: <CiSpeaker/>
  }, 
  {
   name: 'Vocal Recording',
   description: 'Capturing your voice for use in various projects like songs, film, podcasts and any other music projects.',
   icon: <IoMdMicrophone/>
  }, 
  {
   name: 'Beats',
   description: 'High quality instrumentals to help inspire your next big hit.',
   icon: <RiDiscLine/>
  }
]

const Services = () => {
  return (
    <div className="section bg-purple-700">
      <ServiceCarousel/>
      <RateCard/>
    </div>
  )
}

export default Services
