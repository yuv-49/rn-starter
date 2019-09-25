import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + action.payload}
        case 'decrement':
            return {...state, counter: state.counter - action.payload}
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0});
    const { counter } = state;
    return(
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    dispatch({type: 'increment', payload: 1})
                }} 
            />

            <Button
                title="Decrease"
                onPress={() => {
                    dispatch({type: 'decrement', payload: 1})
                }}
            />

            <Text>current Counter: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
