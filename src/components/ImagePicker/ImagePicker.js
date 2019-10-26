import React from 'react'
import { ImagePicker } from 'expo-image-picker';
import {View, Button, TouchableOpacity, Image} from 'react-native'

//Протестировать что будет, если выбрать гифку
export default class ImagePickerComponent extends Component {
    state = {
        image: null
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Image,
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        let { image } = this.state;
    
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