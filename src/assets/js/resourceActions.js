// export function shareResource(selector) {
//   const shareBtns = document.querySelectorAll(selector);
//   if (shareBtns.length == 0) { return false; }

//   shareBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       // if (navigator.share) {
//       //   console.log('let us show a native sharesheet');
//       //   navigator.share({
//       //     title: 'WebShare API Demo',
//       //     url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
//       //   }).then(() => {
//       //     console.log('Thanks for sharing!');
//       //   })
//       //   .catch(console.error);
//       // } else {

//         // Fall back to sharesheet
//         const shareSheet = btn.closest('.resource').querySelector('.shareSheet');
//         shareSheet.classList.toggle('shareSheet--open');

//       // }
//     });
//   });
//   // console.log(shareBtns);
// };

export function shareResource(ev) {
  const el = ev.target; // Careful, might be the SVG, not the <button>
  const shareSheet = el.closest('.resource').querySelector('.shareSheet');
  shareSheet.classList.toggle('shareSheet--open');
}

export function flagResource() {
  console.log('GN;DN');
};
