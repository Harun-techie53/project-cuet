import React from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'

const ResearchCard = ({ research }) => {
  return (
    <div className="w-1/3 mx-8 group hover:no-underline focus:no-underline dark:dark:bg-gray-400 shadow-5">
      <Link rel="noopener noreferrer" to={`/research/${research._id}`}>
        {/* <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-200" src="https://source.unsplash.com/random/480x360?1" /> */}
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {research.title}
            </h3>
            <span className="text-xs dark:dark:text-gray-800">
              {dateFormat(research.createdAt, 'mmmm d, yyyy')}
            </span>
            <p>
              {research.slug}
            </p>
        </div>
      </Link>
    </div>

  )
}

export default ResearchCard