import React, {Component} from "react"
import {FlatList, View} from "react-native"
import HeaderNews from "./HeaderNews";
import ItemListNews from "./ItemListNews";
import {DataNews} from "../../model/DataNews";
import {connect} from "react-redux";

class NewsScreen extends Component {


    _renderItemProduct = ({item}) => (
        <ItemListNews
            style={{flex: 1}}
            dataNews={item}/>
    );


    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <HeaderNews/>

                <View style={{flex: 1}}>

                    <FlatList
                        data={this.props.dataNews}
                        renderItem={this._renderItemProduct}
                        keyExtractor={(item, index) => item.id}/>
                </View>

            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        dataNews: state.news.dataNews
    };
}

export default connect(mapStateToProps)(NewsScreen);