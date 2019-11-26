/* eslint-disable linebreak-style */
import { empty, el } from './helpers';

let jsonData;

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.htmlButton = document.querySelector('.valm__html');
    this.cssButton = document.querySelector('.valm__css');
    this.jsButton = document.querySelector('.valm__js');
  }

  getHtml() {
    console.log('Hey!');
    this.filterLectureList(jsonData, 'html');
  }

  getCSS() {
    console.log('Hó!');
    this.filterLectureList(jsonData, 'css');
  }

  getJS() {
    console.log('hello');
    this.filterLectureList(jsonData, 'javascript');
  }

  displayLectureList(data) {
    empty(this.container);
    const div = el('div', 'halló');
    this.container.appendChild(div);
    for (let i = 0; i < data.length;) {
      const element = ('div', this.displayLecListItem(data.lectures[i]));
      this.container.appendChild(element);
    }

  }

  displayLecListItem(item) {
    const thumb = item.thumbnail;
  }


  filterLectureList(data, filter) {
    let lectures;
    for (let i = 0; i < data.length; i += 1) {
      if (data.lectures[i].category === filter) {
        lectures += data.lectures[i];
      }
    }
    this.displayLectureList(lectures);
  }


  load() {
    empty(this.container);
    this.htmlButton.addEventListener('click', this.getHtml);
    this.cssButton.addEventListener('click', this.getCSS);
    this.jsButton.addEventListener('click', this.getJS);

    debugger;
    fetch('./lectures.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Villa við að sækja fyrirlestur');
        }
        return res.json();
      })
      .then((data) => {
        jsonData = JSON.parse(data);
        this.displayLectureList(jsonData);
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
