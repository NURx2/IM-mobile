import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    Main: {
        flex: 1,
        flexDirection: "column",
    },
    Header: {
        flex: 1,
        backgroundColor: "black"
    },
    Content: {
        backgroundColor: "yellow",
        flex: 6,
    },
    Block: {
        flex: 1,
        flexDirection: "column",
        marginBottom: 20,
        marginTop: 20,
        height: 200,
        
    },
    ImageBlock: {
        flex: 2,
        backgroundColor: "green"
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