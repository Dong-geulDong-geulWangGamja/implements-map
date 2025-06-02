import { child, get, ref } from "firebase/database"
import { db } from "../firebase"

const dbRef = ref(db);

export const getTotalData = async () => {
  const res = await get(child(dbRef, `/locations/`));
  return res;
}

export const getData = async (id) => {
  const res = await get(child(dbRef, `/locations/${id}`));
  return res;
}