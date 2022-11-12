import LottieView from "lottie-react-native";
import React from 'react';

export default Loading = () => {
    return <LottieView source={require("../../assets/loading.json")} autoPlay/>
}