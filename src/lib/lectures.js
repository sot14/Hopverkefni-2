/* eslint-disable linebreak-style */
import { el } from './helpers';
import { loadLec, save } from './storage';

export default class Lecture {
  constructor() {
    this.container = document.querySelector('.lecture');
    this.url = './lectures.json';
  }

  fetchLecture() { // TODO ná í rétt slug
    fetch(this.url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Gat ekki sótt fyrirlestra');
        }
        return res.json();
      })
      .then((data) => {
        this.loadLecture(data);
      });
  }

  /**
   * Nær í gögn fyrir fyrirlesturinn með slug sem er í núverandi urli
   * og kallar í föll til að birta header, content og footer
   *
   * @param {*Object} data lectures.json skráin
   */
  loadLecture(data) {
    const params = (new URL(document.location)).searchParams;
    const slug = params.get('slug');
    const lData = data;
    let correctLecture;
    for (let i = 0; i < lData.lectures.length; i += 1) {
      if (lData.lectures[i].slug === slug) correctLecture = lData.lectures[i];
    }

    const lTitle = correctLecture.title;
    const lCategory = correctLecture.category;
    let lImage;
    if (correctLecture.image) {
      lImage = correctLecture.image;
    } else lImage = null;

    const lContent = correctLecture.content;

    this.displayHeader(lTitle, lImage, lCategory);
    this.displayLecture(lContent);
    this.displayFooter(slug);
  }


  /**
   * Býr til og birtir header núverandi fyrirlesturs
   * @param {*String} title titill núverandi fyrirlesturs
   * @param {*String} image slóð á núverandi mynd í header, ef hún er til
   * @param {*String} category html, css eða javascript
   */
  displayHeader(title, image, category) {
    const header = document.querySelector('.lecture-header');
    const content = document.querySelector('.header__content');
    if (image != null) { // athugar hvort image í header sé til
      header.style.backgroundImage = `url(${image})`;
    } else header.style.backgroundColor = 'grey';

    const h3 = el('h3', category);
    const h = el('h1', title);

    content.appendChild(h3);
    content.appendChild(h);
  }

  /**
   * Býr til takka í footer og vistar fyrirlestur í local storage ef hann er kláraður
   * @param {String} slug núverandi fyrirlesturs
   */

  displayFooter(slug) {
    const saved = loadLec();
    const klaraButton = document.createElement('button');
    klaraButton.classList.add('button__klarad');
    if (saved.indexOf(slug) >= 0) {
      klaraButton.textContent = '✔ Fyrirlestur kláraður';
      klaraButton.style.color = '#2d2';
    } else {
      klaraButton.textContent = 'Klára fyrirlestur';
      klaraButton.style.color = '#000';
    }
    klaraButton.addEventListener('click', this.isFinished.bind(this, slug));
    const backButton = el('a', 'Til baka');
    backButton.setAttribute('href', '/'); // muna að laga, fá rétta slóð
    backButton.classList.add('button__back');
    const content = document.querySelector('.lecture-footer');
    content.appendChild(klaraButton);
    content.appendChild(backButton);
  }

  /**
   * Athugar þegar ýtt er á klaraButton hvort fyrirlestur sé kláraður eða ekki
   * og uppfærir vistaða fyrirlestra og texta á takka
   * @param {KeyEvent} e atburður
   * @param {String} slug núverandi fyrirlesturs
   */
  isFinished(slug, e) {
    const saved = loadLec();
    if (saved.indexOf(slug) >= 0) {
      e.target.textContent = 'Klára fyrirlestur';
      e.target.style.color = '#000';
    } else {
      e.target.textContent = '✔ Fyrirlestur kláraður';
      e.target.style.color = '#2d2';
    }
    save(slug);
    e.target.classList.toggle('button__klarad--active');
  }

  showYoutube(element, source) {
    const div = document.createElement('div');
    div.classList.add('lecture__video');
    const video = document.createElement('iframe');
    video.setAttribute('src', source);

    div.appendChild(video);
    element.appendChild(div);
  }

  showText(element, data) {
    const splitData = data.split('\n');
    for (let i = 0; i < splitData.length; i += 1) {
      const p = document.createElement('p');
      p.appendChild(document.createTextNode(splitData[i]));
      element.appendChild(p);
    }
  }

  showQuote(element, data, attribute) {
    const lecQuote = el('blockquote', el('p', data), el('p', attribute));
    element.appendChild(lecQuote);
  }

  showImage(element, data, caption) {
    const img = document.createElement('img');
    img.src = data;
    const cite = el('cite', caption);
    const div = el('div', img, cite);
    div.classList.add('lecture__image');
    element.appendChild(div);
  }

  showHeading(element, data) {
    const head = el('h1', data);
    element.appendChild(head);
  }

  showList(element, data) {
    const lecList = document.createElement('ul');
    for (let i = 0; i < data.length; i += 1) {
      lecList.appendChild(el('li', data[i])); // ATH hvort sé rétt
    }
    element.appendChild(lecList);
  }

  showCode(element, data) {
    const splitCode = data.split('\n');
    const div = document.createElement('div');
    div.classList.add('lecture__code');
    for (let i = 0; i < splitCode.length; i += 1) {
      const code = el('code', splitCode[i]);
      div.appendChild(code);
    }
    element.appendChild(div);
  }


  /**
   * Les í gegnum fyrirlestur og athugar hvers konar efni á að birta í fyrirlestri
   * Kallar í viðeigandi föll til að birta efnið í fyrirlestrinum rétt
   * @param {Array} lContent fylki sem geymir innihald núverandi fyrirlesturs
   */
  displayLecture(lContent) {
    for (let i = 0; i < lContent.length; i += 1) {
      if (lContent[i].type === 'youtube') {
        this.showYoutube(this.container, lContent[i].data);
      }
      if (lContent[i].type === 'text') {
        this.showText(this.container, lContent[i].data);
      }
      if (lContent[i].type === 'quote') {
        this.showQuote(this.container, lContent[i].data, lContent[i].attribute);
      }
      if (lContent[i].type === 'image') {
        this.showImage(this.container, lContent[i].data, lContent[i].caption);
      }
      if (lContent[i].type === 'heading') {
        this.showHeading(this.container, lContent[i].data);
      }
      if (lContent[i].type === 'list') {
        this.showList(this.container, lContent[i].data);
      }
      if (lContent[i].type === 'code') {
        this.showCode(this.container, lContent[i].data);
      }
    }
  }
}
