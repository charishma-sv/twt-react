import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyD4CX2pkPH1jkaMIXxHzb69ZcpYcIkHrTU',
  authDomain: 'twt-react-app.firebaseapp.com',
  projectId: 'twt-react-app',
  storageBucket: 'twt-react-app.appspot.com',
  messagingSenderId: '475480262395',
  appId: '1:475480262395:web:bd01f706f35a5d235cd25e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Create User Data
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user document', error);
    }
  }
  return getUserDocument(user.uid);
};

// Get User Data
const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};

//Generating new Tweet Document
export const generateTweetDocument = (user, tweet) => {
  if (!tweet) return;
  try {
    const tweetData = {
      user,
      description: tweet,
      likes: 0,
      comments: 0,
    };
    return firestore.collection('tweets').add(tweetData);
  } catch (error) {
    console.error('Error creating tweet document', error);
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
