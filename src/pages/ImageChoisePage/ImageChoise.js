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
        if(this.state.type === "back")
            this.setState({
                type: "front"
            });
        else
            this.setState({
               type: "back"
            });
    };

    setCamera = ref => {
        console.log("set ref");
        this.camera = ref;
    };

    createFromData = (photo) => {
        let data = new FormData();

        data.append("photo",{
            name: "photo",
            uri: photo.uri.replace("file://", "")
        });

        return data;
    }

    handlerUploadPhoto(photo) {
        fetch(
            "http://172.31.19.224:3228/image",{
                method: "POST",
                body: this.createFromData(photo)
            }
        ).then(
            response => response.json()
        ).then(
            response => {
                console.log(response);
            }
        ).catch(
            error => console.log(error)
        )
    }

    TakePhoto = async () => {
        console.log("taking photo");
        if(!this.camera)
            return;

        let photo = await this.camera.takePictureAsync();

        console.log(photo);

        this.handlerUploadPhoto(photo);
    };

    render () {
        return (
            <View style={styles.Main}>
                <View style={styles.CameraBlock}>
                    <Camera type={this.state.type} setCamera={this.setCamera}/>
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
                            <TouchableOpacity
                                onPress={this.TakePhoto}
                                style={styles.TakeButton}>
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