import { StyleSheet, Dimensions, StatusBar } from 'react-native';

/* Fetch Device width */
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height - StatusBar.currentHeight,
        // backgroundColor: 'green',
    },
    text:{
        fontSize: 40,
        fontWeight: "bold"
    },
    img: {
        height: 400,
        width: '100%'
    }
});
