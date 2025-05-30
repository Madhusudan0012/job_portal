import React from 'react'
import { assets } from '../assets/assets'

function JobCard({job}) {
  return (
    <div>
        <div>
            <img src={assets.company_icon} alt="" />
        </div>
        <h4>{job.title}</h4>
        <div>
            <span>
                {job.location}
            </span>
            <span>
                {job.level} 
            </span>
        </div>
        <p dangerouslySetInnerHTML={{__html: job.description.slice(0,150) }}>
            <div>
                <button> Apply now </button>
                <button> Learn more </button>
            </div>

        </p>
      
    </div>
  )
}

export default JobCard
