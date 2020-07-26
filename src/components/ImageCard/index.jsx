import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { WIDTH, HEIGHT } from "../../constants/size";
import theme from '../../styles/theme';

const ImageCard = ({ data, size, onPress, goBack }) => {
  const { container, sub, title, cover } = styles
  const { user, description, urls } = data;

  return (
    <View style={container}>
      <TouchableOpacity onPress={goBack ? goBack : onPress}>
        <View style={sub}>
          <Image style={size ? styles[`cover${size}`] : cover} source={{ uri: urls && urls[size] }} />
        </View>
      </TouchableOpacity>

      {description && <Text style={title}>{description}</Text>}
      {user.name && <Text style={title}>{user.name}</Text>}
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 2.4,
    paddingVertical: 10,
    position: "relative"
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    zIndex: 2
  },
  img: {
    width: WIDTH,
    height: HEIGHT,
  },
  title: {
    paddingTop: 5,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    color: theme.colors.primary,
  },
  cover: {
    width: WIDTH / 2.4,
    height: WIDTH * 0.63,
    borderRadius: 10
  },
  coverthumb: {
    width: WIDTH / 2.4,
    height: WIDTH * 0.63,
    borderRadius: 10
  },
  coverfull: {
    width: WIDTH,
    height: HEIGHT,
  }
})
export default ImageCard;