import React from 'react'
import {View, Button, TouchableOpacity, Image, Text} from 'react-native'

//Components
import Camera from '../../components/Camera/Camera'
import {styles} from "./ImageChoise.styles"


export default class ImageChoisePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "back"
        }
    }

    FlipCamera = () => {
        console.log("flip");
        if(this.state.type === "back")
            this.setState({
                type: "front"
            });
        else
            this.setState({
               type: "back"
            });
    }

    render () {
        return (
            <View style={styles.Main}>
                <View style={styles.CameraBlock}>
                    <Camera type={this.state.type}/>
                </View>
                <View style={styles.BottomBlock}>
                    <View style={styles.BottomPanel}>
                        <View style={styles.FlipView}>
                            <TouchableOpacity
                                onPress={this.FlipCamera}
                            >
                                <Image
                                source={require("../../../static/flip.png")}
                                style={styles.FlipImage}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.TakeView}>
                            <TouchableOpacity style={styles.TakeButton}>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.GalleryView}>
                            <TouchableOpacity>
                                <Image
                                    source={require("../../../static/gallery.png")}
                                    style={styles.GalleryImage}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}