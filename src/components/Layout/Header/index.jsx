import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { WIDTH } from "../../../constants/size";
import theme from '../../../styles/theme';

const Header = ({ title }) => {
  const { container, text } = styles;

  return (
    <View style={container}>
      <Text style={text}>{title}</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    height: 100,
    width: WIDTH,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fonts.sizeH1,
    fontWeight: "700"
  }
});
