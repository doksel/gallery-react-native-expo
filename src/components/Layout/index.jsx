import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "./Header";
import Content from "./Content";

import theme from '../../styles/theme';

const Layout = ({ children }) => (
  <View style={styles.container}>
    <Header title="Gallery" />

    <ScrollView>
      <Content>{children}</Content>
    </ScrollView>
  </View>
)

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.mainBackground
  },
});
