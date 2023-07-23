import "./SampleVideos.css";

import { Link } from "react-router-dom";

const SampleVideos = () => {
  return (
    <>
      <section className="section">
        <h1>Let&apos;s start Learning, User with our Sample Videos</h1>
        <div className="container">
          <iframe
            src="https://www.youtube.com/embed/zJSY8tbf_ys"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/bMknfKXIFA8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/2-crBg6wpp0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/u6gSSpfsoOQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <div className="navigateToDashboard">
        <h1>To access our Premium Courses</h1>
        <h2>Go to Dashboard</h2>
        <Link to="/dashboard">
          <button className="button">Go to Dashboard</button>
        </Link>
      </div>
    </>
  );
};
export default SampleVideos;
