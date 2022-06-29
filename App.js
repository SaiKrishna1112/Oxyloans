import React from 'react';
import type {Node} from 'react';
import RNPgReactNativeSDK from 'react-native-pg-react-native-sdk';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Openpage from './Screens/Openpage';
import Stacks from './Stack';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function onPayPressHandler(){

  var inputparams={
          "orderId": "Order0001",
          "orderAmount": "111",
          "appId": "1385818e255507feae28462f3b185831",
          "tokenData": "4n9JCN4MzUIJiOicGbhJCLiQ1VKJiOiAXe0Jye.KD0nIklzYwQzNmFjZ2ImM2IiOiQHbhN3XiwyM2YDO0cDO1YTM6ICc4VmIsIiUOlkI6ISej5WZyJXdDJXZkJ3biwSMxEjOiQnb19WbBJXZkJ3biwiIxADMwIXZkJ3TiojIklkclRmcvJye.PQKpw_wx8bSMZraNBwa3ZsuehzOR6gouIoAA-hvyfx2eoepUO-grBdK-A4ZP_IU7u4",
          "orderCurrency": "INR",
          "orderNote": "asdasdasd",
          "notifyUrl": "https://test.gocashfree.com/notify",
          "customerName": "Cashfree User",
          "customerPhone": "9999999999",
          "customerEmail": "cashfree@cashfree.com"
         }
   RNPgReactNativeSDK.startPaymentWEB(inputparams,"TEST",(result) =>
  {
    console.log(result);
            		var obj = JSON.parse(result, function (key, value)
            {
              console.log(key + "::" + value);
            		// Do something with the result
            })
  });
  }

return (
  // <SafeAreaView style={backgroundStyle}>
  //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //   <ScrollView
  //     contentInsetAdjustmentBehavior="automatic"
  //     style={backgroundStyle}>
  //     <Header />
  //     <Stacks />
  //     <View
  //       style={{
  //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //       }}>
  //       <Section title="Step One">
  //         Edit <Text style={styles.highlight}>App.js</Text> to change this
  //         screen and then come back to see your edits.
  //       </Section>
  //       <Section title="See Your Changes">
  //         <ReloadInstructions />
  //       </Section>
  //       <Section title="Debug">
  //         <DebugInstructions />
  //       </Section>
  //       <Section title="Learn More">
  //         Read the docs to discover what to do next:
  //       </Section>
  //       <LearnMoreLinks />
  //       <Button title="Pocess"  onPress={onPayPressHandler}/>
  //     </View>
  //   </ScrollView>
  // </SafeAreaView>

  <View>
    <Stacks />
  </View>
);
};

const styles = StyleSheet.create({
sectionContainer: {
  marginTop: 32,
  paddingHorizontal: 24,
},
sectionTitle: {
  fontSize: 24,
  fontWeight: '600',
},
sectionDescription: {
  marginTop: 8,
  fontSize: 18,
  fontWeight: '400',
},
highlight: {
  fontWeight: '700',
},
});

export default App;
