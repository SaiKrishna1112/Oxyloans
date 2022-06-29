import  React,{useState} from "react";
import {View,Text,StyleSheet,SafeAreaView,Image,TextInput,Button,TouchableNativeFeedback} from "react-native";
import Login1 from './Login1';

const Openpage = ({navigation})=>{
   return(
     <TouchableNativeFeedback>
           <View style={styles.container}>
             <View>
               <View style={styles.logo}>
                 <Image source={{uri:"https://www.profitsheets.com/wp-content/uploads/2019/11/oxy-loans-for-women-back-to-work-scheme.jpg"}} style={styles.img} ></Image>
               </View>
               <View style={styles.bottom}>
                   <Text>POWERED BY</Text>
                   <Text>SRS FINTECHLABS PVT.LTD</Text>
               </View>
            </View>
          </View>
     </TouchableNativeFeedback>
        );

}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        marginTop:180
    },
    img:{
    height:150,
    width:150
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 200,
        color: '#dcdcdc',
        fontSize:30,

    }
});
export default Openpage;
