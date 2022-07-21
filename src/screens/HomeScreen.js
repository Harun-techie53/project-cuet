import React from 'react'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HomeScreen = () => {
  return (
    <div className='flex flex-col space-y-10'>
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
            to='/'
            className='text-sm font-semibold hover:text-blue-400'
          >
            View all research works
            <DoubleArrowIcon sx={{ fontSize: 'small' }}/>
          </Link>
        </div>
        <div className='flex flex-col items-center py-4 lg:justify-evenly lg:py-4 lg:flex-row'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="../../images/VC_Building.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="../../images/VC_Building.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="../../images/VC_Building.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
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