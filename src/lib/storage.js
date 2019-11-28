/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

/*
 * Sækir og vistar í localStorage
*/


export default function getSavedLecture(data) {
  const savedLecture = localStorage.getItem(data.slug);
  if (!savedLecture) return null;
  return savedLecture;
}

/* export function save(slug) {
  const lecture = load();
  lecture.push(slug);

  localStorage.setItem(slug, JSON.stringify(lecture));
} */ 
