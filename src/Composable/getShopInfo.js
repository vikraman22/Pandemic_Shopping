import { ref, watchEffect } from "vue";
import { projectFirestore } from "../Firebase/config";

const getShopInfo = () => {
  const error = ref(null);
  const stores = ref(null);

  let collectionRef = projectFirestore.collection("store")

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // must wait for the server to create the timestamp & send it back
        results.push({ ...doc.data(), id: doc.id });
      });

      // update values
      stores.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      error.value = "could not fetch the data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  console.log(stores.value);

  return { error, stores };
};

export default getShopInfo;
