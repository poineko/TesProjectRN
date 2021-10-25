/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>abcd</Text>
      <View>
        <Text>abcd</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style = {{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{ height: 40,borderColor: 'gray',borderWidth: 1 }
        }
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

class yumi extends Component {
  render() {
    return (
      <View style={
        { flex: 1,justifyContent: "center",alignItems: "center" }
        }>
        <Image
          source={
             { uri: 'https://ih1.redbubble.net/image.830466542.0093/st,small,507x507-pad,600x600,f8f8f8.u3.jpg' }
          }style={
             { width: 200, height: 200 }
            }
        />
      </View>
    );
          }
        }


export default App;


