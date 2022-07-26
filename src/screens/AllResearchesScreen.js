import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAllResearches } from '../actions/researchAction';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import Footer from "../components/Footer";

const AllResearchesScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchAllResearches());
    }, []);

    const researchState = useSelector(state => state.researchReducer);
    const isResearchesLoading = researchState.isLoading;
    const allResearches = researchState.researches;
    
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100 flex flex-col justify-between h-screen">
        <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">
            {/* <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:dark:bg-gray-900">
                <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                    <span className="text-xs dark:dark:text-gray-400">February 19, 2021</span>
                    <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                </div>
            </a> */}
            <div className="grid justify-center grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
                {
                    allResearches?.map((research) => (
                        <Link to={`/research/${research._id}`} className="w-md mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900">
                            {/* <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" /> */}
                            <div className="p-6 space-y-2">
                                <p className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    {research.title}
                                </p>
                                <span className="text-xs dark:dark:text-gray-400">
                                    {dateFormat(research.createdAt, 'mmmm d, yyyy')}
                                </span>
                                <p>
                                    {research.slug}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default AllResearchesScreen;