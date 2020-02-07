import React,{Component} from 'react';
import {Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class secondScreen extends Component{
    render(){
        return(
            <View >
                <TouchableOpacity onPress={(props) => { this.props.navigation.goBack(null) }}>
                <Text>SECOND SCREEN</Text>
                </TouchableOpacity>
                 
                </View>
        )
    }
}