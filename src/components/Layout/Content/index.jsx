import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import theme from '../../../styles/theme';

const Content = ({ children }) => (
  <ScrollView>
    <View style={styles.container}>
      {children}
    </View>
  </ScrollView>
)

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.mainBackground
  }
});
