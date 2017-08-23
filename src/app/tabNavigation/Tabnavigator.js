import React from 'react'
import {StackNavigator, TabNavigator} from "react-navigation";
import HomeScreen from "../screen/Home/HomeScreen";
import CountDownScreen from "../screen/CountDown/CountDownScreen";
import NewsScreen from "../screen/News/NewsScreen";
import CartScreen from "../screen/Cart/CartScreen";
import InfoUserScreen from "../screen/InfoUser/InfoUserScreen";
import {Icon} from "react-native-elements";
import MenuScreen from "../screen/Menu/MenuScreen";

const mainBarOptions = {
    initialRouteName: 'HomeScreen',
    animationEnabled: false,
    swipeEnabled: false,
    lazyLoad: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#ff0010',
        inactiveTintColor: '#858585',
        showIcon: true,
        showLabel: true,
        lazyLoad: true,
        labelStyle: {
            fontSize: 13,
        },
        indicatorStyle: {
            backgroundColor: 'transparent'
        },
        style: {
            backgroundColor: '#f9f9f9',

        },
    }
};

const tabNavigator = TabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'ホーム',
                tabBarIcon: ({tintColor}) => <Icon name='home' type='material-community' size={26} color={tintColor}/>
            },
        },

        CountDownScreen: {
            screen: CountDownScreen,
            navigationOptions: {
                tabBarLabel: '最新の発表',
                tabBarIcon: ({tintColor}) => <Icon name='star-outline' type='material-community' size={26}
                                                   color={tintColor}/>
            },
        },

        NewsScreen: {
            screen: NewsScreen,
            navigationOptions: {
                tabBarLabel: 'レビュー',
                tabBarIcon: ({tintColor}) => <Icon name='camera' type='material-community' size={26} color={tintColor}/>
            },
        },
        CartScreen: {
            screen: CartScreen,
            navigationOptions: {
                tabBarLabel: 'カート',
                tabBarIcon: ({tintColor}) => <Icon name='cart-outline' type='material-community' size={26}
                                                   color={tintColor}/>
            },
        },

        InfoUserScreen: {
            screen: InfoUserScreen,
            navigationOptions: {
                tabBarLabel: 'YOU',
                tabBarIcon: ({tintColor}) => <Icon name='account-outline' type='material-community' size={26}
                                                   color={tintColor}/>
            },
        }
    },
    mainBarOptions
);
export const App = StackNavigator({
    Home: {
        screen: tabNavigator,
        navigationOptions: {
            header: null,
        }
    },
    Details: {
        screen: MenuScreen,
        navigationOptions: {
            header: null,
        }
    }
});