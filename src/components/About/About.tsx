import headshot from '../../assets/images/headshot.jpg'
function About() {
  return (
    <div className="w-100 p-5 pb-5">
      <div className="my-4">
        <h3 className='text-uppercase'>About Me</h3>

        
        <div className='d-md-flex align-items-center'>
          <div className='text-center'>
            <img src={headshot} alt="headshot" className='w-50 rounded my-5'/>
          </div>
          <div>
            <p className='text-center'>
              “Creative and self-starting Full-Stack Developer." <br /><br />
              "I am a highly motivated full-stack web developer with a strong passion for building responsive websites and applications. <br />
              I am constantly looking for new challenges and opportunities to grow my skills and knowledge.”
            </p>
            <div className='text-center'>
              <a href="" className="">
              <span className="btn bg-secondary text-light">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* SKILLS */}
      <div className="my-4">

        <div className='mb-4'>
          <h3 className='text-uppercase'>Skills</h3>
        </div>

        <div className="p-3">
          <p className='text-uppercase'>Programming Languages</p>
          <div className="d-flex flex-wrap">
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-html5-plain"></i>
              <p className="mt-2 small">HTML</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-css3-plain"></i>
              <p className="mt-2 small">CSS</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-bootstrap-plain"></i>
              <p className="mt-2 small">Bootstrap</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-tailwindcss-plain"></i>
              <p className="mt-2 small">Tailwind</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-javascript-plain"></i>
              <p className="mt-2 small">JavaScript</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-typescript-plain"></i>
              <p className="mt-2 small">TypeScript</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-ruby-plain"></i>
              <p className="mt-2 small">Ruby</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-python-plain"></i>
              <p className="mt-2 small">Python</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <p className='text-uppercase'>Frameworks & Libraries</p>
          <div className="d-flex flex-wrap">
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-jquery-plain"></i>
              <p className="mt-2 small">jQuery</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-nodejs-plain"></i>
              <p className="mt-2 small">Node.js</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-express-original"></i>
              <p className="mt-2 small">Express.js</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-react-original"></i>
              <p className="mt-2 small">React.js</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-nextjs-original"></i>      
              <p className="mt-2 small">Next.js</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-vuejs-plain"></i>
              <p className="mt-2 small">Vue.js</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-rails-plain"></i>
              <p className="mt-2 small">Rails</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <p className='text-uppercase'>Systems & Databases</p>
          <div className="d-flex flex-wrap">
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-git-plain"></i>
              <p className="mt-2 small">Git</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-github-original"></i>
              <p className="mt-2 small">GitHub</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-docker-plain"></i>
              <p className="mt-2 small">Docker</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-postgresql-plain"></i>
              <p className="mt-2 small">PostgreSQL</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-redis-plain"></i>
              <p className="mt-2 small">Redis</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <p className='text-uppercase'>Testing Tools</p>
          <div className="d-flex flex-wrap">
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-jest-plain"></i>
              <p className="mt-2 small">Jest</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-mocha-plain"></i>
              <p className="mt-2 small">Mocha</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-storybook-plain"></i>
              <p className="mt-2 small">Storybook</p>
            </div>
            <div className="text-center px-2">
              <i className="mx-1 display-1 text-white bg-secondary rounded p-2 devicon-rspec-original"></i>
              <p className="mt-2 small">RSpec</p>
            </div>
          </div>
        </div>

      </div>
      <hr />
      {/* Education */}
      <div className="my-4">
        <h3 className='text-uppercase mb-4'>Education</h3>
        <div className='p-3'>
          <p><span className="">Diploma, Full-Stack Web Development</span> - Lighthouse Labs - 2023</p> 
          <p><span className="">Bachelor of Arts, Labour Relations</span> - York University - 2016</p> 
          <p><span className="">Diploma, Social Services Worker</span> - Seneca College - 2014</p> 
        </div>
      </div>

    </div>
  )
}

export default About