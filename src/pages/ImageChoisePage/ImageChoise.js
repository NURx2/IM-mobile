import React from 'react'
import {View, TouchableOpacity, Image, Text} from 'react-native'
import uploadPhoto from '../../utils/UploadPhoto/UploadPhoto'

//Components
import Camera from '../../components/Camera/Camera'
import {styles} from "./ImageChoise.styles"
import ImagePicker from '../../components/ImagePicker/ImagePicker'


export default class ImageChoisePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "back"
        }
    }

//===============================
//============Camera=============
//===============================

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

    TakePhoto = async () => {
        console.log("taking photo");
        if(!this.camera)
            return;

        let photo = await this.camera.takePictureAsync();

        console.log(photo);

        uploadPhoto(photo);
    };

//=============================

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
                        <ImagePicker />
                    </View>
                </View>
            </View>
        );
    }
}