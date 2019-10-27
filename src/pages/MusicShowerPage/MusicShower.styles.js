import {StyleSheet, Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    Main: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#E5E5E5",
        alignItems: "center"
    },
    Header: {
        flex: 1,
        backgroundColor: "white",
        width: width,
        shadowColor: "black",
        shadowRadius: 5,
        shadowOpacity: 0.5,
        justifyContent: "center"
    },
    HeaderText:{
        fontSize: 22,
        color: "black",
        textAlign: "center"
    },
    Content: {
        flex: 6,
    },
    Block: {
        flex: 1,
        flexDirection: "column",
        marginBottom: 20,
        marginTop: 20,
        height: 200,
        width: width * 0.8,
        shadowColor: "black",
        shadowRadius: 5,
        shadowOpacity: 0.5,
        alignSelf: "center"
    },
    ImageBlock: {
        flex: 3,
        backgroundColor: "#808080"
    },
    ScrollView: {
        width: width,
    },
    TextBlock: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    },
    SongBlock: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    ArtistBlock: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    SongText: {
        textAlign: "center"
    },
    ArtistText: {
        textAlign: "center",
        color: "#8D8D8D"
    }
});