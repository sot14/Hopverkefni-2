import List from './lib/list';
import Lecture from './lib/lectures';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
<<<<<<< HEAD
    const lecture = new Lecture();
    lecture.load();
    debugger;
=======
    
    } 
>>>>>>> c81b078085b77ac80dda0ca4d2af037ec6dde2ea

  else {
    const list = new List();
    list.load();
  }
});
