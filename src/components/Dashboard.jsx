import { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import CourseList from "./CourseList";
import PopularCourses from "./PopularCourses";
import Statistics from "./Statistics";

const Dashboard = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState('');


  const filteredCourses = () => {
    if (!courseData || !Array.isArray(courseData)) return [];

    let filtered = [...courseData];

    if (activeTab === "beginner") {
      filtered = filtered.filter((course) => course.level === "Beginner");
    } else if (activeTab === "gemiddeld") {
      filtered = filtered.filter((course) => course.level === "Gemiddeld");
    } else if (activeTab === "gevorderd") {
      filtered = filtered.filter((course) => course.level === "Gevorderd");
    } else if (activeTab === "populair") {
      filtered.sort((a, b) => b.views - a.views);
     } else if (activeTab === "favorite") {
      filtered = filtered.filter(course =>
        favorites.some(fav => fav.id === course.id)
      );
    } else if (activeTab === "watched") {
      filtered = filtered.filter(course =>
        watched.includes(course.id)
      );
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  };

  return (
    <section className="dashboard">
      <header className="dashboard-header">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Zoeken"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') { setSearchTerm(query) }
            }}
          />
          <button
            className="search-button"
            onClick={() => setSearchTerm(query)}
          >
            Zoeken
          </button>
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
          <button
            className={activeTab === "watched" ? "active" : ""}
            onClick={() => setActiveTab("watched")}
          >
            Bekeken
          </button>
          <button
            className={activeTab === "favorites" ? "active" : ""}
            onClick={() => setActiveTab("favorites")}
          >
            Favoriet
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
         : activeTab === "meestbekeken"
         ? "Meest Bekeken Cursussen"
         : activeTab === "rating"
         ? "Rating"
         : activeTab === "duur"
         ? "Duur"
         : activeTab === "watched"
         ? "Watched"
         : ""}
       </h2>

          <CourseList courses={filteredCourses()} />
        </section>

        <aside className="sidebar">
          <PopularCourses courses={courseData} />
          <Statistics courses={courseData} />
          <p>Heb je een vraag die niet in de FAQ staat? E-mail het naar codecampus@outlook.com</p>
        </aside>
      </div>
    </section>
  );
};

export default Dashboard;
