import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import CartView from './CartView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';
import ProductDetail1 from '../ProductDetail/ProductDetail.js';
import ProductDetail5 from '../ProductDetail/ProductDetail.js';
import ProductDetail3 from '../ProductDetail/ProductDetail.js';
import HomeView from "../Home/HomeView";


export const CartStack = StackNavigator({

    ManHinh_CartView: {
        screen : CartView,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_ProductDetail : {
        screen: ProductDetail,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_ProductDetail1 : {
        screen: ProductDetail1,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_ProductDetail5 : {
        screen: ProductDetail5,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_ProductDetail3 : {
        screen: ProductDetail3,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },

    ManHinh_HomeView: {
        screen : HomeView,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },

})

export default class Cart extends Component<{}> {
    render() {
        return (
            <CartStack/>
        );
    }
}






