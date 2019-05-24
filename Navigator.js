import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HotMovie from './src/page/HotMovie';
import MovieDetail from './src/page/MovieDetail'

const AppNavigator = createStackNavigator(
  {
    Home: HotMovie,
    Details: MovieDetail
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  }
)

const AppContainer = createAppContainer(AppNavigator);
export default class Navigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}