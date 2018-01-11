import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity,
    ScrollView, View, Image, Dimensions, ListView } from 'react-native';


import sp1 from '../../../media/product/145.jpg';
import sp2 from '../../../media/product/146.jpg';
import sp3 from '../../../media/product/147.jpg';
import sp4 from '../../../media/product/148.jpg';
import sp5 from '../../../media/product/149.jpg';
import sp6 from '../../../media/product/150.jpg';
import sp7 from '../../../media/product/151.jpg';


function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class SearchView extends Component {

    render() {
        const {
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage,
            txtShowDetail, showDetailContainer, wrapper
        } = styles;
        return (
            <ScrollView style={wrapper}>
                <View style={product}>
                    <Image source={sp1} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('cold shoulder')}</Text>
                        <Text style={txtPrice}>100$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color white</Text>
                            <View
                                style={{
                                    height: 15,
                                    width: 15,
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    marginLeft: 10
                                }}
                            />
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={product}>
                    <Image source={sp2} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('black dress')}</Text>
                        <Text style={txtPrice}>156$</Text>
                        <Text style={txtMaterial}>Material cotton</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color yellow</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <View
                                    style={{
                                        height: 15,
                                        width: 15,
                                        backgroundColor: 'white',
                                        borderRadius: 15,
                                        marginLeft: 10
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={product}>
                    <Image source={sp3} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('chiffon halter')}</Text>
                        <Text style={txtPrice}>125$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color white</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <View
                                    style={{
                                        height: 15,
                                        width: 15,
                                        backgroundColor: 'white',
                                        borderRadius: 15,
                                        marginLeft: 10
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={product}>
                    <Image source={sp4} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('strappy cut-ou')}</Text>
                        <Text style={txtPrice}>213$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color black</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <View
                                    style={{
                                        height: 15,
                                        width: 15,
                                        backgroundColor: 'white',
                                        borderRadius: 15,
                                        marginLeft: 10
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={product}>
                    <Image source={sp5} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('floral surplic')}</Text>
                        <Text style={txtPrice}>856$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color red</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <View
                                    style={{
                                        height: 15,
                                        width: 15,
                                        backgroundColor: 'white',
                                        borderRadius: 15,
                                        marginLeft: 10
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={product}>
                    <Image source={sp6} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('deco sequin em')}</Text>
                        <Text style={txtPrice}>452$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color green</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <View
                                    style={{
                                        height: 15,
                                        width: 15,
                                        backgroundColor: 'white',
                                        borderRadius: 15,
                                        marginLeft: 10
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={product}>
                    <Image source={sp7} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('asymmetrical g')}</Text>
                        <Text style={txtPrice}>215$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color white</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <View
                                    style={{
                                        height: 15,
                                        width: 15,
                                        backgroundColor: 'white',
                                        borderRadius: 15,
                                        marginLeft: 10
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={product}>
                    <Image source={sp4} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('black dress')}</Text>
                        <Text style={txtPrice}>180$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>Color pink</Text>
                            <View style={{ flexDirection: 'row' }} >
                                <View
                                    style={{
                                        height: 15,
                                        width: 15,
                                        backgroundColor: 'white',
                                        borderRadius: 15,
                                        marginLeft: 10
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#DFDFDF',
        flex: 1
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});

export default SearchView;

