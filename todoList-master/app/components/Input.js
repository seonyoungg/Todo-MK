import React from "react";
import {TextInput, StyleSheet} from 'react-native';

const Input = ({value, changeText, addTodo}) => (

    <TextInput
        value={value}
        style={styles.input}
        placeholder={"엔터키를 누르고 날짜를 입력하세요"}
        onEndEditing={addTodo}
        onChangeText={changeText}
        maxLength={30}
        returnKeyType="done"/>
);

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop: 15,
    }
})

export default Input;