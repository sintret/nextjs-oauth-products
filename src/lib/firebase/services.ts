import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";
import { error } from "console";

const db = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  //  const data = snapshot.docs.map((doc) => doc.data());
  //   const data = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  const data = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );
  const querySnapshot = await getDocs(q);
  // const data = querySnapshot.docs.map((doc) => {
  //   return {
  //     id: doc.id,
  //     ...doc.data(),
  //   };
  // });
  if (querySnapshot.empty) {
    const docRef = await addDoc(collection(db, "users"), {
      email: userData.email,
      fullname: userData.fullname,
      password: await bcrypt.hash(userData.password, 10),
      role: "member",
    });
    callback({ status: true, message: "User created successfully" });
  } else {
    callback({ status: false, message: "Email already exists" });
  }
}

export async function signIn(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signInWithGoogle(userData: any, callback: Function) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data: any = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  if (data.length > 0) {
    userData.role = data[0].role || "member";
    await updateDoc(doc(db, "users", data[0].id), userData)
      .then(() => {
        callback({
          status: true,
          message: "User updated successfully",
          data: userData,
        });
      })
      .catch((error) => {
        callback({
          status: false,
          message: error.message,
          data: userData,
        });
      });
  } else {
    userData.role = "member";
    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback({
          status: true,
          message: "User created successfully",
          data: userData,
        });
      })
      .catch((error) => {
        callback({
          status: false,
          message: error.message,
          data: userData,
        });
      });
  }
}
