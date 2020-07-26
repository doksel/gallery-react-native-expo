import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";

import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";
import ErrorScreen from "./screens/ErrorScreen";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/image/:id" component={ImageScreen} />
          <Route exact path="/error" component={ErrorScreen} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
