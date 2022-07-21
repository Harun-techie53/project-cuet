import React, {useState, useEffect, useContext} from 'react'
import { 
    InputLabel, 
    MenuItem, 
    FormControl, 
    Select, 
    Button,
    Stack
} from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../config';
import { semesters } from '../dummies';
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux';
import { getAuthToken } from '../utils';

const CourseEnrollScreen = () => {
    const authToken = getAuthToken();
    const [semester, setSemester] = useState({
        level: 1, term: 1
    });
    const [isCoursesLoading, setIsCoursesLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const authUserDetails = useSelector((state) => state.authReducer.authUserDetails);

    const handleChange = (event) => {
        setSemester(event.target.value);
    };

    const fetchAllCourses = async () => {
        try {
            setIsCoursesLoading(true);

            const {data} = await api.get(`/course?level=${semester.level}&term=${semester.term}`);

            setCourses(data.data.courses);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
      fetchAllCourses();
    }, [semester]);

    let totalPayment = 0;

    courses.forEach((course) => (
        totalPayment += course.price
    ));
    

    const makePaymentHandler = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        }
        try {
            const {data} = await api.get(
                `/course/checkout-session?level=${semester.level}&term=${semester.term}`,
                config
            );

            if(data.status === 'success') alert('Courses enrolled successfully');

            if(data.status === 'success') {
                const res = await api.post(
                    `/registered-term?level=${semester.level}&term=${semester.term}`,
                    config
                );
            }
        } catch (err) {
            console.log(err);
        }
    }
    
  return (
    <section className="bg-white py-10 lg:py-[20px]">
        <div className="container">
            <div className='flex items-center justify-between'>
                <div className='py-5'>
                    <h3 className='text-2xl font-semibold'>
                        Semester Courses
                    </h3>
                </div>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-simple-select-label">
                        Semester
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={semester}
                        defaultValue={semester}
                        label="Semester"
                        onChange={handleChange}
                    >
                        {
                            semesters.map((item) => (
                                <MenuItem value={item.value}>
                                    {item.name}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </div>
      <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
               <table className="table-auto w-full">
                  <thead>
                     <tr className="bg-primary text-center">
                        <th
                           className="
                           table-heading
                           border-l border-transparent
                           "
                        >
                           Course Code
                        </th>
                        <th
                           className="
                           table-heading
                           "
                        >
                           Credit
                        </th>
                        <th
                           className="
                           table-heading
                           "
                        >
                           Level-Term
                        </th>
                        <th
                           className="
                           table-heading
                           "
                        >
                           Sessional
                        </th>
                        <th
                           className="
                           table-heading
                           "
                        >
                           Status
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                    {
                        courses.map((course) => (
                            <tr>
                                <td
                                    className="
                                    tabel-data-primary
                                    border-b border-l border-[#E8E8E8]
                                    "
                                >
                                    {course.name}
                                </td>
                                <td
                                    className="
                                    tabel-data-secondary
                                    "
                                >
                                    {course.credit}
                                </td>
                                <td
                                    className="
                                    tabel-data-primary
                                    border-b border-[#E8E8E8]
                                    "
                                >
                                    {course.level} - {course.term}
                                </td>
                                <td
                                    className="
                                    tabel-data-secondary
                                    "
                                >
                                    {course.sessional ? 'Yes' : 'No'}
                                </td>
                                {/* <td
                                    className="
                                    tabel-data-primary
                                    border-b border-[#E8E8E8]
                                    "
                                >
                                    {course.status ? (
                                        <p className='text-green-600'>
                                            Taken
                                        </p>
                                    ): (
                                        <p className='text-red-600'>
                                            Not Taken
                                        </p>
                                    )}
                                </td> */}
                                
                            </tr>

                        ))
                    }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
   <Stack direction='row' spacing={2} className='py-3 px-3'>
        <Link to='/'>
            <Button
                variant='contained'
                color='primary'
            >
                Back to Home
            </Button>
        </Link>
        <StripeCheckout
            name="Course Registration" // the pop-in header title
            description={`Pay to enroll level-${semester.level} & term-${semester.term} courses`} // the pop-in header subtitle
            image="../../images/CUET_Vector.png"
            ComponentClass="div"
            currency="USD"
            panelLabel="Pay" // prepended to the amount in the bottom pay button
            amount={totalPayment * 100}
            email={authUserDetails?.email}
            stripeKey='pk_test_51LDEwtHqsRubZWiBuWEnjS8MPWGYgFmOQhHOnl4hEkSdNCUoKc4suIGGZfu2YhhoOL1lqliwmVcndxAx9P4zoy0c00FMK76TpT'
            token={makePaymentHandler}
        >
            <Button 
                variant='contained'
                color='secondary'
            >
                Enroll Courses
            </Button>
        </StripeCheckout>
   </Stack>
</section>
  )
}

export default CourseEnrollScreen