'use strict';

import { Dimensions } from 'react-native';

const FAST = 1;
const LONG = 0.5;
const MOVING = 0.2;

class SimpleGesture {

  constructor(e, gs) {
    let relativeGestureDistance = {
      x: gs.dx / Dimensions.get('window').width,
      y: gs.dy / Dimensions.get('window').height
    };
    Object.assign(this, gs, { relativeGestureDistance });
  }

  isVertical() {
    // Is the vertical offset higher than the horizontal offset?
    return !!(Math.abs(this.dy) > Math.abs(this.dx));
  }

  isHorizontal() {
    // Is the horizontal offset higher than the vertical offset?
    return !!!(this.isVertical());
  }

  // Swipe Up Gestures

  isSimpleSwipeUp() {
    // IF:
    // (
    //   The user swiped up a significant percent of the screen height
    //   OR
    //   Swiped up in a quick motion
    // )
    // AND
    // Didn't change their mind and start swiping down at the end
    // THEN:
    // Sure, let's call that a swipe up.
    return !!(
      (this.isLongSwipeUp() || this.isFastSwipeUp())
      && !this.isMovingDown()
    );
  }

  isSwipeUp() {
    if(!this.isVertical()) return false;
    return !!(this.dy < 0);
  }

  isLongSwipeUp() {
    return !!(this.relativeGestureDistance.y < -LONG);
  }

  isFastSwipeUp() {
    return !!(this.vy < -FAST);
  }

  isMovingUp() {
    return !!(this.vy < -MOVING);
  }

  // Swipe Down Gestures

  isSimpleSwipeDown() {
    // IF:
    // (
    //   The user swiped down a significant percent of the screen height
    //   OR
    //   Swiped down in a quick motion
    // )
    // AND
    // Didn't change their mind and start swiping up at the end
    // THEN:
    // Sure, let's call that a swipe down.
    return !!(
      (this.isLongSwipeDown() || this.isFastSwipeDown())
      && !this.isMovingUp()
    );
  }


  isSwipeDown() {
    if(!this.isVertical()) return false;
    return !!(this.dy > 0);
  }

  isLongSwipeDown() {
    return !!(this.relativeGestureDistance.y > LONG);
  }

  isFastSwipeDown() {
    return !!(this.vy > FAST);
  }

  isMovingDown() {
    return !!(this.vy > MOVING);
  }

  // Swipe Left Gestures

  isSimpleSwipeLeft() {
    return !!(
      (this.isLongSwipeLeft() || this.isFastSwipeLeft())
      && !this.isMovingRight()
    );
  }

  isSwipeLeft() {
    if(!this.isHorizontal()) return false;
    return !!(this.dx < 0);
  }

  isLongSwipeLeft() {
    return !!(this.relativeGestureDistance.x < -LONG);
  }

  isFastSwipeLeft() {
    return !!(this.vx < -FAST);
  }

  isMovingLeft() {
    return !!(this.vx < -MOVING);
  }

  // Swipe Right Gestures

  isSimpleSwipeRight() {
    return !!(
      (this.isLongSwipeRight() || this.isFastSwipeRight())
      && !this.isMovingLeft()
    );
  }

  isSwipeRight() {
    if(!this.isHorizontal()) return false;
    return !!(this.dx > 0);
  }

  isLongSwipeRight() {
    return !!(this.relativeGestureDistance.x > LONG);
  }

  isFastSwipeRight() {
    return !!(this.vx > FAST);
  }

  isMovingRight() {
    return !!(this.vx > MOVING);
  }

}

export default SimpleGesture;
