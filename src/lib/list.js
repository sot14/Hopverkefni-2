/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */ 
import { empty } from './helpers';

let jsonData;
const lectureItems = ['title', 'category', 'thumbnail'];
let container;
 
}
export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.htmlButton = document.querySelector('.valm__html');
    this.cssButton = document.querySelector('.valm__css');
    this.jsButton = document.querySelector('.valm__js');

  }
  getHtml() {
    console.log('Hey!');
    displayLectureList(jsonData, );
  }

  getCSS() {
    console.log('Hó!');
  }

  getJS() {
    console.log('hello');
  }

  displayLectureList(data, items, filter) {
    data = JSON.parse(data);
    for (let i = 0; i < data.length; i += 1) {

    }
    
  load() {
    empty(this.container);
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
        displayLectureList(lectureItems, jsonData);
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
