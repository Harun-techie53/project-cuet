import React, {useState} from 'react'
import ProfileSection from '../components/ProfileSection';
import PublishedPaperSection from '../components/PublishedPaperSection';
import ResearchUploadForm from '../components/ResearchUploadForm';

const DashboardScreen = () => {
    const [open, setOpen] = useState(true);
    const [selectVal, setSelectVal] = useState(0);
  const Menus = [
    { title: "Profile"},
    { title: "Results"},
    { title: "Upload Research"},
    { title: "Research Works" },
    { title: "Published Papers" }
  ];

  // if(selectVal === 0) {
  //   console.log('Profile Selected!')
  // } else if(selectVal === 1) {
  //   console.log('Results Selected!')
  // } else if(selectVal === 2) {
  //   console.log('Routine Selected!')
  // } else {
  //   console.log('Academic Calendar Selected!')
  // }
  return (
    <div className='bg-gray-300'>
      <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5 relative pt-8 duration-300`}
      >
        <img
          src="../../images/Control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === selectVal && "bg-light-white"
              } `}
              onClick={() => setSelectVal(index)}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        {
          selectVal === 0 && (
            <ProfileSection/>
          )
        }

        {
          selectVal === 1 && (
            <div>
              <h1 className="text-2xl font-semibold ">
                Results Section
              </h1>
            </div>
          )
        }

        {
          selectVal === 2 && (
            <ResearchUploadForm/>
          )
        }

        {
          selectVal === 3 && (
            <PublishedPaperSection/>
          )
        }
      </div>
    </div>
    </div>
  )
}

export default DashboardScreen