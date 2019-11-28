/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

const LOCALSTORAGE_KEY = 'saved-lectures';

export function load() {
  const lecturesJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const lectures = JSON.parse(lecturesJson) || [];

  return lectures;
}

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
