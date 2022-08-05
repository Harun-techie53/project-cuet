import React, {useEffect, useState, Fragment} from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../config';
import { Breadcrumbs } from '@mui/material';

const ResearchScreen = () => {
    const {researchId} = useParams();
    const [isResearchLoading, setIsResearchLoading] = useState(false);
    const [research, setResearch] = useState({});
    const [researchAuthor, setResearchAuthor] = useState(null);

    const fetchResearchHandler = async () => {
        setIsResearchLoading(true);
        const {data: researchData} = await api.get(`/research/${researchId}`);
        const {data: userData} = await api.get(`/auth/users/${researchData.data.research.userId}`);
        setResearch({...researchData.data.research});
        setResearchAuthor({...userData.data.user});
        setIsResearchLoading(false);
    }

    useEffect(() => {
      fetchResearchHandler();
    }, [researchId]);
    
  return (
    <Fragment>
        {
            isResearchLoading ? (
                <p>
                    Loading...
                </p>
            ) : (
                <div className='flex justify-between'>
                    <div className='container space-y-6 p-5'>
                        <div className='space-y-2'>
                            <h2 className='text-2xl font-bold'>
                                {research?.title}
                            </h2>
                            <div>
                                <Breadcrumbs separator="›" aria-label="breadcrumb">
                                    <Link to='/' className='hover:font-semibold'>
                                        Home
                                    </Link>
                                    <Link to='/researches' className='hover:font-semibold'>
                                        All Researches
                                    </Link>
                                    <Link to={`/research/${researchId}`} className='hover:font-semibold'>
                                        Research
                                    </Link>
                                </Breadcrumbs>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg text-gray-700'>
                                {research?.slug}
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-semibold'>
                                Description
                            </h3>
                            <p className='text-lg text-gray-700'>
                                {research?.description}
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-semibold'>
                                Authored By
                            </h3>
                            <div>
                                <p className='text-xl font-semibold italic'>
                                    {researchAuthor?.name}
                                </p>
                                <p className='flex align-center space-x-2'>
                                    <p className='text-xl font-semibold'>
                                        Email: 
                                    </p>
                                    <p className='text-xl underline text-blue-600 font-semibold cursor-pointer'>
                                        {researchAuthor?.email}
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-md'>
                        <h2>
                            Other Researches by {researchAuthor?.name}
                        </h2>
                    </div>
                </div>
            )
        }
    </Fragment>
  )
}

export default ResearchScreen