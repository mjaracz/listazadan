import React, {Dispatch, PureComponent, ReactElement} from 'react';
import {
	Text,
	View,
	SectionList,
	ActivityIndicator
} from 'react-native';


import {connect} from 'react-redux';
import {comment} from '../../redux/types';
import {clearComments, getComments} from '../../redux/actions/fetchAction';

import styles from '../Tasks/Style';
import CommentItem from './CommentItem';

interface Props {
	reduxGetComments(): Dispatch<() => {type: string}>;
	reduxClearComments(): Dispatch<() => {type: string}>;
	loading: boolean;
	comments: comment[];
}

class Comments extends PureComponent<Props> {
	componentDidMount(): void {
		this.props.reduxGetComments();
	}
	componentWillUnmount(): void {
		this.props.reduxClearComments()
	}
	render(): ReactElement {
		return (
			<View style={styles.list}>
				{
					this.props.loading
						? <ActivityIndicator size={120} color='#0f91ff'/>
						: <SectionList
							sections={[{title: 'Comments List', data: this.props.comments}]}
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
}


const mapStateToProps = (state) => {
	return {
		comments: state.fetchReducer.comments,
		loading: state.fetchReducer.loading
	}
};

const mapDispatchToProps = (dispatch) => ({
	reduxGetComments: () => dispatch(getComments()),
	reduxClearComments: () => dispatch(clearComments())
});


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
