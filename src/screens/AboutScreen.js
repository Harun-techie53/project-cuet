import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

const AboutScreen = () => {
  return (
    <div>
      <section className='relative'>
        <div className='relative blur-sm backdrop-blur-md backdrop-brightness-50 bg-white/50'>
          <img 
            src='https://www.cuet.ac.bd/frontend/images/bg-404.jpg' 
          />
        </div>
        <div className='absolute bottom-1/2 right-1/3 z-200 flex flex-col space-y-4 items-center rounded-md border-4 py-6 px-40'>
          <h3 className='text-5xl font-bold text-gray-700'>
            ABOUT US
          </h3>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to='/' className='hover:underline font-semibold'>
              Home
            </Link>
            <Link
              to='/about'
              className='hover:underline font-semibold'
            >
              About
            </Link>
          </Breadcrumbs>
        </div>
      </section>
      <section className='px-20 py-12 flex flex-col space-y-6'>
        <div>
          <h3 className='text-3xl font-semibold'>
            History of CUET
          </h3>
        </div>
        <div className='flex flex-col space-y-4'>
          <p className='text-left tracking-wide indent-3.5 antialiased'>
          Former Bangladesh Institute of Technology, Chittagong, abbreviated 
          as BIT Chittagong is presently Chittagong University of Engineering & 
          Technology (CUET). It is one of the prominent and prestigious autonomous 
          self-degree-awarding institute in the engineering education of Bangladesh. 
          This Institute was created out of Engineering College, Chittagong that was established 
          in 1968. The Chittagong Engineering College functioned as the Faculty of Engineering of 
          the University of Chittagong. Through a Government ordinance in 1986, the college was 
          converted into an Institute of Technology. In 2003 this institute of technology was 
          converted into a public university. The honorable President of Bangladesh is the Chancellor 
          of the University.
          </p>
          <p className='text-left tracking-wide indent-3.5 antialiased'>
          Chittagong University Of Engineering & Technology abbreviated as CUET, is one of the prominent 
          and prestigious degree awarding institute in the engineering education of Bangladesh. 
          This University was created out of Engineering College, Chittagong, that was established in 1968. 
          The Engineering College , Chittagong , functioned as the Faculty of Engineering of the University of
           Chittagong. Though a Government Ordinance in 1986 the college was converted into an institution (BIT,
            Chittagong).The honorable President of Bangladesh is the visitor of the institute . A Board of Governors headed by a Chairman appointed by the President is the policy making and administrative authority. There were three other similar Institutes of Technology in the country namely BIT Khulna, BIT Rajshahi and BIT Dhaka that are converted to Khulna University Of Engineering, Rajshashi University Of Engineering & Technology(RUET) & Technology(KUET),Dhaka University Of Engineering & Technology(DUET)
          </p>
          <p className='text-left tracking-wide indent-3.5 antialiased'>
            CUET is unique and incompatible due to its proximity to Chittagong, the major sea-port and the 
            beautiful Hill city of the country. The University is situated by the side of the 
            Chittagong-Kaptai road some 25 kilometers off from the center of Chittagong City. 
            Moreover all the tourist attractions of the country like the large hydroelectric plant, 
            the natural beauty of the lake of Kaptai, hill sports of Rangamati, Bandarban, the longest 
            sea beach of the world and tourist resort of Cox's Bazar are only a few hours journey.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutScreen