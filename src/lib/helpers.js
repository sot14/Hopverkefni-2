export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function el(name, ...children) {
  const element = document.createElement(name);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}

showYoutube(element, source) {
  /* {
      "type": "youtube",
      "data": "https://www.youtube.com/embed/-dC37AYntUQ"
    }, */
  const div = document.createElement('div');
  const video = document.createElement('iframe');
  video.setAttribute('src', source);

  div.appendChild(video);
  element.appendChild(div);
}

showText(element, data) {
  const p = document.createElement('p');
  p.appendChild(document.createTextNode(data)); // þarf að gera fleiri p fyrir hvert new line?
  element.appendChild(p);
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
  // þarf mögulega að replacea & = &amp og < = &lt
  const lecCode = el('code', data);
  element.appendChild(lecCode);
}


