import fire from './fire';
import firebase from 'firebase';
import { IProductRequestSuccsess } from '../interfaces/product/IProductInfo';

const firestore = firebase.firestore(fire);

// USER

export const loginUser = (email: string, password: string) => {
  fire.auth().signInWithEmailAndPassword(email!, password!);
};

export const registerUser = (
  cash: number,
  email: string,
  name: string,
  password: string,
  supplier: boolean
) => {
  return fire
    .auth()
    .createUserWithEmailAndPassword(email!, password!)
    .then(() => {
      const uid = fire.auth().currentUser?.uid;
      return firestore.collection('users').doc(uid).set({
        uid,
        key: uid,
        email: email,
        password: password,
        name: name,
        supplier: supplier,
        cash: cash,
      });
    });
};

export const getInfoCurrentUser = (uid: string) => {
  return firestore
    .collection('users')
    .doc(uid)
    .get()
    .then((doc) => {
      return (firebase.auth().currentUser as any)
        .getIdTokenResult()
        .then((token: Record<string, any>) => {
          return {
            ...doc.data(),
            role:
              token.claims.role || (doc.data()?.supplier ? 'Supplier' : 'User'),
          };
        });
    });
};

export const deleteUser = (uid: string) => {
  const dataProducts: firebase.firestore.DocumentData[] = [];
  firestore.collection('basket').doc(uid).delete();

  firestore
    .collection('products')
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        if (doc.data().userUid === uid) dataProducts.push(doc.data());
        firestore
          .collection('products')
          .doc(uid + '-' + doc.data().nameProduct)
          .delete();
      });
    });

  firestore
    .collection('basket')
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());

        dataProducts.forEach((data) => {
          if (doc.data()[data.key]) {
            const cityRef = firestore.collection('basket').doc(doc.id);
            console.log(doc.data()[data.key].userUid);
            console.log(data.key);
            return cityRef.update({
              [data.key]: firebase.firestore.FieldValue.delete(),
            });
          }
        });

        if (doc.data().userUid === uid)
          firestore
            .collection('products')
            .doc(uid + '-' + doc.data().nameProduct)
            .delete();
      });
    });

  return firebase
    .auth()
    .currentUser?.getIdToken()
    .then((token) => {
      return fetch('http://localhost:8081/firebase/delete-user', {
        method: 'POST',
        body: JSON.stringify({ uid: uid }),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'no-cors',
        },
      }).then((res) => res.json());
    });
};

export const allUsers = () => {
  const dataUsers: firebase.firestore.DocumentData[] = [];

  return firestore
    .collection('users')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (doc.data().uid !== 'yDozJ4zVbxemDJi1AZCi4Xv6rpT2')
          dataUsers.push(doc.data());
      });
      return dataUsers;
    });
};

// PRODUCT

export const addProduct = (dataAddProduct: IProductRequestSuccsess) => {
  const key =
    dataAddProduct.data.userUid + '-' + dataAddProduct.data.nameProduct;
  return firestore.collection('products').doc(`${key}`).set({
    key: key,
    userName: dataAddProduct.data.userName,
    userUid: dataAddProduct.data.userUid,
    nameOrganization: dataAddProduct.data.nameOrganization,
    nameProduct: dataAddProduct.data.nameProduct,
    price: dataAddProduct.data.price,
    count: dataAddProduct.data.count,
  });
};

export const getProducts = () => {
  const dataProducts: firebase.firestore.DocumentData[] = [];

  return firestore
    .collection('products')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dataProducts.push(doc.data());
      });
      return dataProducts;
    });
};

export const deleteProduct = (uid: string) => {
  console.log(uid);
  return firestore.collection('products').doc(uid).delete();
};

// BASKET

export const addBasketProduct = (product: IProductRequestSuccsess) => {
  firestore
    .collection('products')
    .doc(product.data.key)
    .get()
    .then((doc) => {
      firestore
        .collection('products')
        .doc(product.data.key)
        .set({
          ...doc.data(),
          count: --doc.data()!.count,
        });
    });

  return firestore
    .collection('basket')
    .doc(firebase.auth().currentUser?.uid)
    .get()
    .then((doc) => {
      const data = doc.data() || {};
      Object.keys(data).includes(product.data.key!)
        ? (product.data.count = ++data![product.data.key!].count)
        : (product.data.count = 1);

      return firestore
        .collection('basket')
        .doc(firebase.auth().currentUser?.uid)
        .set(
          {
            [product.data.key!]: product.data,
          },
          { merge: true }
        );
    });
};

export const getBasketProduct = (uid: string) => {
  const dataBasketProducts: firebase.firestore.DocumentData[] = [];

  return firestore
    .collection('basket')
    .doc(uid)
    .get()
    .then((doc) => {
      for (let val in doc.data()) dataBasketProducts.push(doc.data()![val]);
      return dataBasketProducts;
    });
};

export const deleteBasketProduct = (name: string) => {
  firestore
    .collection('products')
    .doc(name)
    .get()
    .then((doc) => {
      firestore
        .collection('products')
        .doc(name)
        .set({
          ...doc.data(),
          count: ++doc.data()!.count,
        });
    });

  return firestore
    .collection('basket')
    .doc(firebase.auth().currentUser?.uid)
    .get()
    .then((doc) => {
      firestore
        .collection('basket')
        .doc(firebase.auth().currentUser?.uid)
        .set(
          {
            [name]: {
              ...doc.data()![name],
              count: --doc.data()![name].count,
            },
          },
          { merge: true }
        );

      if (doc.data()![name].count === 1) {
        const cityRef = firestore
          .collection('basket')
          .doc(firebase.auth().currentUser?.uid);
        return cityRef.update({
          [name]: firebase.firestore.FieldValue.delete(),
        });
      }
    });
};
