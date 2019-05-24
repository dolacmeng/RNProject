import React,{Component} from 'react';
import {StyleSheet,Image,Text,View} from 'react-native';

export default class MovieDetail extends Component<Props>{

	static navigationOptions = ({ navigation }) => {
		return {
			title:navigation.getParam('title','电影详情')
		}
	}

	constructor(props){
		super(props)
		const { navigation } = props
    	const itemId = navigation.getParam('itemId', 'NO-ID')
    	const cover = navigation.getParam('cover')

    	this.state = {
    	  detail:null,
    	  cover:cover,
    	  itemId:itemId
    	}

    	this.fetchData = this.fetchData.bind(this)
	}
	
	componentDidMount(){
		const requrest_url = "https://movie.douban.com/j/subject_abstract?subject_id="+this.state.itemId
    	this.fetchData(requrest_url)
  	}

	fetchData(requrest_url){
    fetch(requrest_url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          detail:responseJson.subject
        });
      })
 	}

	render(){
		
		if (!this.state.detail) {
			return this.renderLoadingView();
		}
		const data =  this.state.detail
		const state = this.state
		return(
			<View>
			   <Text style={{fontSize:32,fontWeight:"400",padding:10}}>{data.title}</Text>
			   <View style={styles.detailView}>
			   	  <Image style={styles.thumbnail} source={{url:state.cover}}></Image>
			   	  <View style={styles.rightDetai}>
				   	  <Text>导演: {data.directors.join('/')}</Text>
			   	  	  <Text>评分：{data.rate}</Text>
			   	  	  <Text>时长：{data.duration}</Text>
			   	  	  <Text>类型：{this.state.detail.types.join('/')}</Text>
			   	  	  <Text>主演：{this.getDetaiActor()}</Text>
			   	  </View>
			   </View>
			</View>
		)
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

  	getDetaiActor(){
  		return this.state.detail.actors.slice(0,5).join('/')+' 等'
  	}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',
    alignItems: 'center',
    height:300
  },

  detailView: {
    flexDirection:'row',
    justifyContent: 'flex-start',
    height:200,
    paddingLeft:20,
    paddingTop:10,
 	paddingRight:10,
  },

  thumbnail:{
    width:79.5,
    height:121.5,
  },

  rightDetai:{
  	flexDirection:'column',
    height:200,
    marginLeft:10
  }
  
});
