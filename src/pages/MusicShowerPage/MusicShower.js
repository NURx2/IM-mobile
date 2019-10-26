import React from 'react';

import {View, Text, ScrollView} from 'react-native'

import {styles} from './MusicShower.styles'
import Image from "react-native-web/src/exports/Image";


export default class MusicShower extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            music: this.props.navigation.getParam("music")
        }
    }

    render() {
        return (
            <View style={styles.Main}>
                <View style={styles.Header}>
                </View>
                <View style={styles.Content}>
                    <ScrollView>
                    {
                        this.state.music.map((row, index) => {
                            return (
                                <View style={styles.Block}>
                                    <View style={styles.ImageBlock}>

                                    </View>
                                    <View style={styles.TextBlock}>
                                        <View style={styles.SongBlock}>
                                            <Text style={styles.SongText}>
                                                {row.song_name}
                                            </Text>
                                        </View>
                                        <View style={styles.ArtistBlock}>
                                            <Text style={styles.ArtistText}>
                                                {row.artist}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            );}
                        )
                    }
                    </ScrollView>
                </View>
            </View>
        );
    }
}