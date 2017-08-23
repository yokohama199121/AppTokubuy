import React, {Component} from "react"
import {View, StyleSheet, FlatList} from "react-native"
import {ProductData} from "../../model/ProductData";
import ItemListCart from "./ItemListCart";

export default class ListProductCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataProduct: this.createDataProduct(),

        }
    }

    _renderItemProduct = ({item}) => (
        <ItemListCart
            style={{flex: 1}}
            dataProduct={item}/>
    );

    // noinspection JSAnnotator
    createDataProduct(): Array<ProductData> {
        // noinspection JSAnnotator
        let arrayData: Array<ProductData> = [
            new ProductData(1, require('../../../res/img/camera.png'),
                '雨はもう上が までの',
                1440),
            new ProductData(2, require('../../../res/img/ip7plus.png'),
                'Iphone 7 plus 雨はもう上が',
                6141),
            new ProductData(3, require('../../../res/img/camera.png'),
                'Panasonic までの',
                1440),
            new ProductData(4, require('../../../res/img/camera.png'),
                'Panasonic 近さっきまでの',
                1440),
            new ProductData(5, require('../../../res/img/camera.png'),
                'Panasonicっきまでの',
                1440),
            new ProductData(6, require('../../../res/img/ip7plus.png'),
                'Iphone 7 pluS う上が',
                6141),
            new ProductData(7, require('../../../res/img/camera.png'),
                '雨はもう上が までの',
                1440),
            new ProductData(8, require('../../../res/img/ip7plus.png'),
                'Iphone 7 plus 雨はもう上が',
                6141),
            new ProductData(9, require('../../../res/img/camera.png'),
                'Panasonic までの',
                1440),
            new ProductData(10, require('../../../res/img/camera.png'),
                'Panasonic 近さっきまでの',
                1440),
            new ProductData(11, require('../../../res/img/camera.png'),
                'Panasonicっきまでの',
                1440),
            new ProductData(12, require('../../../res/img/ip7plus.png'),
                'Iphone 7 pluS う上が',
                6141),

        ];
        return arrayData;
    }


    render() {
        return (
            <View style={{flex: 1}}>

                <FlatList
                    style={styles.flatList}
                    numColumns={3}
                    data={this.state.dataProduct}
                    renderItem={this._renderItemProduct}
                    keyExtractor={(item, index) => item.id}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        marginLeft:0.7,
        marginRight:0.7
    },
});