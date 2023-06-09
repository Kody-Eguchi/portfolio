
export default function Home() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-5">Koji Eguchi</h1>
        <p className="fs-5">Full Stack Developer</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://www.linkedin.com/in/kojieguchi" target="_blank"><i className="display-6 text-secondary fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/Kody-Eguchi" target="_blank"><i className="display-6 text-secondary fa-brands fa-square-github"></i></a>
          <a href="mailto:kody.eguchi+portfolio@gmail.com"><i className="display-6 text-secondary fa-solid fa-envelope" /></a>
        </div>
      </div>
    </div>
  )
}