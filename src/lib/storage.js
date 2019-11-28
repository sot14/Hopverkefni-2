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

<<<<<<< HEAD
export function save(slug) {
  console.log('saving')
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(slug));
}

/**
 * Hreinsar alla lectures úr localStorage
 */
export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
//styles
function list(type,...data){
  const item=el('div,...data');
  item.classList.add('list__page');
  
}

=======
/* export function save(slug) {
  const lecture = load();
  lecture.push(slug);

  localStorage.setItem(slug, JSON.stringify(lecture));
} */ 
>>>>>>> 77c772316fd9cdf8bfb41b2834e65d8cefae1f90
