import React, { Component } from 'react';
import { StyleSheet, View, Text, ViewPropTypes } from 'react-native';
import GridView from 'react-native-super-grid';
import PropTypes from 'prop-types';

export default class GridViewExample extends Component {
    render() {
        // Taken from https://flatuicolors.com/
        const items = [
            { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
        ];

        return (
            <GridView
                itemWidth={130}
                // horizontal={}
                // pagingEnabled={true}
                items={items}
                style={styles.gridView}
                renderItem={item => (
                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCode}>{item.code}</Text>
                    </View>
                )}
            />
        );
    }
}

GridView.propTypes = {
    /*renderItem: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    itemWidth: PropTypes.number,
    fixed: PropTypes.bool,
    spacing: PropTypes.number,
    style: ViewPropTypes.style,
    staticWidth: PropTypes.number,*/
    horizontal: PropTypes.bool,
    pagingEnabled: PropTypes.bool
};

const styles = StyleSheet.create({

    gridView: {
         paddingTop: 5,
        flex: 1,
        //paddingBottom: 10,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});