import React, {Component} from "react"
import {View, StyleSheet, FlatList} from "react-native"
import {ProductData} from "../../model/ProductData";
import ItemList from "./ItemList";

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataProduct: this.createDataProduct(),

        }
    }

    _renderItemProduct = ({item}) => (
        <ItemList
            style={{flex: 1}}
            dataProduct={item}/>
    );

    // noinspection JSAnnotator
    createDataProduct(): Array<ProductData> {
        // noinspection JSAnnotator
        let arrayData: Array<ProductData> = [
            new ProductData(1, require('../../../res/img/status2.jpg'),
                ' での 雨上が までの',
                1440),
            new ProductData(2, require('../../../res/img/status3.png'),
                '近さでの 雨はもう上が',
                6141),
            new ProductData(3, require('../../../res/img/status1.jpg'),
                ' 近さっきまでのう上が までの',
                1440),
            new ProductData(4, require('../../../res/img/status4.jpg'),
                ' 近さっきまでの 雨はも までの',
                1440),
            new ProductData(5, require('../../../res/img/status3.png'),
                ' 近さっきまでの 雨はもう上が',
                1440),
            new ProductData(6, require('../../../res/img/status1.jpg'),
                ' 近さっきまでの 雨はもう上が',
                6141),
            new ProductData(7, require('../../../res/img/status4.jpg'),
                ' 近さっきまでの 雨はもう上が までの',
                1440),
            new ProductData(8, require('../../../res/img/status2.jpg'),
                ' 近さっきまでの 雨はもう上が までの',
                1440)

        ];
        return arrayData;
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    style={styles.flatList}
                    numColumns={2}
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
        marginLeft: 0.7,
        marginRight: 0.7
    },
});