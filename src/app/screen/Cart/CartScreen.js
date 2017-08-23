import React, {Component} from "react"
import {Image, ScrollView, Text, View} from "react-native"
import CartHeader from "./CartHeader";
import CartStyle from "../../../res/style/CartStyle";
import ListProductCart from "./ListProductCart";

export default class CartScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <CartHeader/>

                <ScrollView>
                    <View style={{
                        flex: 1, backgroundColor: 'white'
                    }}>
                        <View style={CartStyle.View1}>

                            <Image
                                style={{width: 120, height: 120, marginTop: 70}}
                                source={require('../../../res/img/img_Cart.png')}/>

                            <Text style={{marginTop: 30}}
                            >カートに商品がありません～</Text>

                            <View style={{
                                backgroundColor: '#0089ff',
                                width: 160,
                                height: 45,
                                borderRadius: 5,
                                margin: 30,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{color: 'white', fontSize: 15}}
                                >お買い物</Text>
                            </View>
                        </View>

                        <View style={CartStyle.View2}>

                            <Text style={{marginLeft: 15, marginTop: 15}}>おすすめ商品</Text>

                            <ListProductCart/>

                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}