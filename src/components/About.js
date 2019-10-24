import React from 'react'
import '../CSS/about.css'

const About = () => {
  return (
    <div className='about'>
      <h1>Welcome To Kyuubi</h1>
      <p>
        Kyuubi is a site dedicated to promoting independent comic book artists.
        Every month, once registered you can vote for up to 5 comics, so choose
        wisely! The comic that receives the most votes will then be funded the
        following month to then create their comic book!
      </p>
      <p>
        That's not the only way the artists can receive help from fellow comic
        book lovers, they can also sell their front cover concept art here. So
        even if they don't win, you can support them.
      </p>
      <p>Create an account today and go out there and vote!</p>
      <img
        className='logo_side'
        src='https://bannersforapp.s3.eu-west-2.amazonaws.com/kyuubi_logo_2.png'
        alt=''
      />
    </div>
  )
}

export default About
