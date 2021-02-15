import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {ListItem} from 'react-native-elements';
import MyHeader from '../components/MyHeader'
import db from '../config.js'
import firebase from 'firebase'
export default class BookDonateScreen extends React.Component {
    
constructor(){
    super()
    this.state={
        requestedBooksList:[]
    }
    this.requestRef=null
}



getRequestedBooksList = () => {
this.requestRef=db.collection("bookRequest")
    .onSnapshot((snapshot)=>{
            var requestedBooksList=snapshot.docs.map((document)=>{document.data()});
            this.setState({
                requestedBooksList: requestedBooksList
            })
    })
    console.log(this.state.requestedBooksList);
}



componentDidMount(){
    this.getRequestedBooksList()
}
componentWillUnmount(){
    this.requestRef();
  }

keyExtractor = (item, index) => index.toString()

renderItem = ( {item, i} ) =>{
    console.log(item);
  return (
    <ListItem
      key={i}
      title={item.book_name}
      subtitle={item.reason_to_request}
      titleStyle={{ color: 'black', fontWeight: 'bold' }}
      rightElement={
          <TouchableOpacity style={styles.button}>
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
        }
      bottomDivider
    />
  )
}

    render(){
        return(
            <View style={{flex:1}}>
            <MyHeader title="Donate Books"/>
            <View style={{flex:1}}>
                { console.log(this.state.requestedBooksList.length)}
              {                 
                this.state.requestedBooksList.length === 0
                ?(
                  <View style={styles.subContainer}>
                    <Text style={{ fontSize: 20}}>No pending Request</Text>
                  </View>
                )
                :(
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.requestedBooksList}
                    renderItem={this.renderItem}
                  />
                )
              }
            </View>
          </View>
            
        );
    }
}

const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })

