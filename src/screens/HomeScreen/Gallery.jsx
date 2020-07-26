import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useHistory } from "react-router-dom";

import ImageCard from '../../components/ImageCard';

const List = ({ listImages }) => {
  const history = useHistory();

  const handlePress = id => {
    history.push(`/image/${id}`)
  };

  return (
    <View style={styles.container}>
      {listImages.map(image =>
        <ImageCard
          data={image}
          size="thumb"
          key={image.id}
          onPress={() => handlePress(image.id)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    padding: 10,
    marginBottom: 150
  }
})
export default List;