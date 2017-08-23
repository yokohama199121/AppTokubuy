import React, {Component} from "react"
import {Image, Text, View} from "react-native"
import UserStyle from "../../../res/style/UserStyle";

export default class ViewMid extends Component {
    render() {
        return (
            <View>

                <View style={UserStyle.Container}>
                    <Image
                        style={UserStyle.ic_img}
                        source={require('../../../res/img/ic_user1.png')}/>
                    <Text style={UserStyle.text}>初めての方へ</Text>
                    <Image
                        style={UserStyle.img}
                        source={require('../../../res/img/ic_next.png')}/>
                </View>

                <View style={UserStyle.Container}>
                    <Image
                        style={{
                            height: 20,
                            width: 21,
                        }}
                        source={require('../../../res/img/ic_sound.png')}/>
                    <Text style={UserStyle.text}
                    >友達招待</Text>
                    <Image
                        style={UserStyle.img}
                        source={require('../../../res/img/ic_next.png')}/>
                </View>

                <View style={UserStyle.Container}>
                    <Image
                        style={UserStyle.ic_img}
                        source={require('../../../res/img/ic_hot.png')}/>
                    <Text style={UserStyle.text}>ポイント</Text>
                    <Image
                        style={UserStyle.img}
                        source={require('../../../res/img/ic_next.png')}/>
                </View>

                <View style={UserStyle.Container}>
                    <Image
                        style={UserStyle.ic_img}
                        source={require('../../../res/img/ic_posision.png')}/>
                    <Text style={UserStyle.text}>アドレス著</Text>
                    <Image
                        style={UserStyle.img}
                        source={require('../../../res/img/ic_next.png')}/>
                </View>

                <View style={UserStyle.Container}>
                    <Image
                        style={UserStyle.ic_img}
                        source={require('../../../res/img/ic_check.png')}/>
                    <Text style={UserStyle.text}>購入履歴</Text>
                    <Image
                        style={UserStyle.img}
                        source={require('../../../res/img/ic_next.png')}/>
                </View>

                <View style={{
                    width: '100%',
                    height: 10,
                    backgroundColor: '#efeff4',
                }}/>

                <View style={{
                    borderBottomWidth: 1,
                    borderColor: '#c4c4c4',
                    marginLeft: 10,
                    paddingVertical: 12,
                    flexDirection: 'row',
                    paddingHorizontal: 5,
                    borderTopWidth: 1,
                    backgroundColor: 'white'

                }}>
                    <Image
                        style={{
                            height: 20,
                            width: 21,
                            marginRight: 1
                        }}
                        source={require('../../../res/img/ic_cup.png')}/>
                    <Text style={UserStyle.text}>獲得履歴</Text>
                    <Image
                        style={UserStyle.img}
                        source={require('../../../res/img/ic_next.png')}/>
                </View>
                <View style={{
                    marginLeft: 10,
                    paddingVertical: 12,
                    flexDirection: 'row',
                    paddingHorizontal: 5,
                    backgroundColor: 'white'

                }}>
                    <Image
                        style={{
                            height: 21,
                            width: 21
                        }}
                        source={require('../../../res/img/ic_cam.png')}/>
                    <Text style={UserStyle.text}>レビュー</Text>
                    <Image
                        style={UserStyle.img}
                        source={require('../../../res/img/ic_next.png')}/>
                </View>


            </View>
        )
    }
}