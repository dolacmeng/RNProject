import React from 'react';
import { AppRegistry } from 'react-native';
import HotMovie from './src/page/HotMovie';
import MovieDetail from './src/page/MovieDetail'
import Navigator from './Navigator';

AppRegistry.registerComponent('Navigator', () => Navigator);
AppRegistry.registerComponent('HotMovie', () => HotMovie);
AppRegistry.registerComponent('MovieDetail', () => MovieDetail);

