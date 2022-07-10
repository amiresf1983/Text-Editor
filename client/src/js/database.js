import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("JATE database  exists already");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database has been created success!");
    },
  });
export const getAllDb = async () => {
  console.log("GET all from database");
  const taskDb = await openDB("jate", 1);
  const tx = taskDb.transaction("jate", "readonly");
  const objStore = tx.objectStore("jate");
  const result = await objStore.getAll();
  console.log("result.value", result);
};
export const putDb = async (id, content) => {
  const jateTextDb = await openDB("jate", 1);
  const txt = jateTextDb.transaction("jate", "readwrite");
  const objStore = txt.objectStore("jate");
  const result = await objStore.put({ id: id, text: content });
  console.log(" the data has been saved to JATE database", result);
};

initdb();
