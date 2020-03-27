import * as firebase from 'firebase';

import 'firebase/messaging';

firebase.initializeApp({
  apiKey: 'AIzaSyD-zZ2QrmJTgZzluCUxZCe5eICWYgT7tJc',
  authDomain: 'trafik-ynov.firebaseapp.com',
  databaseURL: 'https://trafik-ynov.firebaseio.com',
  projectId: 'trafik-ynov',
  storageBucket: 'trafik-ynov.appspot.com',
  messagingSenderId: '890543714379',
  appId: '1:890543714379:web:c17c853756deeda1b8ddce'
});

const messaging = firebase.messaging();
// Project Settings => Cloud Messaging => Web Push certificates
messaging.usePublicVapidKey(
  'BOnZan9Z2sP0VHh4pIPnL8Tyu93RkKZUfcs0TQwZ-3zuRrl_FBDIWTF3ObKJtm84cmWlkq5OXIzT9cU-yqBCozA'
);
export { messaging };
