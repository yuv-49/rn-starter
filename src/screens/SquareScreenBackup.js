import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreenBackup = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                break;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                break;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                break;
        }
    }

    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red',  -1 * COLOR_INCREMENT)}
                color="Red"
            />

            <ColorCounter
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
                onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
                color="Blue"
            />

            <ColorCounter
                onIncrease={() => setGreen(green + COLOR_INCREMENT)}
                onDecrease={() => setGreen(green - COLOR_INCREMENT)}
                color="Green"
            />

            <View
                style={{
                    height: 150,
                    width: 100,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({});

export default SquareScreenBackup;