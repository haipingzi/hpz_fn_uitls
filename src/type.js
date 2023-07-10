export default function (el) {
  return Object.prototype.toString.call(el).slice(8, -1).toLowerCase();
}
