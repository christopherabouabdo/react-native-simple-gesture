# react-native-simple-gesture
Wrapper for React Native gestureState that provides information about the type of gesture using a simple plain english API

## Install

`npm install react-native-simple-gesture --save`

## Write Code

```
import React from 'react-native';
import SimpleGesture from 'react-native-simple-gesture';
let { PanResponder, View, Text } = React;

class SuperAwesomeComponent extends React.Component {

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Only respond to movements if the gesture is a swipe up
      onMoveShouldSetPanResponder: (e, gs) => {
        let sgs = new SimpleGesture(e,gs);
        return sgs.isSwipeUp();
      }
    });
  }

  render() {
    return(
      <View { ...this._panResponder.panHandlers }>
        <Text>I'm gonna respond to swipes that go up</Text>
      </View>
    )
  }

}
```

## What You Can Do

### Relative Gesture Distance

Get the gesture distance relative to device screen size

```
let sgs = new SimpleGesture(e, gs);
console.log('Swiped ', sgs.relativeGestureDistance.x*100, '% of the screen horizontally');
console.log('Swiped ', sgs.relativeGestureDistance.y*100, '% of the screen vertically');
```

So far I've only written swipe tests. Gestures beyond swipes are next.

### Vertical Gesture Tests

* isVertical()
* isSimpleSwipeUp()
* isSwipeUp()
* isLongSwipeUp()
* isFastSwipeUp()
* isMovingUp()
* isSimpleSwipeDown()
* isSwipeDown()
* isLongSwipeDown()
* isFastSwipeDown()
* isMovingDown()

### Horizontal Gesture Tests

* isHorizontal()
* isSimpleSwipeLeft()
* isSwipeLeft()
* isLongSwipeLeft()
* isFastSwipeLeft()
* isMovingLeft()
* isSimpleSwipeRight()
* isSwipeRight()
* isLongSwipeRight()
* isFastSwipeRight()
* isMovingRight()
