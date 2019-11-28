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

