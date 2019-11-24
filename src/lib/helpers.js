// bætti við default, ekki viss samt
export default function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
