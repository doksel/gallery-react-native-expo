import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import ImageCard from "../../components/ImageCard";
import Loader from "../../components/common/Loader";

import { fetchImageById, clearImage } from "../../services/redux/images";

const ImageScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const image = useSelector(state => state.images.image);
  const error = useSelector(state => state.images.error);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchImageById(id));

    return () => dispatch(clearImage());
  }, []);

  useEffect(() => {
    !!error && history.push("/error")
  }, [error]);

  return (
    <View style={styles.container}>
      {image ? <ImageCard data={image} size="full" goBack={history.goBack} /> : <Loader />}
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ImageScreen;