import React, {useEffect} from 'react';
import {
  Text,
  View,
  SectionList,
  ActivityIndicator
} from 'react-native';

import {urlTasks} from '../../redux/sagas/urlConst';
import {getTasks} from '../../redux/actions/fetchAction';
import {connect} from 'react-redux';
import styles from './Style';
import TaskItem from './TaskItem';

function Tasks(props) {
  useEffect(() => {
    props.reduxGetTasks(urlTasks);
  }, []);
  return (
    <View style={styles.list}>
      {
        props.loading
          ? <ActivityIndicator size={120} color='#0f91ff'/>
          : <SectionList
              sections={[{title: 'Tasks List', data: props.tasks}]}
              keyExtractor={(it, index) => `${index}`}
              renderItem={ ({item}) => <TaskItem id={item.id} title={item.title} completed={item.completed}/>}
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

const mapStateToProps = (state) => {
  return {
    tasks: state.fetchReducer.tasks,
    loading: state.fetchReducer.loading
  }
};

const mapDispatchToProps = (dispatch) => ({
  reduxGetTasks: (url) => dispatch(getTasks(url))
});


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
