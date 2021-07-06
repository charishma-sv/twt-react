import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZIS1MEtIGEV0l8xlOsxOJdOI_KSF7onw',
  authDomain: 'twt-app-816b0.firebaseapp.com',
  projectId: 'twt-app-816b0',
  storageBucket: 'gs://twt-app-816b0.appspot.com',
  messagingSenderId: '468504346739',
  appId: '1:468504346739:web:e4b594aafb3f2700356a06',
  measurementId: 'G-2JTC6CZKLK',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default firebase;

//create user
export const createUser = async (email, password, displayName, imageFile) => {
  try {
    const photoURL = await uploadAndDownloadUserImage(imageFile);
    const credential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const { user } = credential;
    //return user;

    // .then(async (userCredential) => {

    // console.log('user credential', userCredential);
    // const user = userCredential.user;
    await generateUserDocument(user, { displayName, photoURL });
    const newUser = await user.reload();
    console.log('newuser', newUser);
    console.log(auth.currentUser);

    // await user.reload();
    // auth.signOut();
    // await user.reauthenticateWithCredential({ email, password });
    //console.log('photourl', photoURL);
    // await user.updateProfile({ displayName, photoURL });
    // await user.updateProfile({ displayName });
    // console.log('inside create user display name', user.displayName);
    // const photoURL = await uploadAndDownloadUserImage(user.uid, imageFile);
    // await user.updateProfile({ photoURL });
    // console.log('inside create user and url is', user.photoURL);

    //   await generateUserDocument(user);

    return newUser;
    // });
  } catch (error) {
    console.log('error in create user ', error);
    throw error;
  }
};

//upload and download users profile image to and from storage
export const uploadAndDownloadUserImage = async (image) => {
  const storageRef = storage.ref();
  const fileRef = storageRef.child(image.name);
  await fileRef.put(image);
  return fileRef.getDownloadURL();
};

// Create User Data
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;

    try {
      await userRef.set({
        email,
        // displayName,
        // photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user document', error);
    }
  }

  return await getUserDocument(user);
};

// Get User Data
export const getUserDocument = async (user) => {
  if (!user) return;
  try {
    const { uid } = user;
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};

//login user
export const login = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch((error) => {
    throw error;
  });
};

//Generating new Tweet Document
export const generateTweetDocument = async (user, tweet, files) => {
  if (!tweet && !files) return;
  //create a tweet ref
  const tweetRef = firestore.collection('tweets').doc();
  let imagesArr = [];
  if (files.length !== 0) {
    imagesArr = await uploadAndDownloadFiles(files, tweetRef.id);
  }

  try {
    const tweetData = {
      user,
      description: tweet,
      likes: 0,
      comments: 0,
      images: imagesArr,
    };

    tweetRef.set(tweetData);
    return await getTweetDocument(tweetRef);
  } catch (error) {
    console.log('$$$$$error in generate tweet doc', error);
    console.error('Error creating tweet document', error);
  }
};
//get the tweet
export const getTweetDocument = async (tweetRef) => {
  if (!tweetRef) return;
  try {
    const { id } = tweetRef;
    const tweetDocument = await firestore.doc(`tweets/${id}`).get();
    return {
      id,
      ...tweetDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};
// Getting all the tweets
export const getTweetsCollection = async () => {
  const response = firestore.collection('tweets');
  const data = await response.get();
  const tweets = data.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return tweets;
};

//Delete a tweet document
export const deleteTweetDocument = async (tweetId) => {
  await firestore.collection('tweets').doc(tweetId).delete();
};

//uploading files to storage bucket
export const uploadAndDownloadFiles = async (files, tweetId) => {
  const storageRef = storage.ref(tweetId);
  // const fileRef = storageRef.child(files[0].name);
  // await fileRef.put(files[0]);
  // const url = await fileRef.getDownloadURL();
  // console.log('url', url);

  const filesURLArr = await Promise.all(
    files.map(async (file) => {
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      return await fileRef.getDownloadURL();
    })
  );
  return filesURLArr;

  // console.log('file[0]', files[0]);
  // storageRef.child(files[0].name).put(files[0]);
  // files.map(async (file) => {
  //   const fileRef = storageRef.child(`${file.name}`);
  //   await fileRef.put(file).then(() => {
  //     console.log('inside upload then');
  //   });
  // });
};

//downloading files from storage bucket
// export const getDownloadFilesURL = async (files, tweetId) => {
//   const storageRef = storage.ref(tweetId);
//   files.map(async (file) => {
//     const fileRef = storageRef.child(`${file.name}`);
//     await fileRef.getDownloadURL();
//   });

// let image;
// await storageRef
//   .child(files[0].name)
//   .getDownloadURL()
//   .then((url) => {
//     image = url;
//   });
// console.log('image url', image);
// return image;

// const storageRef = storage.ref();
// // const tweetRef = storageRef.child(tweetId);
// const result = files.map(
//   async (file) =>
//     await storageRef
//       .child(`${tweetId}/${file.name}`)
//       .getDownloadURL()
//       .then((url) => console.log('url', url))
//       .catch((error) => {
//         console.log('download file error', error);
//       })
// );
// };
