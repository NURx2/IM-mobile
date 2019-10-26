import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
import uploadPhoto from '../../utils/UploadPhoto/UploadPhoto'
import {styles} from "./ImagePicker.styles"
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

//Протестировать что будет, если выбрать гифку
export default class ImagePickerComponent extends React.Component {
    state = {
        image: null
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }

        uploadPhoto(result)
            .then(
                response => {
                    console.log(response);
                    this.props.navigation.navigate("Shower", {
                        music: response
                    });
                }
            );
    };

    render() {
        return (
            <View style={styles.GalleryView}>
                <TouchableOpacity onPress={this._pickImage}>
                    <Image
                        source={require("../../../static/gallery.png")}
                        style={styles.GalleryImage}
                    />
                </TouchableOpacity>
            </View>
        );
      }
}