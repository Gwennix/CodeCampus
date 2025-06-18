import '../styles/CourseCard.css';
import { useState } from 'react';

const CourseCard = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [watched, setWatched] = useState(false);

  if (!course) {
    return (
      <article className='course-card empty'>
        Geen cursus informatie beschikbaar
      </article>
    );
  }

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  const toggleFavorite = () => setFavorite(prev => !prev);
  const toggleWatched = () => setWatched(prev => !prev);

  return (
    <>
      <article className='course-card' onClick={handleOpenModal}>
        <figure className='course-image'>
          <img src={course.imageUrl} alt={course.title} />
        </figure>
        <div className='course-content'>
          <h3>{course.title}</h3>
          <p className='course-description'>{course.description}</p>
          <dl className='course-details'>
            <div>
              <dt className='visually-hidden'>Niveau</dt>
              <dd className='level'>Niveau: {course.level}</dd>
            </div>
            <div>
              <dt className='visually-hidden'>Duur</dt>
              <dd className='duration'>Duur: {course.duration}</dd>
            </div>
          </dl>
          <footer className='course-stats'>
            <span className='members'>{course.members} leden</span>
            <span className='views'>{course.views} weergaven</span>
            <span className='rating'>⭐ {course.rating}</span>
          </footer>
          <div className='course-actions'>
            <a href={course.videoUrl} target='_blank' rel="noopener noreferrer">
              <button className='course-button'>
                Bekijk Video
              </button>
            </a>
          </div>
        </div>
      </article>

      {isOpen && (
        <div className='modal-overlay' onClick={handleCloseModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={handleCloseModal}>
              ×
            </button>

            <h2>{course.title}</h2>
            <img src={course.imageUrl} alt={course.title} />
            <p>{course.description}</p>
            <br />
            <p>Leerdoelen: Leer Javascript</p>
            <p>Niveau: {course.level}</p>
            <p>Duur: {course.duration}</p>
            <p></p>
            <button className='favorite-button' onClick={toggleFavorite}>
              {favorite ? "❤️" : "🤍"}
            </button>
            <button className='watched-button' onClick={toggleWatched}>
              {watched ? "👁️" : "👁"}
            </button>

            <a href={course.videoUrl} target='_blank' rel="noopener noreferrer">
              <button className='course-button'>Bekijk Video</button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;

