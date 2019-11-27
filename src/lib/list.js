/* eslint-disable linebreak-style */

import { empty, el } from './helpers';
import Lecture from './lectures';

let jsonData;

export default class List {
  constructor() {
    this.container = document.querySelector('.list');

    this.htmlButton = document.querySelectorAll('.filter--active');
    this.cssButton = document.querySelector('.valm__css');
    this.jsButton = document.querySelector('.valm__js');
    this.data = jsonData;
    this.filtered = jsonData;
    this.getHtml.bind(this);
    this.getCSS.bind(this);
    this.getJS.bind(this);
  }

  getHtml() {
    const fHtml = this.data.filter((lecture) => lecture.category === 'html');
    this.htmlButton.classList.toggle('valm__html--filter');
    if (this.htmlButton.className === 'valm__html') {
      this.filtered += fHtml;
    } else this.filtered -= fHtml;
    this.displayLectureList(this.filtered);
  }

  getCSS() {
    const fCSS = this.data.filter((lecture) => lecture.category === 'css');
    this.cssButton.classList.toggle('valm__css--filter');
    if (this.cssButton.className === 'valm__css') {
      this.filtered += fCSS;
    } else this.filtered -= fCSS;
    this.displayLectureList(this.filtered);
  }

  getJS() {
    const fJS = this.data.filter((lecture) => lecture.category === 'javascript');
    this.jsButton.classList.toggle('valm__js--filter');
    if (this.jsButton.className === 'valm__js') {
      this.filtered += fJS;
    } else this.filtered -= fJS;
    this.displayLectureList(this.filtered);
  }

  clickLecture() {
    const lecture = new Lecture();
    lecture.fetchLecture();
  }

  displayLectureList(data) {
    empty(this.container);
    for (let i = 0; i < data.lectures.length; i += 1) {
      const element = el('div', this.displayLecListItem(data.lectures[i]));
      element.classList.add('list__page');
      this.container.appendChild(element);
      element.addEventListener('click', this.clickLecture);
    }
  }

  displayLecListItem(item) {
    const title = el('h2', item.title);
    title.classList.add('list__title');

    const category = el('span', item.category);
    category.classList.add('list__category');

    const divImage = document.createElement('div');
    divImage.classList.add('list__image');

    if (item.thumbnail) {
      const image = document.createElement('img');
      image.src = `./${item.thumbnail}`;
      divImage.appendChild(image);
    }
    const lectureItem = el('a', title, category, divImage);
    lectureItem.setAttribute('href', `fyrirlestur.html?slug=${item.slug}`);
    return lectureItem;
  }


  filterLectureList(data, filter) {
    let fLectures;
    /*for (let i = 0; i < data.length; i += 1) {
      if (data.lectures[i].category === filter) {
        fLectures += data.lectures[i];
      }
    } */
    this.displayLectureList(fLectures);
  }


  load() {
    empty(this.container);
    this.htmlButton.addEventListener('click', this.getHtml);
    this.cssButton.addEventListener('click', this.getCSS);
    this.jsButton.addEventListener('click', this.getJS);

    fetch('./lectures.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Villa við að sækja fyrirlestur');
        }
        return res.json();
      })
      .then((data) => {
        this.data = data;
        this.displayLectureList(data);
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
    "content":
*/
