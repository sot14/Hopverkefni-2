/* eslint-disable linebreak-style */
/*
 * Sækir og vistar í localStorage
*/

// Fast sem skilgreinir heiti á lykli sem vistað er undir í localStorage
const LOCALSTORAGE_KEY = 'lecture_data';


export function load() {
  const lectureJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const lecture = JSON.parse(lectureJson) || [];

  return lecture;
}

export function save(slug) {
  const lecture = load();
  lecture.push(slug);

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(lecture));
}

/**
 * Hreinsar alla lectures úr localStorage
 */
export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
