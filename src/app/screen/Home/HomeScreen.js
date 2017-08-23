import React, {Component} from "react"
import {View, StatusBar, ScrollView} from "react-native"
import {ProductBar} from "../../tabNavigation/TabProduct";
import Header from "./HeaderHome";
import SlideImage from "./SlideImage";
import ViewIcon from "./ViewIcon";
import SlideText from "./SlideText";


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content"/>
                <Header {...this.props}/>
                <ScrollView
                    stickyHeaderIndices={[4]}>
                    <SlideImage/>
                    <ViewIcon/>
                    <SlideText/>
                    <View style={{height: 10, backgroundColor: '#d9d9d9'}}></View>
                    <ProductBar style={{flex: 1}}/>
                </ScrollView>

            </View>
        )
    }

}


