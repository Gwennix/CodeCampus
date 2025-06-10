import { useState } from "react";
import "../styles/Dashboard.css";
import CourseList from "./CourseList";
import PopularCourses from "./PopularCourses";
import Statistics from "./Statistics";
import SearchBar from "./SearchBar.jsx";

const Dashboard = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = () => {
    if (!courseData || !Array.isArray(courseData)) return [];

    if (activeTab === "all") {
      return courseData;
    } else if (activeTab === "beginner") {
      return courseData.filter((course) => course.level === "Beginner");
    } else if (activeTab === "gevorderd") {
      return courseData.filter((course) => course.level === "Gevorderd");
    } else if (activeTab === "populair") {
      return [...courseData].sort((a, b) => b.views - a.views);
    } else if (activeTab === "rating") {
      return [...courseData].sort((a, b) => b.rating - a.rating);
    } else if (activeTab === "duur") {
      return [...courseData].sort(
        (a, b) => parseInt(b.duration) - parseInt(a.duration)
      );
    }
    return courseData;
  };

  return (
    <section className="dashboard">
      <header className="dashboard-header">
        <div>
          <h3>Zoeken:</h3>
          <SearchBar courses={courseData} />
          <button>Zoek</button>
        </div>

        <nav className="tab-buttons">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
          >
            Alle Cursussen
          </button>
          <button
            className={activeTab === "beginner" ? "active" : ""}
            onClick={() => setActiveTab("beginner")}
          >
            Voor Beginners
          </button>
          <button
            className={activeTab === "gevorderd" ? "active" : ""}
            onClick={() => setActiveTab("gevorderd")}
          >
            Gevorderd
          </button>
          <button
            className={activeTab === "populair" ? "active" : ""}
            onClick={() => setActiveTab("populair")}
          >
            Meest Bekeken
          </button>
          <button
            className={activeTab === "rating" ? "active" : ""}
            onClick={() => setActiveTab("rating")}
          >
            Rating
          </button>
          <button
            className={activeTab === "duur" ? "active" : ""}
            onClick={() => setActiveTab("duur")}
          >
            Duur
          </button>
        </nav>
      </header>

      <div className="dashboard-content">
        <section className="main-content">
          <h2>
            {activeTab === "all"
              ? "Alle Cursussen"
              : activeTab === "beginner"
              ? "Cursussen voor Beginners"
              : activeTab === "gevorderd"
              ? "Gevorderde Cursussen"
              : "Meest Bekeken Cursussen"
              ? "Rating"
              : "Duur"}
          </h2>
          <CourseList courses={filteredCourses()} />
        </section>

        <aside className="sidebar">
          <PopularCourses courses={courseData} />
          <Statistics courses={courseData} />
        </aside>
      </div>
    </section>
  );
};

export default Dashboard;
