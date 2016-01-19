# react-native-simple-gesture
Wrapper for React Native gestureState that provides information about the type of gesture using a simple plain english API

## Usage

1. Run `npm install react-native-viewpager --save`
2. Code like this:

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

## Gesture Tests

So far I've only written vertical swipe tests. Horizontal tests and gestures beyond swipes are next. 

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





