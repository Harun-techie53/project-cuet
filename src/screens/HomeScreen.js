import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ResearchCard from '../components/Research/ResearchCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllResearches } from '../actions/researchAction';

const HomeScreen = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchAllResearches());
    }, []);
  const researchReducer = useSelector(state => state.researchReducer);
  const isLoading = researchReducer.isLoading ? researchReducer.isLoading : null;
  const researches = researchReducer.researches ? researchReducer.researches : null;
  return (
    <div className='flex flex-col space-y-10 lg:pb-12'>
      <section>
        <div>
          <img 
            src='https://www.cuet.ac.bd/frontend/images/background-slider-1.jpg' 
            alt='Banner Image'
          />
        </div>
      </section>
      <section>
        <div className="text-center flex flex-col space-y-3">
          <h3 className='text-4xl font-bold text-gray-700'>
            Research Works
          </h3>
          <Link 
            to='/researches'
            className='text-sm font-semibold hover:text-blue-400'
          >
            View all research works
            <DoubleArrowIcon sx={{ fontSize: 'small' }}/>
          </Link>
        </div>
        <div className='flex flex-col flex-start py-4 lg:justify-evenly lg:flex-row'>
          {
            researches?.map((research, index) => {
              if(index < 3) {
                return <ResearchCard research={research} />
              }
            })
          }
        </div>
      </section>
      <section className='flex flex-col space-y-8 items-center'>
        <div className='flex flex-col space-y-4 items-center'>
          <h2 className='text-4xl font-bold text-gray-700'>
            Video Conferencing
          </h2>
          <Link 
            to='/videoChat'
            className='text-sm font-semibold flex items-center hover:text-blue-400'
          >
            Make a Video Call
            <DoubleArrowIcon sx={{ fontSize: 'small' }}/>
          </Link>
        </div>
        <div>
          <img src='../../images/WebRTC-Banner.png'  alt='WebRTC-Banner'/>
        </div>
      </section>
    </div>
  )
}

export default HomeScreen