import React, {Component} from "react"
import {Image, Text, View} from "react-native"
import HomeStyle from "../../../res/style/HomeStyle";
import Swiper from 'react-native-swiper';

export default class SlideText extends Component {
    render() {
        return (
            <View style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'white'

            }}>
                <View>
                    <Image
                        style={{width: 25, height: 17, marginLeft: 10}}
                        source={require('../../../res/img/sound.png')}/>
                </View>

                <Swiper
                    width="100%"
                    autoplay={true}
                    autoplayTimeout={2}
                    showsPagination={false}
                    horizontal={false}
                >
                    <View style={HomeStyle.slide}>
                        <Text style={HomeStyle.textSile}>さっきまでの雨はもう上がって 声をきかせて</Text>
                    </View>

                    <View style={HomeStyle.slide}>
                        <Text style={HomeStyle.textSile}>アスファルト漂う街の匂い 声をきかせて</Text>
                    </View>

                    <View style={HomeStyle.slide}>
                        <Text style={HomeStyle.textSile}>ねえそっちも もう晴れてるよね 声をきかせて</Text>
                    </View>

                </Swiper>

            </View>

        )
    }
}