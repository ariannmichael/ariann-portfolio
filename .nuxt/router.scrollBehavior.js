export default function (to, from, savedPosition) {
  if (to.hash === '#home') {
    return {
      x: 0,
      y: 0,
      behavior: 'smooth'
    };
  }

  if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth'
    };
  } else if (savedPosition) {
      return savedPosition;
  }
  return { x: 0, y: 0 };  // Go to the top of the page if no hash
}