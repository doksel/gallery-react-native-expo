import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout";
import { WIDTH, HEIGHT } from "../../constants/size";
import theme from '../../styles/theme';
import { clearErrore } from "../../services/redux/images";

const ErrorScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector(state => state.images.error);
  const { container, wrap, text, link } = styles;

  const handlePress = () => {
    dispatch(clearErrore());
    history.push("/");
  }

  return (
    <View style={container}>
      <Layout>
        <View style={wrap}>
          <Text style={text}>{error.text}</Text>
          <Text style={link} onPress={handlePress}>Go to the main page</Text>
        </View >
      </Layout>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    width: WIDTH,
    height: HEIGHT - 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: theme.fonts.sizeH1,
    fontWeight: "700",
    textAlign: 'center'
  },
  link: {
    fontSize: theme.fonts.sizeH2,
    fontWeight: "700",
    color: theme.colors.primary,
    textDecorationLine: "underline",
    textAlign: 'center'
  }
});

export default ErrorScreen;