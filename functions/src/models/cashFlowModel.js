const { collection, query, getDocs, getDoc } = require("firebase/firestore");
const { db } = require("../db/index");

module.exports = {
  async getAllCashFlow() {
    const cashFlowCollectionRef = collection(db, "cashFlow");

    const cashFlowFound = [];

    const cashFlowDocs = await getDocs(query(cashFlowCollectionRef));

    for (let i = 0; i < cashFlowDocs.size; i++) {
      const cashFlowDoc = cashFlowDocs.docs[i];

      const apartmentDoc = await getDoc(cashFlowDoc.data().apartment);

      const cashFlowToPush = {
        id: cashFlowDoc.id,
        desc: cashFlowDoc.data().desc,
        date: cashFlowDoc.data().date,
        value: cashFlowDoc.data().value,
        apartment: apartmentDoc.data(),
        isRevenue: cashFlowDoc.data().isRevenue,
      };

      cashFlowFound.push(cashFlowToPush);
    }

    return cashFlowFound;
  },
};
