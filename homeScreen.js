import React,{Component} from 'react';
import {Text,View, TouchableOpacity} from 'react-native';

export default class homeScreen extends Component{
    render(){
        return(
            
            <View >
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate("Second")}
                >
                <Text >HOME SCREEN</Text>
                  <Text >Screen Damage</Text>
                  <Text></Text>
                  </TouchableOpacity>
                </View>
            
        )
    }
}