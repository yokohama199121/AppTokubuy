import React, {Component} from "react"
import {Image, Text, View} from "react-native"
import {CountDownData} from "../../model/CountDownData";
import {SetTimeCountDown} from "../../component/SetTimeCountDown";

export default class ItemListCountdown extends Component {

    _onItemClick() {
        const {onItemClick} = this.props;
        if (onItemClick) {
            onItemClick();
        }
    }

    render() {
        // noinspection JSAnnotator
        const dataCountDown: CountDownData = this.props.dataCountDown;

        return (
            <View style={{
                flex: 1, flexDirection: 'row', borderBottomColor: '#d6d6d6', borderBottomWidth: 1,
                backgroundColor: 'white'
            }}>
                <Image
                    style={{width: 100, height: 100, marginLeft: 15, marginTop: 15}}
                    source={dataCountDown.image}/>
                <Image
                    style={{width: 82, height: 82, position: 'absolute'}}
                    source={require('../../../res/img/im_tick.png')}/>

                <View style={{flex: 1, marginTop: 5, marginLeft: 10, marginTop: 20}}>

                    <Text>{dataCountDown.title}</Text>

                    <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
                        <Text style={{color: '#8d8d8d', marginTop: 5}}>総必要：</Text>
                        <Text style={{color: '#8d8d8d', marginTop: 3}}>{dataCountDown.price}口</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
                        <Image
                            style={{width: 20, height: 20, marginTop: 15}}
                            source={require('../../../res/img/img_clock.png')}/>

                        <SetTimeCountDown time={dataCountDown.clock}/>
                    </View>
                </View>

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

