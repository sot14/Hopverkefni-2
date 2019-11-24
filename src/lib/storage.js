/**
 * Sækir og vistar í localStorage
 */

// Fast sem skilgreinir heiti á lykli sem vistað er undir í localStorage
const LOCALSTORAGE_KEY = 'lecture_data';

/**
 * Sækir gögn úr localStorage. Skilað sem lista á forminu:
 * [{ type, mediaUrl, text, title },
 *  { type, mediaUrl, text, title },
 *  ...,
 *  { type, mediaUrl, text, title }]
 *
 * @returns {array} fylki af myndum eða tóma fylkið ef ekkert vistað.
 */
export function load() {
  const lectureJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const lecture = JSON.parse(lectureJson) || [];

  return lecture;
}

/**
 * Vistaðar myndir með texta.
 *
 * @param {string} slug
 * @param {string} title titill á fyrirlestri
 * @param {string} category html, css eða javascript
 * @param {string} image á header?
 * @param {string} thumbnail á fyrirlestri
 * @param {array} content types
 *
 * "slug": "html-sagan",
      "title": "Sagan",
      "category": "html",
      "image": "img/code.jpg",
      "thumbnail": "img/thumb1.jpg",
      "content"
 */
export function save(slug, title, category, image, thumbnail, content) {
  const lecture = load();

  lecture.push({
    slug, title, category, image, thumbnail, content,
  });
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(lecture));
}


/**
 * Hreinsar allar myndir úr localStorage
 */
export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
