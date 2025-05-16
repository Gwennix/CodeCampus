import '../styles/CourseCard.css';
import { useState } from 'react';

const CourseCard = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!course)
    return (
      <article className='course-card empty'>
        Geen cursus informatie beschikbaar
      </article>
    );


  return (
   <>
   
    <article className='course-card'>
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
          <a href={course.videoUrl} target='_blank'>
          <button
            className='course-button'
          >
            Bekijk Video
          </button>
          </a>
        </div>
      </div>
    </article>
    </>
  );
};

export default CourseCard;
