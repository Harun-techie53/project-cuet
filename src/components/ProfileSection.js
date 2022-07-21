import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

const ProfileSection = () => {
    const authUserDetails = useSelector((state) => state.authReducer.authUserDetails);
    // useEffect(() => {
    //     if(authUserDetails?.photo) fetchUserPhoto(authUserDetails?.photo);
    // }, []);
    
  return (
    <div className='flex flex-col items-center space-y-4 border-2 bg-gray-200 rounded-md m-5'>
        <div className='py-3'>
            <h2 className='text-3xl font-bold text-slate-800'>
                User Profile
            </h2>
        </div>
        <div className='cursor-pointer'>
            <img 
                className='rounded-full ring'
                src='#' 
            />
        </div>
        <span className='font-bold'>
            1809030
        </span>
        <div className='flex flex-col space-y-2 items-center pt-3 pb-5'>
            <p className='text-xl font-semibold'>
                {authUserDetails?.name}
            </p>
            <p className='text-xl underline text-blue-600 font-semibold cursor-pointer'>
                {authUserDetails?.email}
            </p>
            <div className='flex'>
                <p className='text-xl font-semibold'>
                    The Person is a {authUserDetails?.isTeacher ? 'Teacher' : 'Student'}
                </p>
            </div>
        </div>
        <div className='py-5 flex items-center justify-between'>
            <button type="button" className="btn-blue">
                Update Profile
            </button>
            <button type="button" className="btn-red">
                Delete Profile
            </button>
        </div>
    </div>
  )
}

export default ProfileSection