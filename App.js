import React, { Component } from 'react';
import { Dimensions, Plotform, StyleSheet, Button, Text, View, AppRegistry, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import ReadingListStack from './screens/Lists';
import Profile from './screens/Profile';

let screen = Dimensions.get('window');

//  export const Tabs = createBottomTabNavigator({
//      'Bookcase' : {
//          screen: Bookcase, 
//          navigationOptions: {
//              tabBarLabel: 'Bookcase',
//              tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
//          },
//      },
//      'Explore': {
//          screen: Explore,
//          navigationOptions: {
//              tabBarLabel: 'Explore',
//              tabBarIcon: ({ tintColor }) => <Icon name="ios-map-outline" type="ionicon" size={28} color={tintColor} />
//          },
//      },
//      'Add Book': {
//          screen: AddBook,
//          navigationOptions: {
//              tabBarLabel: 'Add Book',
//              tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
//          },
//      },
//      'Lists': {
//          screen: ReadingListStack,
//          navigationOptions: {
//              tabBarLabel: 'Lists',
//              tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
//          },
//      },
//      'My Profile': {
//          screen: Profile,
//          navigationOptions: {
//              tabBarLabel: 'Profile',
//              tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />
//          },
//      },
//  });

class Bookcase_ extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Bookcase
                </Text>
            </View>
        );
    }
}

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, 
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}>
                <Text> HomeScreen </Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Details Screen </Text>
                <Button 
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button 
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Tabs')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
export default class App extends Component {
    render() {
        return <RootStack />;
    }
}

const RootStack = createBottomTabNavigator(
        {
            Bookcase: Bookcase,
            Explore: Explore,
            AddBook: AddBook,
            Lists: ReadingListStack,
            Profile: Profile
        },
);

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


class Bananas extends Component{
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}} />

        );
    }
}


class Greeting extends Component {
    render() {
        return (
            <Text> Hello {this.props.name}! </Text>
        );
    }
}

class LotsOfGreeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}} >
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        )
    }
}
