import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/src/styles/colors';

const Post = (props: {
  postTitle: React.ReactNode;
  postAuthor: React.ReactNode;
}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.item}>
      <View style={{ flex: 2 }}>
        // author
        <Text style={styles.title} numberOfLines={2}>
          {props.postTitle}
        </Text>
        <Text style={styles.author} numberOfLines={1}>
          {props.postAuthor}
        </Text>
      </View>
      <Image
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        style={{ flex: 1, width: 82, height: 82 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    flexDirection: 'row',
  },
  title: {
    marginEnd: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  author: {
    marginTop: 8,
    marginEnd: 8,
    color: 'grey',
  },
});

export default Post;
