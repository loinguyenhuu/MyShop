import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import Collection from './Collection.js';
import Category from './Category.js';
import TopProduct from './TopProduct.js';

class HomeView extends Component<{}> {

    render() {
        return (
            <ScrollView style={{flex: 1,backgroundColor:'#DBDBD8'}}>
                <Collection/>
                <Category navigation={this.props.navigation} />
                <TopProduct navigation={this.props.navigation}/>
            </ScrollView>
        );
    }
}

export default HomeView;