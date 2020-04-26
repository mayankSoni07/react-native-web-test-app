import { StyleSheet, StatusBar, Platform } from 'react-native';

export default StyleSheet.create({
    headerContainer: {
        position: Platform.OS === "web" ? "fixed" : "relative",
        left: 0,
        top: 0,
        zIndex: 10,
        flexDirection: "row",
        height: 60,
        width: '100%',
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuIconContainer:{
        position: "absolute",
        left: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuIcon: {
        height: 40,
        width: 40
    },
    logoIcon: {
        height: 60,
        width: 130
    },
    scrollViewContainer:{
        height: "100%"
    }
});
