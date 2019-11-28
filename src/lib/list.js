/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import { el, empty } from './helpers';
import { save, load } from './storage';
import Lecture from './lectures';
import { save,load } from './storage';

export default class List { // muna tak ef ekki ID
  constructor() {
    this.container = document.querySelector('.list');

    this.htmlButton = document.querySelector('.valm__html');
    this.cssButton = document.querySelector('.valm__css');
    this.jsButton = document.querySelector('.valm__js');
    this.setupFilters();
  }

  setupFilters() {
    const filters = document.getElementsByClassName('valm');
    for (const filter of filters) {
      filter.addEventListener('click', (e) => {
        e.target.classList.toggle('val-active');
      });
    }
  }

  clickLecture() {
    const lecture = new Lecture();
    lecture.fetchLecture();
  }

  displayLectureList(data) {    
    empty(this.container);
    for (let i = 0; i < data.length; i += 1) {
      const element = el('div', this.displayLecListItem(data[i]));
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

    const description = el('div', title, category);
    description.classList.add('list__description');

    const divImage = document.createElement('div');
    divImage.classList.add('list__image');

    const content = el('div', description, divImage);
    content.classList.add('list__content');

    /*const saved = save(item);
    if (saved) {
      const check = el('div', '✓');
      check.classList.add('listItem__check');
      description.appendChild(check);
    }*/


    if (item.thumbnail) {
      const image = document.createElement('img');
      image.src = `./${item.thumbnail}`;
      divImage.appendChild(image);
    }
    const lectureItem = el('a', content);
    lectureItem.setAttribute('href', `fyrirlestur.html?slug=${item.slug}`);
    return lectureItem;
  }

  filter() {
    const categories = document.getElementsByClassName('val-active');
<<<<<<< HEAD
    const filtered = []; 
    const data= load();

    if (categories.length===0){
      return this.displayLectureList(data);
    }
    for (let category of categories) {
      filtered.push(...data.filter(lecture => lecture.category === category.dataset.category))
      //....spread operator 
      
    }
    this.displayLectureList(filtered);
  }

  fetchLectures() {
    fetch('./lectures.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Villa við að sækja fyrirlestur');
      }
      return res.json();
    })
    .then((data) => {
      save(data.lectures)
      this.displayLectureList(data.lectures)
    })
    .catch((error) => {
      console.error(error);
    });
=======
    const filtered = [];

    if (categories.length === 0) {
      return this.displayLectureList(this.data);
    }
    for (const category of categories) {
      filtered.push(...this.data.filter((lecture) => lecture.category === category.dataset.category));
      // ....spread operator
    }
    return this.displayLectureList(filtered);
>>>>>>> 77c772316fd9cdf8bfb41b2834e65d8cefae1f90
  }

  load() {
    empty(this.container);
    this.htmlButton.addEventListener('click', this.filter.bind(this));
    this.cssButton.addEventListener('click', this.filter.bind(this));
    this.jsButton.addEventListener('click', this.filter.bind(this));
    
    const lectures = load();
    if(lectures.length===0) {
      this.fetchLectures();
    } else {
      this.displayLectureList(lectures);
    }
  }
}
<<<<<<< HEAD


/*
const data = {
  "lectures": [
    {
      "slug": "html-sagan",
      "title": "Sagan",
      "category": "html",
      "image": "img/code.jpg",
      "thumbnail": "img/thumb1.jpg",
      "content": 'asds',
    },
  ]
}

*/


=======
>>>>>>> 77c772316fd9cdf8bfb41b2834e65d8cefae1f90
