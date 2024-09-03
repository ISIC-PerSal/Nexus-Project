import { gsap } from "gsap";

const flipAnimation = (ref) => {
  const element = ref.current;
  if (element) {
    const top = element.querySelector('.top');
    const bottom = element.querySelector('.bottom');
    const topBack = element.querySelector('.top-back span');
    const bottomBack = element.querySelector('.bottom-back span');

    gsap.to(top, 0.3, {
      rotationX: '-180deg',
      transformPerspective: 300,
      ease: 'power2.inOut',
      onComplete: () => {
        top.innerText = topBack.innerText;
        gsap.set(top, { rotationX: 0 });
      },
    });

    gsap.to(bottom, 0.3, {
      rotationX: 0,
      transformPerspective: 300,
      ease: 'power2.inOut',
      delay: 0.3,
      onComplete: () => {
        bottom.innerText = bottomBack.innerText;
        gsap.set(bottom, { rotationX: '-180deg' });
      },
    });
  }
};

export default flipAnimation;
