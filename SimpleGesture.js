'use strict';

import { Dimensions } from 'react-native';

class SimpleGesture {

  constructor(e, gs) {
    let relativeGestureDistance = gs.dy / Dimensions.get('window').height;
    Object.assign(this, gs, { relativeGestureDistance });
  }

  isVertical() {
    // Is the vertical offset higher than the horizontal offset?
    return !!(Math.abs(this.dy) > Math.abs(this.dx));
  }

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
    return !!(this.relativeGestureDistance < -0.5);
  }

  isFastSwipeUp() {
    return !!(this.vy < -1);
  }

  isMovingUp() {
    return !!(this.vy < -0.2);
  }

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
    return !!(this.relativeGestureDistance > 0.5);
  }

  isFastSwipeDown() {
    return !!(this.vy > 1);
  }

  isMovingDown() {
    return !!(this.vy > 0.2);
  }

}

export default SimpleGesture;
