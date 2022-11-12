import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { Dimensions, Image, View } from "react-native";
import Depth from "./Depth";
import HistoricalData from "./HistoricalData";
import Price from "./Price";

/*
    2- Historical Data ve Depth kısmındaki dataları bir şekilde önceden yüklemek gerekiyor.
    3- Uzun listelerde bir şekilde kaçıncı array'de olduğumuzu gösteren bir gösterge olabilir??(Zor olduğunun farkındayım)
    4- Uzun listelerde bir button eklenerek daha hızlı aşağıya inilmesi sağlanabilir.
    5- Navigation'ların header kısmı düzenlenebilir.
    6- Değerler yenilendiği zaman yükselme olursa yeşil yanıp söner, düşme olursa kırmızı yanıp söner.
    7- Flatlist dinamik bir şekilde liste elemanlarının yeri değişebilir mi??(Belki çözümü vardır.)
*/ 

const Tab = createBottomTabNavigator();

const height = Dimensions.get("window").height;

const Detail = ({route}) => {
    const symbol = route.params.symbol;
    const oldData = route.params.newData;
    /* console.log(symbol); */
    return(
        <Tab.Navigator initialRouteName="Price"
        screenOptions={{headerShown: false}}
        >
            <Tab.Screen name="Price" component={Price} initialParams={{symbol:symbol, data:oldData}} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                    <View>
                        <Image
                        source={require("../../assets/dollar.png")}
                        resizeMode="contain"
                        style={{ width: 25 }}
                        />
                    </View>
                    );
                },
                tabBarStyle: {alignItems: "center", justifyContent: "center", height: height*0.08, backgroundColor: "#e1e1e1"},
                tabBarLabelStyle: {marginBottom: 5, fontSize: 14,},
                tabBarIconStyle: {marginTop: 5},
                tabBarActiveBackgroundColor: "#BBBBBB",
                tabBarActiveTintColor: "#000000",
            }}/>
            <Tab.Screen name="HistoricalData" component={HistoricalData} initialParams={{symbol:symbol}} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                    <View>
                        <Image
                        source={require("../../assets/historical.png")}
                        resizeMode="contain"
                        style={{ width: 25 }}
                        />
                    </View>
                    );
                },
                tabBarStyle: {alignItems: "center", justifyContent: "center", height: height*0.08, backgroundColor: "#e1e1e1"},
                tabBarLabelStyle: {marginBottom: 5, fontSize: 14,},
                tabBarIconStyle: {marginTop: 5},
                tabBarActiveBackgroundColor: "#BBBBBB",
                tabBarActiveTintColor: "#000000",
            }}/>
            <Tab.Screen name="Depth" component={Depth} initialParams={{symbol:symbol}} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                    <View>
                        <Image
                        source={require("../../assets/depth-perception.png")}
                        resizeMode="contain"
                        style={{ width: 25 }}
                        />
                    </View>
                    );
                },
                tabBarStyle: {alignItems: "center", justifyContent: "center", height: height*0.08, backgroundColor: "#e1e1e1"},
                tabBarLabelStyle: {marginBottom: 5, fontSize: 14, },
                tabBarIconStyle: {marginTop: 5},
                tabBarActiveBackgroundColor: "#BBBBBB",
                tabBarActiveTintColor: "#000000",
            }}/>
        </Tab.Navigator>
    );
};

export default Detail;