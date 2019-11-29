/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

const LOCALSTORAGE_KEY = 'saved-lectures';
const LECTURES_KEY = 'lectures'

export function loadLec() {
  const lectureJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const lecture = JSON.parse(lectureJson) || [];

  return lecture;
}

export function loadLectures() {
  const lecturesJson = localStorage.getItem(LECTURES_KEY);
  const lectures = JSON.parse(lecturesJson) || [];

  return lectures;
}

export function saveLectures(lectures) {
  console.log('saving')
  localStorage.setItem(LECTURES_KEY, JSON.stringify(lectures));
}

export function save(slug) {
  debugger;
// includes slug, splice, push, 
  const lectures = loadLec();
  const store = lecture.indexOf(slug);
    
  if (store >= 0) {
    lecture.splice(store, 1);
  } else {
    lecture.push(slug);
  }

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(lecture));
} 

/* export default function getSavedLecture(data) {
  const savedLecture = localStorage.getItem(data.slug);
  if (!savedLecture) return null;
  return savedLecture;
} */
