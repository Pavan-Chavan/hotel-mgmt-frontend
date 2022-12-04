import React from 'react'
import Header from "./../layout/NavBar";
import FootBar from '../layout/FootBar';
import JobListing from '../jobs/JobListing';
export default function Home() {
  return (
    <div>
      <JobListing/>
    </div>
  )
}
