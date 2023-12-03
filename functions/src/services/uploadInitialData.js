const {setDoc, doc, Timestamp, collection} = require('firebase/firestore');
const {db, COLLECTIONS_NAMES} = require('../db/index');
const initialData = require('../data/initialDataLists.json');

async function uploadGenericData(list, listName){
        
    const genericDataSetDocs = list.map((listItem)=>{
        return (
            setDoc(doc(db, listName, listItem.id), listItem)
        )
    });

    await Promise.all(genericDataSetDocs);
}

async function uploadCashFlowData(){
    const cashFlowList = initialData.cashFlow;

    const cashFlowSetDocs = cashFlowList.map((cashFlow)=>{
        

        return (
            setDoc(doc(db, COLLECTIONS_NAMES.cashFlow, cashFlow.id), {
                kindOfFlow: doc(db, cashFlow.kindOfFlow), //It is interpreting the key as collection and the value as id.
                apartment:doc(db, cashFlow.apartment),
                desc:cashFlow.desc,
                date: Timestamp.fromDate(new Date('December 10, 2023')),
                value:30
            })
        )

    });

    await Promise.all(cashFlowSetDocs);
}

async function uploadFullInitialData(){
    try{
        await Promise.all([
            uploadGenericData(initialData.kindOfFlow, COLLECTIONS_NAMES.kindOfFlow),
            uploadGenericData(initialData.apartments, COLLECTIONS_NAMES.apartments),
            uploadCashFlowData()
        ]);
        console.log("Upload full initial data");
    }catch(err){
        console.log(err);
    }
}

uploadFullInitialData();