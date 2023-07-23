import userLogout from "../auth/userLogout";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const { error, logout } = userLogout();

  const handleLogout = async () => {
    await logout();

    if (!error) {
      navigate("/");
    }
  };

  return (
    <section className="dashboard">
      <div className="welcome">
        <h1>Welcome to Dashboard</h1>
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <div className="courses">
        <iframe
          src="https://www.youtube.com/embed/0fYi8SGA20k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/XxXyfkrP298"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/I1cpb0tYV74"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/FHTbsZEJspU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/CcBHZ0t2Qwc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/KBpoBc98BwM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/jx5hdo50a2M"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/4mOkFXyxfsU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/1RHDhtbqo94"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
export default Dashboard;
