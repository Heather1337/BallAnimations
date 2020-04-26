const { easing, tween, styler, spring, listen, pointer, value } = window.popmotion;

const divStyler = styler(document.querySelector('.box'));

tween({
  from: 0,
  to: { x: 300, rotate: 180 },
  duration: 1000,
  ease: easing.backOut,
  flip: Infinity,
  // elapsed: 500,
  // loop: 5,
  // yoyo: 5
}).start(divStyler.set);


const ball = document.querySelector('.box2');
const divStyler2 = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler2.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });