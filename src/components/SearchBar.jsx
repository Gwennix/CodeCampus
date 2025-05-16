import React, { useState } from 'react';

const SearchBar = ({ courses }) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value) {
      const filtered = courses.filter((course) =>
        course.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={handleChange}
      />
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

