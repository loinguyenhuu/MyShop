import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import HomeView from './HomeView.js';
import ProductDetail from '../ProductDetail/ProductDetail.js';
import ListProduct from '../ListProduct/ListProduct.js';
import ListProduct1 from '../ListProduct/ListProduct1.js';
import ListProduct2 from '../ListProduct/ListProduct2.js';
import ListProduct3 from '../ListProduct/ListProduct3.js';
import ProductDetail1 from '../ProductDetail/ProductDetail1.js';
import ProductDetail2 from '../ProductDetail/ProductDetail2.js';
import ProductDetail3 from '../ProductDetail/ProductDetail3.js';
import ProductDetail4 from '../ProductDetail/ProductDetail4.js';
import ProductDetail5 from '../ProductDetail/ProductDetail5.js';

export const HomeStack = StackNavigator({

    ManHinh_HomeView: {
        screen : HomeView,
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
    ManHinh_ProductDetail2 : {
        screen: ProductDetail2,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_ProductDetail4 : {
        screen: ProductDetail4,
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

    ManHinh_ListProduct:{
        screen : ListProduct,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_ListProduct1:{
        screen : ListProduct1,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_ListProduct2:{
        screen : ListProduct2,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    ManHinh_ListProduct3:{
        screen : ListProduct3,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
})

export default class Home extends Component<{}> {

    render() {
        return (
            <HomeStack/>
        );
    }
}






