import React, { useEffect } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'

import { WIDTH, HEIGHT } from "../../../constants/size";

const Loader = () => {
  const SpinValue = new Animated.Value(0)
  const { container } = styles;

  const spining = () => {
    Animated.timing(
      SpinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }
    ).start(() => spining())
  };

  useEffect(() => {
    spining();
  }, []);

  const spinRotate = SpinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={container}>
      <Animated.Image
        style={{
          width: 227,
          height: 200,
          transform: [{ rotate: spinRotate }]
        }}
        source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "grey",
    opacity: 0.5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
export default Loader;