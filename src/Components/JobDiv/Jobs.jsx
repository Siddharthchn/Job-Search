import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../../assets/logo(1).png'
import logo2 from '../../assets/logo(2).png'
import logo3 from '../../assets/logo(3).png'
import logo4 from '../../assets/logo(4).png'
import logo5 from '../../assets/logo(5).png'
import logo6 from '../../assets/logo(6).png'
import logo7 from '../../assets/logo(7).png'
import logo8 from '../../assets/logo(8).png'

const Data = [{
  id:1,
  image:logo1,
  title:'Web Developer',
  time:'Now',
  location: 'Bengaluru',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, optio!',
  company: 'Novus Linus Co.'
},
{
  id:2,
  image:logo2,
  title:'UI Designer',
  time:'14Hrs',
  location: 'Hyderabad',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, optio!',
  company: 'Liquid Accessments'
},
{
  id:3,
  image:logo3,
  title:'Software EngIneer',
  time:'10Hrs',
  location: 'Pune',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, optio!',
  company: 'Web Tech Agency'
},
{
  id:4,
  image:logo4,
  title:'UI/UX Designer',
  time:'2Days',
  location: 'Bengaluru',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, optio!',
  company: 'Adobe'
},
{
  id:1,
  image:logo5,
  title:'Product Designer',
  time:'1month',
  location: 'Delhi',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, optio!',
  company: 'Government'
},
{
  id:6,
  image:logo6,
  title:'Lead Developer',
  time:'25Days',
  location: 'Chennai',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, optio!',
  company: 'Koeing Solutions'
},
{
  id:7,
  image:logo7,
  title:'Data Scientist',
  time:'4Hrs',
  location: 'Bengaluru',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, optio!',
  company: 'Himeloi-Co. Limited'
},
{
  id:8,
  image:logo8,
  title:'Researcher',
  time:'Now',
  location: 'Jaipur',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, optio!',
  company: 'Novus Linus Co.'
},
]


const Jobs = () => {


  return (
    <div>
    <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>

    {
      Data.map(({id,image,title,time,location,desc,company}) => {
      return(
        <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

        <span className='flex justify-between items-center gap-4'>
          <h1 className='text=[16px] font-semibold text-textColor  group-hover:text-white' >{title}</h1>

          <span className='flex items-center text-[#ccc] gap-1'>
            <BiTimeFive />{time}
          </span>
        </span>
        <h6 className='text-[#ccc]'>{location}</h6>

        <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white '>{desc}</p>

        <div className='company flex items-center gap-2'>
          <img src={image} alt="Company logo" className='w-[10%]' />
          <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
        </div>

        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white'>
          Apply Now
        </button>

      </div>
      )
      })
    }

    </div>
  </div>
  )
}

export default Jobs