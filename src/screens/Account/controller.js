/*import { Platform } from "react-native";
import storage from "redux-persist/lib/storage";
import RNFetchBlob from 'rn-fetch-blob'

export const updateprofileImage = image => {
 return new Promise(async resolve => {
   try {
    console.warn('image',image);
        const uri = image;
        const filename = image.substring(url.lastindexof('/') + 1 );
        console.warn('filename',filename);
        const pathforfirebasestorage = await getpathforfirebasestorage(image);
        console.warn('pathforfirebaseStorage',pathforfirebasestorage);
        await storage().ref(filename).putFile(pathforfirebasestorage);
        await storage()
        .ref(filename)
        .getDownloadURL()
        .then(url => {
            console.warn('url',url);
        resolve(url);
        });
        } catch(error){}
    });
};

const getpathforfirebasestorage=async() =>{
    if (Platform.OS === 'android') {
        return uri;
    }
    const stat = await RNFetchBlob.fs.stat(uri);
    return stat.path;
}; */



import storage from '@react-native-firebase/storage';
import {Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export const updateProfileImage = async image => {
  return new Promise(async resolve => {
    try {
      const filename = image.substring(image.lastIndexOf('/') + 1);
      const pathForFirebaseStorage = await getPathForFirebaseStorage(image);
      await storage().ref(filename).putFile(pathForFirebaseStorage);
      await storage()
        .ref(filename)
        .getDownloadURL()
        .then(url => {
          resolve(url);
        });
    } catch (error) {
      console.warn(error);
    }
  });
};

const getPathForFirebaseStorage = async uri => {
  if (Platform.OS === 'ios') {
    return uri;
  }
  const stat = await RNFetchBlob.fs.stat(uri);
  return stat.path;
};
