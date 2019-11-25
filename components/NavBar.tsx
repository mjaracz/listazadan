import React from 'react';
import Home from './Home/Home';
import Tasks from './Tasks/Tasks';
import Comments from './Comments/Comments';

import styles from './Styles';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {
	Feather,
	FontAwesome
} from '@expo/vector-icons';

const NavBar = createMaterialBottomTabNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => <Feather style={styles.navBar__icon} name='home' size={18} color={tintColor}/>
			}
		},
		Tasks: {
			screen: Tasks,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => <FontAwesome style={styles.navBar__icon} name='tasks' size={18} color={tintColor}/>
			}
		},
		Comments: {
			screen: Comments,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => <FontAwesome style={styles.navBar__icon} name='comments' size={18} color={tintColor}/>
			}
		}
	},
	{
		initialRouteName: 'Home',
		activeColor: '#f0edf6',
		inactiveColor: '#000000',
		barStyle: styles.navBar,
	}
);

export default NavBar;
