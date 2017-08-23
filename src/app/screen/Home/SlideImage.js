import React, {Component} from "react"
import {Image, View} from "react-native"
import HomeStyle from "../../../res/style/HomeStyle";
import Swiper from 'react-native-swiper';


export default class SlideImage extends Component {
    render() {
        return (

            <View style={{width: '100%', height: 170}}>
                <Swiper
                    width="100%"
                    autoplay={true}
                    autoplayTimeout={3}
                >

                    <View style={HomeStyle.slide}>
                        <Image
                            style={{width: '100%', height: 170}}
                            source={require('../../../res/img/neo3.jpg')}/>
                    </View>


                    <View>
                        <Image
                            style={{width: '100%', height: 170}}
                            source={require('../../../res/img/badge.jpg')}/>
                    </View>


                    <View style={HomeStyle.slide}>

                        <Image
                            style={{width: '100%', height: 170}}
                            source={require('../../../res/img/panel.jpg')}/>
                    </View>
                    <View style={HomeStyle.slide}>

                        <Image
                            style={{width: '100%', height: 170}}
                            source={require('../../../res/img/neo3.jpg')}/>
                    </View>


                </Swiper>

            </View>
        )
    }
}