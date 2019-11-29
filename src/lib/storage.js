/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

const LOCALSTORAGE_KEY = 'saved-lectures';

export function loadLec() {
  const lectureJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const lecture = JSON.parse(lectureJson) || [];

  return lecture;
}
export function save(slug) {
  const lectures = loadLec();
  const store = lectures.indexOf(slug);
    
  if (store >= 0) {
    lectures.splice(store, 1);
  } else {
    lectures.push(slug);
  }

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(lectures));
} 
