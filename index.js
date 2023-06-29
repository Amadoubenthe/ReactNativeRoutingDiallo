/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigation from './src/screen/StackNavigation';
import TabNavigation from './src/screen/TabNavigator';

AppRegistry.registerComponent(appName, () => TabNavigation);
