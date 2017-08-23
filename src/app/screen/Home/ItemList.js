import React, {Component} from "react"
import {Image, Text, TouchableOpacity, View} from "react-native"
import {ProductData} from "../../model/ProductData";
import AppStyle from "../../../res/style/AppStyle";

export default class ItemList extends Component {

    _onItemClick() {
        const {onItemClick} = this.props;
        if (onItemClick) {
            onItemClick();
        }
    }

    render() {
        // noinspection JSAnnotator
        const dataProduct: ProductData = this.props.dataProduct;

        return (

                <View style={AppStyle.Container}>
                    <TouchableOpacity onPress={() => this._onItemClick()}>


                        <Image style={AppStyle.Image} source={dataProduct.image}/>

                        <View>
                            <Text style={AppStyle.TextName}>{dataProduct.name}</Text>
                        </View>

                        <View style={{flexDirection: 'row'}}>

                            <View>

                                <View style={{flexDirection: 'row'}}>
                                    <Text style={AppStyle.TextFee}>総必要 : </Text>
                                    <Text style={AppStyle.TextFee}>{dataProduct.numberView}口</Text>
                                </View>

                                <View style={{flexDirection: 'row', marginVertical: 7}}>
                                    <View style={{height: 2, width: 20, backgroundColor: '#ff0010'}}/>
                                    <View style={{height: 2, width: 100, backgroundColor: '#ffb421'}}/>
                                </View>

                            </View>

                            <Image
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    marginRight: 10,
                                    width: 30,
                                    height: 30,
                                    marginTop: 5
                                }}
                                source={require('../../../res/img/ic_addcart.png')}/>

                        </View>

                    </TouchableOpacity>

                </View>

        )
    }

    _onItemClick() {
        const {onItemClick} = this.props;
        if (onItemClick) {
            onItemClick();
        }
    }
}

