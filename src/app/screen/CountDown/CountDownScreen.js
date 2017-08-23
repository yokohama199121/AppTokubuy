import React, {Component} from "react"
import {FlatList, View} from "react-native"
import CDHeader from "./CDHeader";
import ItemListCountdown from "./ItemListCountdown";
import {CountDownData} from "../../model/CountDownData";

export default class CountDownScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataProduct: this.createDataProduct()
        }
    }

    _renderItemProduct = ({item}) => (
        <ItemListCountdown
            style={{flex: 1}}
            dataCountDown={item}/>
    );

    createDataProduct(): Array<CountDownData> {
        // noinspection JSAnnotator
        let arrayData: Array<CountDownData> = [
            new CountDownData(1, require('../../../res/img/km1.jpg'),
                '5000ホーム う上が ',
                140, 36000),
            new CountDownData(2, require('../../../res/img/km2.jpg'),
                '2150ホーム う上が ',
                440, 43432),
            new CountDownData(3, require('../../../res/img/km3.jpg'),
                '6720ホーム う上が ',
                130, 24145),
            new CountDownData(4, require('../../../res/img/km4.jpg'),
                '530ホーム う上が ',
                1640, 52311),
            new CountDownData(5, require('../../../res/img/km1.jpg'),
                '5300ホーム う上が ',
                113, 51521),
            new CountDownData(6, require('../../../res/img/km2.jpg'),
                '500ホーム う上が ',
                1410, 41235),
            new CountDownData(7, require('../../../res/img/km3.jpg'),
                '7310ホーム う上が ',
                160, 44211),
            new CountDownData(8, require('../../../res/img/km4.jpg'),
                '5210ホーム う上が ',
                1740, 12354)

        ];
        return arrayData;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <CDHeader/>

                <View style={{flex: 1,backgroundColor:'white'}}>

                    <FlatList
                        data={this.state.dataProduct}
                        renderItem={this._renderItemProduct}
                        keyExtractor={(item, index) => item.id}/>
                </View>

            </View>
        )
    }
}