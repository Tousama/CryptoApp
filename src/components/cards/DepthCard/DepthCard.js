import React from 'react';
import { Text, View } from 'react-native';
import styles from "./DepthCard.style";

const DepthCard = ({stock}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.price}>{stock[0]}</Text>
            <Text style={styles.qty}>{stock[1]}</Text>
        </View>
    );
};

export default DepthCard;