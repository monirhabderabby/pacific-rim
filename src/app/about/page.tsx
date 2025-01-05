
import AboutSection from '@/components/sections/about-section'
import img from '../../../public/assets/img/about_image.png'


export default function page() {
  return (
    <div className='container '>
         <AboutSection image={img}/>
    </div>
)
}
