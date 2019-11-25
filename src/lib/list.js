/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */ 
import { empty } from './helpers';

let jsonData;
const lectureItem = ['title', 'category', 'thumbnail'];
let container;

function getHtml() {
  console.log('Hey!');
  displayLectureList(container, lectureItem, jsonData.lectures);
}

function getCSS() {
  console.log('Hó!');
}

function getJS() {
  console.log('hello');
}
function displayLectureList() {
  const element = el;
 
}
export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.htmlButton = document.querySelector('.valm__html');
    this.cssButton = document.querySelector('.valm__css');
    this.jsButton = document.querySelector('.valm__js');

  }
  
  load() {
    // empty(this.container);
    this.htmlButton.addEventListener('click', getHtml);
    this.cssButton.addEventListener('click', getCSS);
    this.jsButton.addEventListener('click', getJS);

    debugger;
    fetch('./lectures.json')  
      .then((res) => {
        if (!res.ok) {
          throw new Error('Villa við að sækja fyrirlestur');
        }
        return res.json();
      })
      .then((data) => {
        jsonData = data;
        displayLectureList(lectureItem);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}


/*
 "lectures": [
  {
    "slug": "html-sagan",
    "title": "Sagan",
    "category": "html",
    "image": "img/code.jpg",
    "thumbnail": "img/thumb1.jpg",
    "content": [
*/
