'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Image,
} = ReactNative;

app.personal = {info:{}};
var SplashScreen = require('@remobile/react-native-splashscreen');
var Panel = require('@remobile/react-native-3d-panel');
var Menu = require('../person/Settings');
var image = require('./1.jpg');

module.exports = React.createClass({
    componentWillMount() {
        SplashScreen.hide();
    },
    render() {
        const menu = (
            <Menu />
        );
        return (
            <Panel leftMenu={menu}>
                <Image
                    resizeMode='stretch'
                    source={image}
                    style={styles.image}>
                </Image>
            </Panel>
        )
    }
});

var styles = StyleSheet.create({
    image: {
        width: sr.w,
        height: sr.h,
    },
});
