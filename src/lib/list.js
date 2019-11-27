/* eslint-disable linebreak-style */
import { empty, el } from './helpers';
import  Lecture  from './lectures';

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
  clickLecture(e) {
    debugger;
    const lecture = new Lecture();
    lecture.fetchLecture();
  }

  displayLectureList(data) {
    empty(this.container);
    for (let i = 0; i < data.lectures.length; i += 1) {
      const element = el('div', this.displayLecListItem(data.lectures[i]));
      element.classList.add('list__page');
      element.setAttribute('id', `${data.lectures[i].slug}`);
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

    fetch('./lectures.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Villa við að sækja fyrirlestur');
        }
        return res.json();
      })
      .then((data) => {
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
