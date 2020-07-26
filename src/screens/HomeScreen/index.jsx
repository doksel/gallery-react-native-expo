import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout";
import Loader from "../../components/common/Loader";
import Gallery from "./Gallery";

import { fetchImages } from "../../services/redux/images";

const HomeScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.images);
  const error = useSelector(state => state.images.error);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  useEffect(() => {
    !!error && history.push("/error")
  }, [error]);

  return (
    <View style={styles.container}>
      <Layout>
        {images && images.length ? <Gallery listImages={images} /> : <Loader />}
      </Layout>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default HomeScreen;