const {initializeApp} = require('firebase/app');
const {getFirestore, connectFirestoreEmulator} = require('firebase/firestore');
const {firebaseConfig } = require('../config/firebaseKeys');

initializeApp(firebaseConfig);

const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);

const COLLECTIONS_NAMES = {
    "kindOfFlow":"kindOfFlow",
    "apartments":"apartments",
    "cashFlow":"cashFlow"
}


module.exports = {db, COLLECTIONS_NAMES};