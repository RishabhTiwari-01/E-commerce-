import React from 'react'
// ✅ Correct Import Path
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'; 

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi magni ea qui earum libero labore corporis asperiores, ratione neque. Tempora error impedit beatae velit incidunt nihil dolore deserunt officiis!</p>
      <p>Rishabh Tiwari A full stack developer BCA student from Rajuu bhaiya University Allhabad</p>
    <b className='text-gray-800'>Our mission</b>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit officia labore culpa cumque animi adipisci cum quisquam. Facilis blanditiis earum libero mollitia quaerat maiores explicabo ducimus dolores soluta, aliquam labore?
   Rem dignissimos minima quo omnis, saepe nisi eos qui et velit laudantium quam ea at, atque deleniti. Odio assumenda quas excepturi cupiditate eligendi delectus ipsam mollitia labore, provident tenetur voluptatum!
   Perspiciatis repellat sed cum sapiente, quasi dicta quibusdam commodi et voluptates ea asperiores tempore debitis modi hic beatae accusantium, mollitia illo perferendis ex obcaecati corporis vitae cupiditate eos. At, assumenda.</p>
       </div>
        </div>
        <div className='text-xl py-4'>
      <Title text1={"WHY"} text2={"CHOOSE US"}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
       <b>Quality Asorance:</b>
       <p className='text-gray-700'>We manually have good products in our platform please visit here at once</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
       <b>Covinance:</b>
       <p className='text-gray-700'>with our user inter face please visit here at once </p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
       <b>Exceptional customer Service </b>
       <p className='text-gray-700'>Our team are full dedicated to help us please visit once here:</p>
       </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About