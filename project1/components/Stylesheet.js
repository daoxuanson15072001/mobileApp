import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: Constants.statusBarHeight,
	},
	timeDisplay: {
		fontSize: 50
	},
	halfSize: {
		flex: 0.5,
	},
	row: {
		flexDirection: 'row'
	},
	spaced: {
		justifyContent: 'space-between'
	},
	column: {
		flexDirection: 'column'
	},
	flexOne: {
		flex: 1
	},
	flexTwo: {
		flex: 2
	},
	flexEnd: {
		alignSelf: 'flex-end'
	},
	appTitle: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 30,
		padding: 30,
	},

	timeSetterTitle: { fontSize: 20 }

});
