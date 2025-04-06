/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// App.js
// import React from 'react';
// import HomeScreen from './src/screens/HomeScreen';

// export default function App() {
//   return <HomeScreen />;
// }

import { AppRegistry } from 'react-native';
import App from './App'; // <- make sure this matches where App.js is
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import { AppRegistry } from 'react-native';
// import App from './App'; // <- make sure this path is correct
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
