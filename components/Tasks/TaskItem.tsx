import React from 'react';
import {Text, View} from 'react-native';
import styles from './Style';

interface Props {
  id: number;
  title: string;
  completed: boolean;
}

function TaskItem(props: Props) {
  return(
    <View style={styles.list__item}>
      <Text><Text style={styles.item__bold}>Task </Text>{props.id}</Text>
      <Text>{props.title}</Text>
      <Text style={styles.item__bold}>{props.completed ? 'task completed!' : 'task still in progress'}</Text>
    </View>
  )
}

export default TaskItem;
