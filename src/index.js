/* eslint-disable linebreak-style */
import List from './lib/list';
import Lecture from './lib/lectures';

document.addEventListener('DOMContentLoaded', () => {

  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    const lecture = new Lecture();
<<<<<<< HEAD
    lecture.loadLecture();
  } else {
=======
    lecture.load();

  }else {
>>>>>>> 64c67da961a6ea0ffdcced73acb546980f03f1ad
    const list = new List();
    list.load();
  }
});
