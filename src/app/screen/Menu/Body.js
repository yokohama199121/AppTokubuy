import React, {Component} from "react"
import {Image, Text, View} from "react-native"
import MenuStyle from "../../../res/style/MenuStyle";

export default class Body extends Component {
    render() {
        return (
            <View>
                <View style={MenuStyle.viewRow}>
                    <View style={MenuStyle.viewItem}>
                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu1.png')}/>
                        <Text style={MenuStyle.textItem}>全ての商品</Text>
                    </View>

                    <View style={MenuStyle.viewItem}>

                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu2.png')}/>
                        <Text style={MenuStyle.textItem}>デジタル</Text>

                    </View>


                </View>

                <View style={MenuStyle.viewRow}>
                    <View style={MenuStyle.viewItem}>
                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu3.png')}/>
                        <Text style={MenuStyle.textItem}>家電</Text>
                    </View>

                    <View style={MenuStyle.viewItem}>

                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu4.png')}/>
                        <Text style={MenuStyle.textItem}>アクセサリー</Text>

                    </View>


                </View>

                <View style={MenuStyle.viewRow}>
                    <View style={MenuStyle.viewItem}>
                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu5.png')}/>
                        <Text style={MenuStyle.textItem}>食品＆飲料</Text>
                    </View>

                    <View style={MenuStyle.viewItem}>

                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu6.png')}/>
                        <Text style={MenuStyle.textItem}>コスメ・美容</Text>

                    </View>


                </View>

                <View style={MenuStyle.viewRow}>
                    <View style={MenuStyle.viewItem}>
                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu7.png')}/>
                        <Text style={MenuStyle.textItem}>スポーツ</Text>
                    </View>

                    <View style={MenuStyle.viewItem}>

                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu8.png')}/>
                        <Text style={MenuStyle.textItem}>ゲーム関連</Text>

                    </View>


                </View>

                <View style={MenuStyle.viewRow}>
                    <View style={MenuStyle.viewItem}>
                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu9.png')}/>
                        <Text style={MenuStyle.textItem}>仮想通貨</Text>
                    </View>

                    <View style={MenuStyle.viewItem}>

                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu10.png')}/>
                        <Text style={MenuStyle.textItem}>その他商品</Text>

                    </View>


                </View>

                <View style={MenuStyle.viewRow}>
                    <View style={MenuStyle.viewItem}>
                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu11.png')}/>
                        <Text style={MenuStyle.textItem}>少物</Text>
                    </View>

                    <View style={MenuStyle.viewItem}>

                        <Image
                            style={MenuStyle.imgItem}
                            source={require('../../../res/img/ic_menu12.png')}/>
                        <Text style={MenuStyle.textItem}>ブランド品</Text>

                    </View>


                </View>


            </View>
        )
    }
}