import React from 'react';
import {Header,Icon} from 'react-native-elements'

const MyHeader = (props)=>{
    return(
         <Header
        centerComponent={{text:props.title,style:{color:'black',fontSize:20,fontWeight:'bold'}}}
        backgroundColor="orange"
        />
    )    
}
export default MyHeader;