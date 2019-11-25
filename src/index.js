import List from './lib/list';
import Lecture from './lib/lectures';

document.addEventListener('DOMContentLoaded', () => {

  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    const lecture = new Lecture();
    lecture.load();

  }else {
    const list = new List();
    list.load();
  }
});
