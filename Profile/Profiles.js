import  React,{useState,Component,useEffect} from "react"
import ExpandableView from '@pietile-native-kit/expandable-view';
import {View,Text,StyleSheet,Image,Input,Button,TextInput,
 TouchableOpacity,ScrollView,Alert,Pressable,Platform,ActivityIndicator} from "react-native";
 import { MaterialCommunityIcons } from '@expo/vector-icons';
 import axios from "axios";
 import AnimatedLoader from "react-native-animated-loader";
import DatePicker from '@react-native-community/datetimepicker';
import { SafeAreaView  } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../src/constants/theme';
import {useSelector} from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import {FormData,File} from "formdata-node";

 const Profiles  = props =>{
  const userDetails = useSelector(state=>state.counter);
  const userDetail = useSelector(state=>state.logged);
  var access = userDetails.headers.accesstoken;
  var id = userDetails.data.id;
  const fd = new FormData();
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(false);
  const [show4,setShow4] = useState(false);
  const [show5,setShow5] = useState(false);
  const [show6,setShow6] = useState(false);

   const useToggleShow1Visibility = () => {
   const [rightIcon1, setRightIcon] = useState('arrow-up');

     const handlearrow1Visibility = () => {
       if (rightIcon1 === 'arrow-up') {
         setRightIcon('arrow-down');
          setShow1(!show1);
       } else if (rightIcon1 === 'arrow-down') {
         setRightIcon('arrow-up');
          setShow1(!show1);
       }
     }

     return {
       rightIcon1,
       handlearrow1Visibility
     };
   };
   const { rightIcon1, handlearrow1Visibility } =
     useToggleShow1Visibility();

   const useToggleShow2Visibility = () => {
   const [rightIcon2, setRightIcon] = useState('arrow-up');

     const handlearrow2Visibility = () => {
       if (rightIcon2 === 'arrow-up') {
         setRightIcon('arrow-down');
         setShow2(!show2);
       } else if (rightIcon2 === 'arrow-down') {
         setRightIcon('arrow-up');
         setShow2(!show2);
       }
     }

     return {
       rightIcon2,
       handlearrow2Visibility
     };
   };
   const { rightIcon2, handlearrow2Visibility } =
     useToggleShow2Visibility();

   const useToggleShow3Visibility = () => {
   const [rightIcon3, setRightIcon] = useState('arrow-up');

     const handlearrow3Visibility = () => {
       if (rightIcon3 === 'arrow-up') {
         setRightIcon('arrow-down');
          setShow3(!show3);
       } else if (rightIcon3 === 'arrow-down') {
         setRightIcon('arrow-up');
          setShow3(!show3);
       }
     }

     return {
       rightIcon3,
       handlearrow3Visibility
     };
   };
   const { rightIcon3, handlearrow3Visibility } =
     useToggleShow3Visibility();


   const useToggleShow4Visibility = () => {
   const [rightIcon4, setRightIcon] = useState('arrow-up');

     const handlearrow4Visibility = () => {
       if (rightIcon4 === 'arrow-up') {
         setRightIcon('arrow-down');
         setShow4(!show4);
         setHides(!hides);
       } else if (rightIcon4 === 'arrow-down') {
         setRightIcon('arrow-up');
         setShow4(!show4);
         setHides(!hides);
       }
     }

     return {
       rightIcon4,
       handlearrow4Visibility
     };
   };
   const { rightIcon4, handlearrow4Visibility } =
     useToggleShow4Visibility();


   const useToggleShow5Visibility = () => {
   const [rightIcon5, setRightIcon] = useState('arrow-up');

     const handlearrow5Visibility = () => {
       if (rightIcon5 === 'arrow-up') {
         setRightIcon('arrow-down');
         setShow5(!show5);
       } else if (rightIcon5 === 'arrow-down') {
         setRightIcon('arrow-up');
          setShow5(!show5);
       }
     }

     return {
       rightIcon5,
       handlearrow5Visibility
     };
   };
   const { rightIcon5, handlearrow5Visibility } =
     useToggleShow5Visibility();

  const [loading, setLoading] = useState(false);
  const [username,setUsername]=useState(userDetail.firstName);
  const [useremail,setUseremail]=useState(userDetail.email);
  const [usermobilenumber,setUsermobilenumber]=useState(userDetail.mobileNumber);
  const [userwhatsappnumber,setUserwhatsappnumber]=useState('91'+userDetail.mobileNumber);
  const [middlename,setMiddlename]=useState(userDetail.middleName);
  const [lastName,setLastName]=useState(userDetail.lastName);
  const [panNumber,setPanNumber]=useState(userDetail.panNumber);
  const [dob,setDOB]=useState(userDetail.dob);
  const [fatherName,setFatherName]=useState(userDetail.fatherName);
  const [residenceAddress,setResidenceAddress]=useState(userDetail.address);
  const [permanentAddress,setPermanentAddress]=useState(userDetail.permanentAddress);
  const [pincode,setPincode]=useState(userDetail.pinCode);
  const [locality,setLocality]=useState(userDetail.locality);
  const [city,setCity]=useState(userDetail.city);
  const [state,setState]=useState(userDetail.state);
  const [facebook,setFacebook]=useState(userDetail.urlsDto.faceBookUrl);
  const [linkedin,setLinkedin]=useState(userDetail.urlsDto.linkdinUrl);
  const [twitter,setTwitter]=useState(userDetail.urlsDto.twitterUrl);
 const [isPickerShow, setIsPickerShow] = useState(false);
 const [date, setDate] = useState(new Date());
 const [mode,setMode] = useState('date');
 const [show,setShow] = useState(false);
 const [text,setText] = useState(userDetail.dob);
 const [modal,setmodal]=useState(true);
 const [shouldShow, setShouldShow] = useState(true);
 const [hide,setHide] = useState(true);
 const [accountNo,setAccountNo]=useState('026291800001191');
 const [confirmAccountNo,setconfirmAccountNo]=useState('026291800001191');
 const [iFSCCode,setiFSCCode]=useState('YESB0000262');
 const [name,setName]=useState("");
 const [bankName,setBankName]=useState("");
 const [branch,setBranch]=useState("");
 const [bankcity,setBankCity]=useState("");
 const [otp,setOTP]=useState("");
 const [hides,setHides]=useState(false);
 const [shouldShows,setShouldShows]=useState(true);
 const [relation,setrelation]=useState();
 const [nomineeEmail,setNomineeEmail]=useState();
 const [nomineeNumber,setNomineeNumber]=useState();
 const [nomineename,setnomineename]=useState();
 const [nomineeaccount,setnomineeaccount]=useState();
 const [nomineebankname,setnomineebankname]=useState();
 const [nomineebranchname,setnomineebranchname]=useState();
 const [nomineebankcity,setnomineebankcity]=useState();
 const [nomineeifscCode,setnomineeifscCode]=useState();
 const [panPic,setPanpic] = useState();
 const [chequePic,setChequePic] = useState();
 const [aadharpic,setAadharPic] = useState();
 ////////////////////  Bank Start ///////////////////////http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/809/loan/BORROWER/updateLoanRequest
  function Verify() {

   if(accountNo==""){
    alert("Please Enter Account Number");
    return false;
   }
   if(confirmAccountNo==""){
    alert("Please Enter confirm Account Number");
    return false;
   }
   if(iFSCCode==""){
    alert("Please Enter IFSC Number");
    return false;
   }
   setLoading(true);
   var data={bankAccount:"026291800001191",ifscCode:"YESb0000262"};
   if(accountNo==confirmAccountNo){
   axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/verifyBankAccountAndIfsc',
      data,{headers:{
             accessToken:access
            }
           })
     .then(function (response) {
      console.log(response.data.data);
      setName(response.data.data.nameAtBank)
      setBankName(response.data.data.bankName)
      setBranch(response.data.data.branch)
      setBankCity(response.data.data.city)
      setnomineename(response.data.data.nameAtBank)
      setnomineebankname(response.data.data.bankName)
      setnomineebranchname(response.data.data.branch)
      setnomineebankcity(response.data.data.city)
      setTimeout(function(){
                   setLoading(false);
                   setShouldShow(!shouldShow);
                   setHide(!setHide);
               }, 1000);
             })
     .catch(function (error) {
       console.log(error);
        console.log(error.response.data.errorMessage);
        Alert.alert(
  "Warring",
  error.response.data.errorMessage,
  [
    { text: "OK", onPress: () => setLoading(false) }
  ]
);
    });
   }
   else{
    alert("Please check confirm Account Number");
   }
 }

  function Banksave(){
   if(name==""){
    alert("Please Enter Account Holder Name");
    return false;
   }
   if(bankName==""){
    alert("Please Enter Bank Name");
    return false;
   }if(branch==""){
    alert("Please Enter Branch Name");
    return false;
   }if(bankcity==""){
    alert("Please Enter City");
    return false;
   }
   setLoading(true);
   axios.patch('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/personal/'+id,
      {userName:name,accountNumber:accountNo,ifscCode:iFSCCode,bankName:bankName,branchName:branch,bankAddress:bankcity,confirmAccountNumber:confirmAccountNo},
      { headers:{
             accessToken:access
            }
           })
     .then(function (response) {
      console.log(response.data);
      alert("Success")
      setShow4(!show4)
      setTimeout(function(){
                   setLoading(false);
               }, 1000);
             })
     .catch(function (error) {
       console.log(error);
        console.log(error.response.data.errorMessage);
        Alert.alert(
  "Warring",
  error.response.data.errorMessage,
  [
    { text: "OK", onPress: () => setLoading(false) }
  ]
);
    });
  }
  // 026291800001191
  // Confirm Account No*
  // 026291800001191
  // IFSC Code
  // YESB0000262
//////////////////    Bank end      ////////////////////////////
/////////////////     WhatsApp start /////////////////////////////
  function SendOTP() {
   var statuswhatsapp=userDetail.whatsappVerified;
   if(statuswhatsapp==false){
   if(userwhatsappnumber!=""){
    setShouldShows(!shouldShows);
    setHides(!setHides);
    setLoading(true);
    alert(id);
    axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/sendWhatsappOtp',
    {
     whatsappNumber:userwhatsappnumber,
     id:id
    },
      {headers:{
              accessToken:access
             }
                 })
      .then(function (response) {
       console.log(response.data);
       setTimeout(function(){
                    setLoading(false);
                }, 1000);
              })
      .catch(function (error) {
        console.log(error);
         console.log(error.response.data.errorMessage);
         Alert.alert(
   "Warring",
   error.response.data.errorMessage,
   [
     { text: "OK", onPress: () => setLoading(false) }
   ]
 );
     });
   }
   else{
    alert("Please Enter WhatsApp Number");
   }
 }else {
  alert("You Already Verified Your WhatsApp Number");
 }
}
  function SubmitOTP() {
   if(otp!=""){
  setHides(setHides);
  alert(hides);
  setShow4(show4);
  setLoading(true);
  axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/verifyWhatsappOtp',
  {
   whatsappOtp:otp,
   id:id
  },
     {headers:{
            accessToken:access
           }
               })
    .then(function (response) {
     console.log(response.data);
     setTimeout(function(){
              setLoading(false);
                setShow4(!show4)
              alert("Your WhatsApp Number is Verified");
              }, 1000);
            })
    .catch(function (error) {
      console.log(error);
       console.log(error.response.data.errorMessage);
       Alert.alert(
 "Warring",
 error.response.data.errorMessage,
 [
   { text: "OK", onPress: () => setLoading(false) }
 ]
);
   });
  }
 else{
  alert("Please Enter Vaild Otp");
 }
 }

 //////////////////////   WhatsApp end   /////////////////////////
 /////////////////////    Profile start  //////////////////////////
 function Profilesave(){
  if (username=="") {
   alert("Please Enter Name");
   return false;
  }
 if (useremail=="") {
  alert("Please Enter Email ");
  return false;
 }
if (usermobilenumber=="") {
  alert("Please Enter Mobile Number");
  return false;
 }
if (panNumber=="") {
 alert("Please Enter PAN Number");
 return false;
 var panRegex = /[A-Z]{5}\d{4}[A-Z]{1}/;
 if(!panRegex.test(panNumber)){
  alert("Please Enter valid PAN Number")
 }
}
if (fatherName=="") {
 alert("Please Enter Father Name");
 return false;
}
if (residenceAddress=="") {
 alert("Please Enter Residence Address");
 return false;
}
if (permanentAddress=="") {
 alert("Please Enter Permanent Address");
 return false;
}
if (pincode=="") {
 alert("Please Enter Pincode");
 return false;
 if(pincode.length>6){
  alert("Please Enter valid Pincode");
  return false;
 }
}
if (locality=="") {
 alert("Please Enter Locality");
 return false;
}
if (state=="") {
 alert("Please Enter State");
 return false;
}
if (city=="") {
 alert("Please Enter City");
 return false;
}
setLoading(true);
axios.patch('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/personal/'+id,
{
 firstName:username,
 lastName:lastName,
 middleName:middlename,
 fatherName:fatherName,
 dob:text,
 panNumber:panNumber,
 address:residenceAddress,
 permanentAddress:permanentAddress,
 pinCode:pincode,
 state:state,
 locality:locality,
 facebookUrl:facebook,
 linkedinUrl:linkedin,
 twitterUrl:twitter,
 whatsAppNumber:userwhatsappnumber,
 education: "Primary education",
 passion: "BASKETBALL",
},
   {headers:{
          accessToken:access
         }
             })
  .then(function (response) {
   console.log(response.data);

   setTimeout(function(){
              setLoading(false);
              alert("Successfully Update Profile Details");
              handlearrow1Visibility();
            }, 1000);
          })
  .catch(function (error) {
    console.log(error);
     console.log(error.response.data.errorMessage);
     Alert.alert(
"Warring",
error.response.data.errorMessage,
[
 { text: "OK", onPress: () => setLoading(false) }
]
);
 });
}
 function NomineeBanksave() {
  if(nomineename==""){
   alert("Please Enter Account Holder Name");
   return false;
  }
  if(nomineebankname==""){
   alert("Please Enter Bank Name");
   return false;
  }if(nomineebranchname==""){
   alert("Please Enter Branch Name");
   return false;
  }if(nomineebankcity==""){
   alert("Please Enter City");
   return false;
  }
  if(nomineeEmail==""){
   alert("Please Enter Email");
   return false;
  }
  if(nomineeifscCode==""){
   alert("Please Enter iFSC Code");
   return false;
  }
  if(relation==""){
   alert("Please Enter Relation");
   return false;
  }
  if(nomineeNumber==""){
   alert("Please Enter Mobile Number");
   return false;
  }
  if(nomineeaccount==""){
   alert("Please Enter Account Number");
   return false;
  }
  setLoading(true);
  axios.post('http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/nominee',
  {
   accountNumber: nomineeaccount,
   bankName: nomineebankname,
   branchName: nomineebranchname,
   city: nomineebankcity,
   email: nomineeEmail,
   ifscCode: nomineeifscCode,
   mobileNumber:nomineeNumber,
   name: nomineename,
   relation: relation,
   userId: id,
  },
     {headers:{
            accessToken:access
           }
               })
    .then(function (response) {
     console.log(response.data);
     alert("Nominee Details Successfully Upload");
     setTimeout(function(){
              setLoading(false);
               setShow5(!show5);
              }, 1000);
            })
    .catch(function (error) {
      console.log(error);
       console.log(error.response.data.errorMessage);
       Alert.alert(
 "Warring",
 error.response.data.errorMessage,
 [
   { text: "OK", onPress: () => setLoading(false) }
 ]
);
   });
 }
/////////////////////      Profile end       //////////////////////////
////////////////////    Get Details       ////////////////////////////
const panDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
   type: "*/*",
   copyToCacheDirectory: true,
   allowsEditing: false,
   aspect: [4, 3],
 })
 .then(response => {
   if (response.type == 'success') {
     let { name, size, uri } = response;

  // ------------------------/
     if (Platform.OS === "android" && uri[0] === "/") {
        uri = `file://${uri}`;
        console.log(uri);
        uri = uri.replace(/%/g, "%25");
        console.log(uri);
     }
 // ------------------------/

     let nameParts = name.split('.');
     let fileType = nameParts[nameParts.length - 1];
     var fileToUpload = {
       name: name,
       size: size,
       uri: uri,
       type: "application/" + fileType
     };
    // console.log(fileToUpload.name, '...............file')
     fd.append("PAN", fileToUpload);
  axios({
      method:'post',
      url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/upload/kyc',
      data:fd,
      headers:{
            accessToken:access,
            'Content-Type' :'multipart/form-data',
           }
     })
      .then(function (response) {
       //console.log(response);
       alert("Successfully Upload")
            })
      .catch(function (error) {
       console.log('error',error);
       console.log(error.response.data.errorMessage);
     });
     setPanpic(fileToUpload.name);
   }
 });
}

const chequeDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
   type: "*/*",
   copyToCacheDirectory: true,
   allowsEditing: false,
   aspect: [4, 3],
 })
 .then(response => {
   if (response.type == 'success') {
     let { name, size, uri } = response;

  // ------------------------/
     if (Platform.OS === "android" && uri[0] === "/") {
        uri = `file://${uri}`;
        console.log(uri);
        uri = uri.replace(/%/g, "%25");
        console.log(uri);
     }
 // ------------------------/

     let nameParts = name.split('.');
     let fileType = nameParts[nameParts.length - 1];
     var fileToUpload = {
       name: name,
       size: size,
       uri: uri,
       type: "application/" + fileType
     };
     //console.log(fileToUpload.name, '...............file')
     fd.append("CHEQUELEAF", fileToUpload);
  axios({
      method:'post',
      url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/upload/kyc',
      data:fd,
      headers:{
            accessToken:access,
            'Content-Type' :'multipart/form-data',
           }
     })
      .then(function (response) {
       //console.log(response);
       alert("Successfully Upload")
            })
      .catch(function (error) {
       console.log('error',error);
       console.log(error.response.data.errorMessage);
     });
     setChequePic(fileToUpload.name);
   }
 });
}

const aadharDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
   type: "*/*",
   copyToCacheDirectory: true,
   allowsEditing: false,
   aspect: [4, 3],
 })
 .then(response => {
   if (response.type == 'success') {
     let { name, size, uri } = response;

  // ------------------------/
     if (Platform.OS === "android" && uri[0] === "/") {
        uri = `file://${uri}`;
        console.log(uri);
        uri = uri.replace(/%/g, "%25");
        console.log(uri);
     }
 // ------------------------/

     let nameParts = name.split('.');
     let fileType = nameParts[nameParts.length - 1];
     var fileToUpload = {
       name: name,
       size: size,
       uri: uri,
       type: "application/" + fileType
     };
     //console.log(fileToUpload.name, '...............file')
     fd.append("AADHAR", fileToUpload);
  axios({
      method:'post',
      url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/upload/kyc',
      data:fd,
      headers:{
            accessToken:access,
            'Content-Type' :'multipart/form-data',
           }
     })
      .then(function (response) {
       //console.log(response);
       alert("Successfully Upload")
            })
      .catch(function (error) {
       console.log('error',error);
       console.log(error.response.data.errorMessage);
     });
     setAadharPic(fileToUpload.name);
   }
 });
}
////////---------------------------------get Profile---------------------------------

const getpan=()=>{
 axios({
     method:'get',
     url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/download/PAN',
     headers:{
           accessToken:access,
          }
    })
     .then(function (response) {
      //console.log(response.data);
      setPanpic(response.data.fileName);
           })
     .catch(function (error) {
      console.log('error',error);
      console.log(error.response.data.errorMessage);
    });

}
const getcheque=()=>{
 axios({
     method:'get',
     url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/download/CHEQUELEAF',
     headers:{
           accessToken:access,
          }
    })
     .then(function (response) {
      //console.log(response.data);
       setChequePic(response.data.fileName);
           })
     .catch(function (error) {
      console.log('error',error);
      console.log(error.response.data.errorMessage);
    });

}
const getaadhar=()=>{
 axios({
     method:'get',
     url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/download/AADHAR',
     headers:{
           accessToken:access,
          }
    })
     .then(function (response) {
      //console.log(response.data);
       setAadharPic(response.data.fileName);
           })
     .catch(function (error) {
      console.log('error',error);
      Alert.alert(
       'Oops',
       'Please Check Network and Try again',
       [
         { text: "OK", onPress: () => setLoading(false)}
       ]
      )
      console.log(error.response.data.errorMessage);
    });

}

///////////////////////Profile Pic/////////////////////////////


const useToggleShowVisibility = () => {
const [rightIcon, setRightIcon] = useState('arrow-up');

  const handlearrowVisibility = () => {
    if (rightIcon === 'arrow-up') {
      setRightIcon('arrow-down');
      setShow6(!show6)
    } else if (rightIcon === 'arrow-down') {
      setRightIcon('arrow-up');
      setShow6(!show6)
    }
  }

  return {
    rightIcon,
    handlearrowVisibility
  };
};
const { rightIcon, handlearrowVisibility } =
  useToggleShowVisibility();

 //---------------DatePicker Start------------------//

 const onChange=(event,selectDate) => {
  const currentDate = selectDate || date;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);

  let tempDate = new Date(currentDate);
  let fDate = tempDate.getDate() + '/'+(tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
  setText(fDate);

  console.log(fDate);
 }
 const showMode = (currentMode)=> {
  setShow(true);
  setMode(currentMode);
 };
 //----------------DatePicker End-----------------//
//-----------------------profile pic-------------------//

 const [imageshow,setimageshow] = useState();
 const [cameraPermissionInformation, requestPermission] = ImagePicker.useCameraPermissions();

async function verifyPermissions() {
 if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
  const  permissionResponse = await requestPermission();

  return permissionResponse.granted;
 }
 // if(cameraPermissionInformation.status === PermissionStatus.DENIED){
 //  Alert.alert(
 //   'Insufficient Permissions',
 //  );
 //  return true;
 // }
 return true;
}
 async function takeImageHandler() {
 const hasPermission = await verifyPermissions();

 if(!hasPermission){
  return ;
 }
  const result = await launchCameraAsync({
 type: "*/*",
 allowsEditing: true,
 copyToCacheDirectory: true,
 aspect: [4, 3],
});
setimageshow(result.uri)
var name=result.uri.split('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%25407702443766%252FAppmobile/ImagePicker/')
var imageset={
 name:name[1],
 uri: result.uri,
 size:(result.height)+(result.width),
 type: "application/jpg"
}
console.log(name[1]);
console.log(imageset);
  fd.append("PROFILEPIC", imageset);
axios({
   method:'post',
   url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/upload/uploadProfilePic',
   data:fd,
   headers:{
         accessToken:access,
         'Content-Type' :'multipart/form-data',
        }
  })
   .then(function (response) {
    //console.log(response);
    alert("Successfully Upload")
         })
   .catch(function (error) {
    console.log('error',error);
    alert("Not Upload ")
  });
 }

//------------------------------profile Pic Get Call---------------------------------------------
const getprofieshowss=()=>{
 setLoading(true)
 axios({
     method:'get',
     url:'http://ec2-13-235-82-38.ap-south-1.compute.amazonaws.com:8080/oxyloans/v1/user/'+id+'/download/PROFILEPIC',
     headers:{
           accessToken:access,
          }
    })
     .then(function (response) {
      //console.log(response.data.fileName);
       setimageshow(response.data.downloadUrl);
       setTimeout(function(){
               setLoading(false);
              },2000)
           })
     .catch(function (error) {
      console.log('error',error);
      console.log(error.response.data.errorMessage);
    });

}



   let imagePreview = <Text style={{marginTop:120,alignSelf:'center',justifyContent:'center',color:'white'}}>NO Image taken yet.</Text>

    if(imageshow) {
     imagePreview = <Image source={{uri:imageshow }} style={styles.image}/>
    }
    useEffect(()=>{
     getpan();
     getcheque();
     getaadhar();
     getprofieshowss();

    },[]);

  return(
     <View style={{marginBottom:2,alignSelf:'center'}}>
     <SafeAreaView>
     <ScrollView>
         <View>
         <View style={{alignItems:'center',marginTop:10}}>
   <TouchableOpacity onPress={takeImageHandler}>
        <View style={styles.imagePreview}>{imagePreview}</View>
     </TouchableOpacity>
   </View>
         </View>
     <View style={{paddingTop:10}}>
     <View style={styles.field}>
     <TouchableOpacity onPress={handlearrow1Visibility}>
     <View style={{flexDirection:'row'}}>
       <Text style={styles.text2}>
       <MaterialCommunityIcons name = "account" color = 'black' size = { 26 }/>
       Personal Details</Text><MaterialCommunityIcons style={{paddingLeft:66}} name = {rightIcon1} color = 'black' size = { 26 }/>
       </View>
     </TouchableOpacity>
     </View>
     <ExpandableView show={show1}>
     <View style={{marginTop:10}}>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>First Name</Text>
              <TextInput placeholder="First Name" value={username}
              onChangeText={(text)=>setUsername(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Middle Name</Text>
              <TextInput placeholder="Middle Name" value={middlename}
                 onChangeText={(text)=>setMiddlename(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Last Name</Text>
              <TextInput placeholder="Last Name" value={lastName}
              onChangeText={(text)=>setLastName(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>PAN Number</Text>
              <TextInput placeholder="PAN Number"
               value={panNumber}
              onChangeText={(text)=>setPanNumber(text)}/>
          </View>
          <View style={styles.inputbox}>
          <Text style={{fontSize:18}}>Date Of Birth</Text>
          {show&&(
         <DatePicker
         testID='DatePicker'
         value={date}
         mode={mode}
         display='default'
         is24Hour={true}
       onChange={onChange}
        />)}
            <TouchableOpacity onPress={()=>showMode('date')}>
              <Text style={{fontSize:18}}>{text}</Text>
            </TouchableOpacity>
                </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Father Name</Text>
              <TextInput placeholder="Father Name" value={fatherName}
              onChangeText={(text)=>setFatherName(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Mobile Number</Text>
              <TextInput placeholder="Mobile Number" keyboardType="numeric" value={usermobilenumber}
              onChangeText={(number)=>setUsermobilenumber(number)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Email ID</Text>
              <TextInput placeholder="Email ID" value={useremail}
              autoCapitalize="none"
             captionTextStyle={styles.captionTextStyle}
             onChangeText={(text)=>setUseremail(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Residence Address</Text>
              <TextInput placeholder="Residence Address" value={residenceAddress}
              onChangeText={(text)=>setResidenceAddress(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Permanent Address</Text>
              <TextInput placeholder="Permanent Address" value={permanentAddress}
              onChangeText={(text)=>setPermanentAddress(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Pin Code</Text>
              <TextInput placeholder="Pin Code" keyboardType="numeric" value={pincode}
              onChangeText={(number)=>setPincode(number)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Locality</Text>
              <TextInput placeholder="Locality" value={locality}
              onChangeText={(text)=>setLocality(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>City</Text>
              <TextInput placeholder="City" value={city}
              onChangeText={(text)=>setCity(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>State</Text>
              <TextInput placeholder="State" value={state}
              onChangeText={(text)=>setState(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Facebook URL</Text>
              <TextInput placeholder="Facebook URL" value={facebook}
              onChangeText={(text)=>setFacebook(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Linkedin URL</Text>
              <TextInput placeholder="Linkedin URL" value={linkedin}
              onChangeText={(text)=>setLinkedin(text)}/>
          </View>
          <View style={styles.inputbox}>
              <Text style={{fontSize:18}}>Twitter URL</Text>
              <TextInput placeholder="Twitter URL" value={twitter}
              onChangeText={(text)=>setTwitter(text)}/>
          </View>
          <TouchableOpacity  onPress={Profilesave} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Save <ActivityIndicator size="small" color="#0000ff" animating={loading} /></Text>
          </TouchableOpacity >
          </View>
          </ExpandableView>
          </View>



          <View style={{paddingTop:10}}>
         <View style={styles.field}>
         <TouchableOpacity onPress={handlearrow4Visibility}>
         <View style={{flexDirection:'row'}}>
           <Text style={styles.text2}>
           <MaterialCommunityIcons name = "whatsapp" color = 'black' size = { 26 }/>
           WhatsApp Number</Text><MaterialCommunityIcons style={{paddingLeft:40}} name = {rightIcon4} color = 'black' size = { 26 }/>
         </View>
         </TouchableOpacity>
         </View>
         <ExpandableView show={show4}>
          <View style={styles.inputbox}>
              <Text style={styles.text2}>Whatsapp Number</Text>
              <TextInput placeholder="Whatsapp Number" keyboardType="numeric" value={userwhatsappnumber}
              onChangeText={(number)=>setUserwhatsappnumber(number)}/>
          </View>
          {hides ?
             (
              <View>
              <TouchableOpacity  onPress={SendOTP} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Verify <ActivityIndicator size="small" color="#0000ff" animating={loading} /></Text>
              </TouchableOpacity >
              </View>
             ):null}
             {!shouldShows ?
              (
               <View>
                  <View style={styles.inputbox}>
                      <Text style={{fontSize:18}}>OTP</Text>
                      <TextInput placeholder="Enter OTP" keyboardType="numeric" value={otp}
                      onChangeText={(number)=>setOTP(number)}/>
                  </View>
                  <TouchableOpacity  onPress={SubmitOTP} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Submit <ActivityIndicator size="small" color="#0000ff" animating={loading} /></Text>
                  </TouchableOpacity >
                  </View>
                 ):null}
          </ExpandableView>
          </View>


           <View style={{paddingTop:10}}>
          <View style={styles.field}>
      <TouchableOpacity onPress={handlearrow2Visibility}>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.text2}>
            <MaterialCommunityIcons style={{marginLeft:50}} name = "bank" color = 'black' size = { 26 }/>
        Bank Details</Text><MaterialCommunityIcons style={{paddingLeft:100}} name = {rightIcon2} color = 'black' size = { 26 }/>
        </View>
      </TouchableOpacity>
      </View>
      <ExpandableView show={show2}>
      <View style={{marginTop:10}}>
      <View style={styles.inputbox}>
          <Text style={{fontSize:18}}>Account No:</Text>
          <TextInput placeholder="Enter Account Number" keyboardType="numeric"  value={accountNo}
          onChangeText={(number)=>setAccountNo(number)}/>
      </View>
      <View style={styles.inputbox}>
          <Text style={{fontSize:18}}>Confirm Account No:</Text>
          <TextInput placeholder="Enter Confirm Account Number" keyboardType="numeric" value={confirmAccountNo}
          onChangeText={(number)=>setconfirmAccountNo(number)}/>
      </View>
      <View style={styles.inputbox}>
          <Text style={{fontSize:18}}>IFSC code:</Text>
          <TextInput placeholder="Enter IFSC code"  value={iFSCCode}
          onChangeText={(text)=>setiFSCCode(text)}/>
      </View>
      {hide ?
         (
          <View>
          <TouchableOpacity  onPress={Verify} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Verify <ActivityIndicator size="small" color="#0000ff" animating={loading} /></Text>
          </TouchableOpacity >
          </View>
         ):null}
       {!shouldShow ?
        (
         <View>
            <View style={styles.inputbox}>
                <Text style={{fontSize:18}}>Name:</Text>
                <TextInput placeholder="Enter Name As Per Bank " value={name}
                onChangeText={(text)=>setName(text)}/>
            </View>
            <View style={styles.inputbox}>
                <Text style={{fontSize:18}}>Bank Name:</Text>
                <TextInput placeholder="Enter Bank Name" value={bankName}
                onChangeText={(text)=>setBankName(text)}/>
            </View>
            <View style={styles.inputbox}>
                <Text style={{fontSize:18}}>Branch:</Text>
                <TextInput placeholder="Enter Branch" value={branch}
                onChangeText={(text)=>setBranch(text)}/>
            </View>
            <View style={styles.inputbox}>
                <Text style={{fontSize:18}}>City:</Text>
                <TextInput placeholder="Enter City" value={bankcity}
                onChangeText={(text)=>setBankCity(text)}/>
            </View>
            <TouchableOpacity  onPress={Banksave} style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Save <ActivityIndicator size="small" color="#0000ff" animating={loading} /></Text>
            </TouchableOpacity >
            </View>
           ):null}
      </View>
      </ExpandableView>
      </View>



      <View style={{paddingTop:10}}>
     <View style={styles.field}>
 <TouchableOpacity onPress={handlearrow5Visibility}>
 <View style={{flexDirection:'row'}}>
   <Text style={styles.text2}>
       <MaterialCommunityIcons style={{marginLeft:20}} name = "account-multiple-plus-outline" color = 'black' size = { 26 }/>
   Nominee Details</Text><MaterialCommunityIcons style={{marginLeft:66}} name = {rightIcon5} color = 'black' size = { 26 }/>
   </View>
 </TouchableOpacity>
 </View>
 <ExpandableView show={show5}>
 <View style={{marginTop:10}}>
 <View style={styles.inputbox}>
     <Text style={{fontSize:18}}>Account No:</Text>
     <TextInput placeholder="Enter Account Number" keyboardType="numeric"  value={accountNo}
     onChangeText={(number)=>setAccountNo(number)}/>
 </View>
 <View style={styles.inputbox}>
     <Text style={{fontSize:18}}>Confirm Account No:</Text>
     <TextInput placeholder="Enter Confirm Account Number" keyboardType="numeric" value={confirmAccountNo}
     onChangeText={(number)=>setconfirmAccountNo(number)}/>
 </View>
 <View style={styles.inputbox}>
     <Text style={{fontSize:18}}>IFSC code:</Text>
     <TextInput placeholder="Enter IFSC code"  value={iFSCCode}
     onChangeText={(text)=>setiFSCCode(text)}/>
 </View>
 {hide ?
    (
     <View>
     <TouchableOpacity  onPress={Verify} style={styles.appButtonContainer}>
       <Text style={styles.appButtonText}>Verify <ActivityIndicator size="small" color="#0000ff" animating={loading} /></Text>
     </TouchableOpacity >
     </View>
    ):null}
  {!shouldShow ?
   (
    <View>
       <View style={styles.inputbox}>
           <Text style={{fontSize:18}}>Name:</Text>
           <TextInput placeholder="Enter Name As Per Bank " value={nomineename}
           onChangeText={(text)=>setnomineename(text)}/>
       </View>
       <View style={styles.inputbox}>
           <Text style={{fontSize:18}}>Relation</Text>
           <TextInput placeholder="Enter Relation with Him" value={relation}
           onChangeText={(text)=>setrelation(text)}/>
       </View>
       <View style={styles.inputbox}>
           <Text style={{fontSize:18}}>Mobile Number:</Text>
           <TextInput placeholder="Enter Mobile Number" value={nomineeNumber}
           onChangeText={(text)=>setNomineeNumber(text)}/>
       </View>
       <View style={styles.inputbox}>
           <Text style={{fontSize:18}}>Email</Text>
           <TextInput placeholder="Enter Email" value={nomineeEmail}
           onChangeText={(text)=>setNomineeEmail(text)}/>
       </View>
       <View style={styles.inputbox}>
           <Text style={{fontSize:18}}>Bank Name:</Text>
           <TextInput placeholder="Enter Bank Name" value={nomineebankname}
           onChangeText={(text)=>setnomineebankname(text)}/>
       </View>
       <View style={styles.inputbox}>
           <Text style={{fontSize:18}}>Branch:</Text>
           <TextInput placeholder="Enter Branch" value={nomineebranchname}
           onChangeText={(text)=>setnomineebranchname(text)}/>
       </View>
       <View style={styles.inputbox}>
           <Text style={{fontSize:18}}>City:</Text>
           <TextInput placeholder="Enter City" value={nomineebankcity}
           onChangeText={(text)=>setnomineebankcity(text)}/>
       </View>
       <TouchableOpacity  onPress={()=>{NomineeBanksave}} style={styles.appButtonContainer}>
         <Text style={styles.appButtonText}>Save <ActivityIndicator size="small" color="#0000ff" animating={loading} /></Text>
       </TouchableOpacity >
       </View>
      ):null}
 </View>
 </ExpandableView>
 </View>
     <View style={{marginTop:10}}>
     <View style={styles.field}>
 <TouchableOpacity onPress={handlearrowVisibility}>
 <View style={{flexDirection:'row'}}>
   <Text style={styles.text2}>
       <MaterialCommunityIcons style={{marginLeft:20}} name = "fingerprint" color = 'black' size = { 26 }/>
   KYC Upload</Text><MaterialCommunityIcons style={{marginLeft:109}} name = {rightIcon} color = 'black' size = { 26 }/>
   </View>
 </TouchableOpacity>
 </View>
 <ExpandableView show={show6}>
 <ScrollView>
 <View>
 <Text style={{fontSize:15,marginTop:5}}>Pan Card</Text>
 <View style={{flexDirection:'row'}}>
<TouchableOpacity style={styles.upload} onPress={panDocument}>
<Text>Upload</Text></TouchableOpacity>
<TextInput style={styles.input} value={panPic}/>
</View>
</View>
<View>
<Text style={{fontSize:15,marginTop:5}}>Cheque Leaf</Text>
<View style={{flexDirection:'row'}}>
<TouchableOpacity style={styles.upload} onPress={chequeDocument}>
<Text>Upload</Text></TouchableOpacity>
<TextInput style={styles.input} value={chequePic}/>
</View>
</View>
<View>
<Text style={{fontSize:15,marginTop:5}}>Aadhar Card</Text>
<View style={{flexDirection:'row'}}>
<TouchableOpacity style={styles.upload} onPress={aadharDocument}>
<Text>Upload</Text></TouchableOpacity>
<TextInput style={styles.input} value={aadharpic}/>
</View>
</View>
</ScrollView>
 </ExpandableView>
 </View>

      </ScrollView>
      </SafeAreaView>
      <AnimatedLoader
       visible={loading}
       overlayColor="rgba(255,255,255,0.75)"
       source={require("../assets/loading-state.json")}
       animationStyle={styles.lottie}
       speed={1}>
 <Text>Loading...</Text>
</AnimatedLoader>
     </View>
  )
 }
 const styles = StyleSheet.create({
 inputbox:{
      position:'relative',
      backgroundColor:'#E8E8E8',
      borderRadius: 16,
      width:330,
      height:'auto',
      alignItems: 'flex-start',
      paddingLeft:15,
      paddingVertical:5,
      margin:10,
      marginTop:5,
      marginLeft:15
  },
   inputContainer: {
       backgroundColor: '#E8E8E8',
       width: '100%',
       flexDirection: 'row',
       alignItems: 'center',
       borderColor: '#d7d7d7',
     },
     inputField: {
       padding: 5,
       fontSize: 16,
       width: '90%',
       height:35
     },
     appButtonContainer: {
         marginTop:8,
         backgroundColor: "#e91e63",
         borderRadius: 20,
         paddingVertical: 10,
         paddingHorizontal: 12,
         width:150,
         marginLeft:100,
         marginBottom:8
       },
       appButtonText: {
         fontSize: 15,
         color: "#fff",
         fontWeight: "bold",
         alignSelf: 'center',
       },
       container: {
        borderColor:'black',
        position:'relative',
        backgroundColor:'black',
        width:360,
        height:55,
        paddingVertical:5,
       borderBottomWidth:1.5,
       borderLeftWidth:1.5,
       borderRightWidth:1.5
      },
      text1:{
       color:'white',
       justifyContent:'center',
       alignItems:'center',
       fontSize:20,
       margin:10
      },
      field:{
       marginLeft:20,
       borderColor:'black',
       borderWidth:1,
       width:300,
       borderRadius:10,
       height:40,
       paddingTop:6,
       marginBottom:5
      },
      text2:{
       fontSize:20,
       marginLeft:15
      },
      datatext:{
          position:'absolute',
          backgroundColor:'white',
          paddingHorizontal:20,
          paddingTop:50,
          height:'auto',
          borderColor:'#f2b900',
          borderWidth:7,
      },
      input:{
            //borderWidth:2,
          borderBottomWidth:2,
          marginLeft:10,
          width:200
      },
      upload:{
          padding:5,
          width:80,
          justifyContent:"center",
          alignItems:"center",
          alignSelf:"center",
          borderRadius:26,
          backgroundColor:"#3A9BDC",
          marginTop:15,
          marginLeft:12
          },
          imagePreview:{
   borderRadius:100,
   width:200,
   height:200,
   backgroundColor:'black'
  },
  image:{
   width:200,
   height:200,
   borderRadius:100
  },
  lottie: {
    width: 100,
    height: 100
  },
    });

export default Profiles;
