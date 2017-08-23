import React, {Component} from "react"
import {Image, Text, TouchableOpacity, View} from "react-native"
import {ProductData} from "../../model/ProductData";

export default class ItemListCart extends Component {

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
            <View style={{
                flex: 1, marginHorizontal: 10,
                backgroundColor: 'white'
            }}>
                <TouchableOpacity onPress={() => this._onItemClick()}>


                    <Image style={{
                        width: 80, height: 80, marginTop: 20,
                        alignSelf: 'center'
                    }} source={dataProduct.image}/>

                    <View>
                        <Text style={{color: '#787878', margin: 6}}>{dataProduct.name}</Text>
                    </View>


                    <View style={{flexDirection: 'row', marginVertical: 7}}>
                        <View style={{height: 2, width: 20, backgroundColor: '#ff0010'}}/>
                        <View style={{height: 2, width: 80, backgroundColor: '#ffb421'}}/>
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

