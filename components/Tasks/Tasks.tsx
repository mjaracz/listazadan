import React, {Dispatch, PureComponent, ReactElement} from 'react';
import {
  Text,
  View,
  SectionList,
  ActivityIndicator
} from 'react-native';

import {clearTasks, getTasks} from '../../redux/actions/fetchAction';
import {connect} from 'react-redux';
import {task} from '../../redux/types';

import styles from '../Tasks/Style';
import TaskItem from './TaskItem';

interface Props {
  reduxGetTasks(): Dispatch<() => {type: string}>;
  reduxClearTasks(): Dispatch<() => {type: string}>
  loading: boolean;
  tasks: task[];
}

class Comments extends PureComponent<Props> {
  componentDidMount(): void {
    this.props.reduxGetTasks();
  }
  
  componentWillUnmount(): void {
    this.props.reduxClearTasks()
  }
  render(): ReactElement {
    return (
      <View style={styles.list}>
        {
          this.props.loading
            ? <ActivityIndicator size={120} color='#0f91ff'/>
            : <SectionList
              sections={[{title: 'Tasks List', data: this.props.tasks}]}
              keyExtractor={(item, index) => `${index}`}
              renderItem={ ({ item }) => <TaskItem id={item.id} title={item.title} completed={item.completed}/>}
              renderSectionHeader={({section}) => (
                <View style={styles.list__section}>
                  <Text style={styles.section__text}>{section.title}</Text>
                </View>
              )}
            />
        }
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tasks: state.fetchReducer.tasks,
    loading: state.fetchReducer.loading
  }
};

const mapDispatchToProps = (dispatch) => ({
  reduxGetTasks: () => dispatch(getTasks()),
  reduxClearTasks: () => dispatch(clearTasks())
});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
