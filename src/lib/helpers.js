export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
