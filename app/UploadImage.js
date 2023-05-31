import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage = async () => {
    let _image = await launchCamera({
        mediaType: 'photo',
        cameraType: 'front',
    });
    console.log(JSON.stringify(_image));
    if (_image.assets) {
        console.log(_image.assets[0].uri)
        setImage(_image.assets[0].uri);
    }
  }
  return (
            <View>
                <Image source={{ uri: image }} style={{width: 200, height: 200}}/>
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                            <Text>{image ? 'Change' : 'Upload'} Image</Text>
                        </TouchableOpacity>
                    </View>
            </View>
  );
}
const imageUploaderStyles=StyleSheet.create({
    container:{

    },
    uploadBtnContainer:{
        backgroundColor:'lightgrey',
        width:200,
        height:'25%',
        marginTop: 20,
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})