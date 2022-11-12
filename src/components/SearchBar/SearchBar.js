import React from 'react';
import { TextInput, View } from 'react-native';
import styles from "./SearchBar.style";

const SearchBar = ({onSearch}) => {
    return(
        <View style={styles.container}>
            <TextInput placeholder="Search stocks..." style={styles.input} onChangeText={onSearch}/>
        </View>
    );
};

export default SearchBar;