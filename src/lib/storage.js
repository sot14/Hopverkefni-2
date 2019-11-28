/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

const LOCALSTORAGE_KEY = 'saved-lectures';

export function load() {
  const lecturesJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const lectures = JSON.parse(lecturesJson) || [];

  return lectures;
}

<<<<<<< HEAD
 export function save(slug) {
//includes slug, splice, push, 
  const lectures = load();
  const store = lectures.indexOf(slug);
    
  if (store >= 0) {
    lectures.splice(store, 1);
  } else {
    lectures.push(slug);
  }

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(lectures));
} 

/*export default function getSavedLecture(data) {
  const savedLecture = localStorage.getItem(data.slug);
  if (!savedLecture) return null;
  return savedLecture;
}*/
=======
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
>>>>>>> d49dec803a2a8c6377470ec7f5dd979fb86d3f0f
