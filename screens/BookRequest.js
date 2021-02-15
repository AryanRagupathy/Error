import React from 'react';
import { StyleSheet,
        Text, 
        View,
        TextInput,
        TouchableOpacity,
        KeyboardAvoidingView,
        Alert } from 'react-native';
import db from '../config.js'
import firebase from 'firebase'
import MyHeader from '../components/MyHeader'
export default class BookRequestScreen extends React.Component {
    constructor(){
        super()
        this.state=({
            userId:firebase.default.auth().currentUser.email,
            bookName:'',
            reasonForRequest:''
        })
    }

    createUniqueId = () => {
     return Math.random().toString(36).substring(7) ;  
    }

    addRequest=(name,reason)=>{
        var userId=this.state.userId;
        var randomRequestId=this.createUniqueId()
        db.collection("bookRequest").add({
            "user_id": userId,
            "book_name":name,
            "reason_to_request":reason,
            "request_id"  : randomRequestId,
        })

        this.setState({
            bookName :'',
            reasonForRequest : ''
        })
    
        return Alert.alert("Book Requested Successfully")
    }

    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Request A Book" />
                <KeyboardAvoidingView style={styles.keyBoardStyle}>

                    <TextInput
                    placeholder={"BookName"}
                    style={styles.formTextInput}
                    onChangeText={(text)=>{
                        this.setState({
                            bookName:text
                        })
                    }}
                    value={this.state.bookName}
                    />

                    <TextInput
                    multiline
                    numberOfLines = {8}
                    placeholder={'Reason'}
                    style={[styles.formTextInput, {height:300}]}
                    onChangeText={(text)=>{
                        this.setState({
                            reasonForRequest:text
                        })
                    }}
                    value={this.state.reasonForRequest}
                    />
                    <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        this.addRequest(this.state.bookName,this.state.reasonForRequest)
                    }}
                    >
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }  
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
