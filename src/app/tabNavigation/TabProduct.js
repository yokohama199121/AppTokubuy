import React from 'react'
import {TabNavigator} from "react-navigation";
import Product from "../screen/Home/ListProduct";

const mainBarOptions = {
    animationEnabled: true,
    swipeEnabled: false,
    showIcon:false,
    lazyLoad: true,
    tabBarPosition: 'top',
    tabBarOptions: {
        lazyLoad: true,
        activeTintColor: '#ff0010',
        inactiveTintColor: 'black',
        labelStyle: {
            fontSize: 15,
            marginBottom:18,
        },
    style:{
            backgroundColor:'white'
    }
    }
};

export const ProductBar = TabNavigator(
    {
        Product: {
            screen: Product,
            navigationOptions: {
                tabBarLabel: '人気',
            },
        },

        Screen2: {
            screen: Product,
            navigationOptions: {
                tabBarLabel: '締切間近',
            },
        },

        Screen3: {
            screen: Product,
            navigationOptions: {
                tabBarLabel: '最近',
            },
        },
        Screen4: {
            screen: Product,
            navigationOptions: {
                tabBarLabel: '高値',
            },
        },

        Screen5: {
            screen: Product,
            navigationOptions: {
                tabBarLabel: '安値',
            },
        }
    },
    mainBarOptions
);