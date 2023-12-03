const {collection, query, getDocs} = require('firebase/firestore');
const {db} = require('../db/index');

module.exports =  {
    
    async getAllApartments(){
        const apartmentsCollectionRef = collection(db,'apartments');

        const apartmentsFound = [];

        const apartmentsDocs = await getDocs(query(apartmentsCollectionRef));

        apartmentsDocs.forEach((apartmentDoc)=>{
            const apartmentToPush = apartmentDoc.data();
            apartmentToPush['id'] = apartmentDoc.id;
            apartmentsFound.push(apartmentToPush);
        })

        return apartmentsFound;
    }
}