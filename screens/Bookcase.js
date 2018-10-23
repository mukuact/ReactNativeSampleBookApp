import React, { Component } from 'react';
import { StatusBar, FlatList, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import BookcaseItem from './BookcaseItem'

export default class Bookcase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: '1',
                    title: 'Harry Potter and the Goblet of Fire',
                    author: 'J. K. Rowling',
                    thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
                },
                {
                    id: '2',
                    title: 'The Hobbit',
                    author: 'J. R. R. Tolkien',
                    thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
                },
                {
                    id: '3',
                    title: '1984',
                    author: 'George Orwell',
                    thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
                },
            ]
        }
    }

    static navigationOptions = {
        tabBarLabel: 'Bookcase',
        tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
    }

    _keyExtractor = (item, index) => item.id

    _renderItem = ({item}) =>
        <BookcaseItem
            id={item.id}
            title={item.title}
            author={item.author}
            thumbnail={item.thumbnail}
        />

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.books}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
