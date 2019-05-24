import React, { Component } from 'react';
import {StyleSheet, Image, Text, Button,View, FlatList,TouchableOpacity,NativeModules} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

var REQUEST_URL = "https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0"
var HYModules = NativeModules.HYModule

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../image/movie.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class HotMovie extends Component<Props> {
  

  static navigationOptions = {
     headerTitle: <LogoTitle />,
     headerLeft: (
      <Button
        onPress={() => HYModules.navigateBack()}
        title="首页"
        color="#fff"
      />
    ),
  };

  _onItemClick(item) {
    this.props.navigation.navigate('Details',{itemId:item.id,cover:item.cover,title:item.title})
  }

  constructor(props){
    super(props);
    this.state = {
      movies:null,
    }

    this.renderMovie = this.renderMovie.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          movies:responseJson.subjects
        });
      })
  }

  render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }
    return (
      <FlatList
        data={this.state.movies}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item => item.id}
      />
    );
  }


  renderLoadingView(){
    return (
      <View style={styles.container}>
        <Text>
          正在加载...
        </Text>
      </View>
    )
  }


  renderMovie({item}){
    return(
      <TouchableOpacity style={styles.item} onPress={() => this._onItemClick(item)}>
        <Image source={{url:item.cover}} style={styles.thumbnail}/>
        <View style={styles.itemRight}>
          <Text>{item.title}</Text>
          <Text>{item.rate}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item:{
    marginTop:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'flex-start',
    height:100,
    backgroundColor:'lightgray',
    paddingLeft:10
  },
  thumbnail:{
    width:53,
    height:81,
    backgroundColor:'lightgray'
  },
  itemRight:{
    height:100,
    justifyContent: 'center',
    alignItems:'center',
    paddingLeft:10
  },
  list: {
    backgroundColor: "#F5FCFF"
  }
});

