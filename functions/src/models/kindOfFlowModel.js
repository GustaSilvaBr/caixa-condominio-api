const {collection, query, getDocs} = require('firebase/firestore');
const {db} = require('../db/index');

module.exports =  {
    
    async getAllKindOfFlow(){
        const kindOfFlowCollectionRef = collection(db,'kindOfFlow');

        const kindOfFlowFound = [];

        const kindOfFlowDocs = await getDocs(query(kindOfFlowCollectionRef));

        kindOfFlowDocs.forEach((kindOfFlowDoc)=>{
            const kindOfFlowToPush = kindOfFlowDoc.data();
            kindOfFlowToPush['id'] = kindOfFlowDoc.id;
            kindOfFlowFound.push(kindOfFlowToPush);
        })

        return kindOfFlowFound;
    }
}