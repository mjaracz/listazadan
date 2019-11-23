import React, {useEffect} from 'react';
import {
	Text,
	View,
	SectionList,
	ActivityIndicator
} from 'react-native';

import {urlComments} from '../../redux/sagas/urlConst';
import {getComments} from '../../redux/actions/fetchAction';
import {connect} from 'react-redux';
import styles from '../Tasks/Style';
import CommentItem from './CommentItem';


function Comments(props) {
	useEffect(() => {
		props.reduxGetComments(urlComments);
	}, []);
	return (
		<View style={styles.list}>
			{
				props.loading
					? <ActivityIndicator size={120} color='#0f91ff'/>
					: <SectionList
						sections={[{title: 'Comments List', data: props.comments}]}
						keyExtractor={(item, index) => `${index}`}
						renderItem={ ({item}) => <CommentItem id={item.id} name={item.name} email={item.email} body={item.body}/>}
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
		comments: state.fetchReducer.comments,
		loading: state.fetchReducer.loading
	}
};

const mapDispatchToProps = (dispatch) => ({
	reduxGetComments: (url: string) => dispatch(getComments(url))
});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
