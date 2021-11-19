import React from 'react'
import './About.css'
const About = () => {
  return (
    <div>
      <section class="hero" id="about">
      <img
        src={process.env.PUBLIC_URL + 'me1.jpg'}
        alt="bleh"
        loading="lazy"
        class="hero-img"
      />
      <div class="bio animate__animated animate__shakeX">
        <h2 class="bio-title">About Me</h2>
        <p class="bio-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed
          dolorem fugit sapiente porro veniam pariatur dolore nostrum delectus
          inventore tempore minus nemo, iste ullam illo laboriosam maiores
          repudiandae quos!
        </p>
      </div>
</section>
    </div>
  )
}

export default About
