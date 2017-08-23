import React, {Component} from "react"
import {Image, Text, View} from "react-native"

export default class ViewTop extends Component {
    render() {
        return (
            <View>
                <Image
                    style={{height: 190, width: '100%'}}
                    source={require('../../../res/img/img_bridge.jpg')}/>
                <View style={{
                    height: 190,
                    width: '100%',
                    backgroundColor: 'black',
                    position: 'absolute',
                    opacity: 0.55
                }}/>
                <Image
                    style={{
                        height: 25, width: 25, position: 'absolute', marginLeft: 10,
                        marginTop: 30
                    }}
                    source={require('../../../res/img/ic_share.png')}/>
                <Image
                    style={{
                        height: 25, width: 25, position: 'absolute', marginRight: 10, right: 0,
                        marginTop: 30
                    }}
                    source={require('../../../res/img/ic_setting.png')}/>

                <View style={{
                    height: 70, width: 70, position: 'absolute', alignSelf: 'center', backgroundColor: '#e1e1e1',
                    marginTop: 60, borderRadius: 35
                }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            position: 'absolute',
                            alignSelf: 'center',
                            opacity: 0.3,
                            bottom: 3,
                        }}
                        source={require('../../../res/img/img_panda.png')}/>
                </View>

                <View style={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: '#ccc',
                    borderWidth: 0.8,
                    alignSelf: 'center',
                    bottom: 0,
                    marginBottom: 15

                }}>
                    <Text style={{color: 'white', fontSize: 15, paddingHorizontal: 45, paddingVertical: 8}}
                    >ログイン</Text>
                </View>

            </View>
        )
    }
}