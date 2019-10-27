import React from 'react';
import { Linking } from 'react-native'

import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'


import {styles} from './MusicShower.styles';

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
                    <Text style={styles.HeaderText}>
                        Вот что мы нашли
                    </Text>
                </View>
                <View style={styles.Content}>
                    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
                    {
                        this.state.music ?
                        this.state.music.map((row, index) => {
                            return (
                                <TouchableOpacity
                                    style={styles.Block} 
                                    key={index}
                                    onPress={() => Linking.openURL(row.youtube_url)}
                                >
                                    <View style={styles.ImageBlock}>
                                        <Image
                                            source={{uri: row.music_img}}
                                            style={{width: "100%", height: "100%"}}
                                            />
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
                                </TouchableOpacity>
                            );} 
                        ) :
                        <View style={styles.Block} >
                            <Text style={styles.HeaderText}>
                                Потеряна связь с сервером
                            </Text>
                        </View>
                    }
                    </ScrollView>
                </View>
            </View>
        );
    }
}