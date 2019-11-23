import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Tasks/Style';


function CommentItem(props) {
  return(
    <View style={styles.list__item}>
      <Text><Text style={styles.item__bold}>Nr </Text>{props.id}</Text>
      <Text style={styles.item__bold}>Comment name </Text>
      <Text>{props.name}</Text>
      <Text style={styles.item__bold}>User email </Text>
      <Text style={styles.item__email}>{props.email}</Text>
      <Text>{props.body}</Text>
    </View>
  )
}

export default CommentItem;
