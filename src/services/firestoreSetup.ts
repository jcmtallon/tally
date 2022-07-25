import { getFirestore } from 'firebase/firestore/lite'
import { app } from './firebaseSetup'

const firestore = getFirestore(app)

export { firestore }
