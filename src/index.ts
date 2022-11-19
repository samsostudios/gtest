import { gsap } from 'gsap';

import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);

  console.log('hello');

  // const tl = gsap.timeline({ paused: true });
});
