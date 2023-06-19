import React, { useState, useRef, createContext, useContext, useEffect,
useLayoutEffect } from 'react';


import axios from 'axios';


import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Touchable, Image, Pressable,
StyleSheet, Animated, ScrollView, FlatList } from 'react-native';

import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DateTimePicker, DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import Spinner from 'react-native-loading-spinner-overlay';

import AsyncStorage from '@react-native-async-storage/async-storage';


import { useFonts, Comfortaa_700Bold, Comfortaa_600SemiBold, Comfortaa_500Medium, Comfortaa_400Regular, Comfortaa_300Light } from '@expo-google-fonts/comfortaa';
import { BaiJamjuree_200ExtraLight, BaiJamjuree_200ExtraLight_Italic, BaiJamjuree_300Light, BaiJamjuree_300Light_Italic, BaiJamjuree_400Regular, 
BaiJamjuree_400Regular_Italic, BaiJamjuree_500Medium, BaiJamjuree_500Medium_Italic, BaiJamjuree_600SemiBold, BaiJamjuree_600SemiBold_Italic,
BaiJamjuree_700Bold, BaiJamjuree_700Bold_Italic } from '@expo-google-fonts/bai-jamjuree';
import {NotoSansJP_100Thin, NotoSansJP_300Light, NotoSansJP_400Regular, NotoSansJP_500Medium, NotoSansJP_700Bold,
NotoSansJP_900Black } from '@expo-google-fonts/noto-sans-jp';


import { create } from 'zustand';
import { isLoading } from 'expo-font';



const Stack = createNativeStackNavigator();




// _STATES

const authStore = create((set) => ({

  isLogged: false,
  logIn: () => set((state) => ({ isLogged: true })),

}));


const appLoading = create((set) => ({

  isLoading: false,
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),

}));




// header
/*
const Header = () => {

  let [fontsLoaded] = useFonts({ Inter_900Black, Inter_300Light, Inter_200ExtraLight, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold });

  return (
    <View className="flex items-center justify-end h-[100px] w-full bg-[#FF7]">
      <Text className="mb-4 text-[26px] font-inter6">LANXE</Text>
    </View>
  );
};
*/

// pages
/*
const LoginScreen = () => {

  const logIn = authStore((state) => state.logIn);

  const loginErrorMsg = create((set) => ({

    isShown: false,
    show: () => set((state) => ({ isShown: true })),

  }));

  const errorMsg = loginErrorMsg((state) => state.isShown);
  const showErrorMsg = loginErrorMsg((state) => state.show);

  const [email, setEmail] = useState('');

  const [senha, setSenha] = useState('');

  var authError = false;
  
  const CheckAuth = () => {
    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      //console.log(userCredential);
      const user = userCredential.user;
      logIn();
    })
    .catch((error) => {
      showErrorMsg();
      console.log(error);
    });
  };

  return (
    <>
      <Header/>
      <View className="flex flex-col items-center flex-1 w-full bg-[#FFF]">
          <Text className="text-[50px] font-[400] mt-36">Login</Text>
          <TextInput onChangeText={val => setEmail(val)} className="h-[40px] w-[300px] border-[1px] border-[#878a87] text-black mt-6 pl-4" placeholder="Email" placeholderTextColor={'#1C1C1C'}></TextInput>
          <TextInput secureTextEntry={true} onChangeText={val => setSenha(val)} className="flex flex-row h-[40px] w-[300px] border-[1px] border-[#878a87] text-black mt-6 pl-4" placeholder="Senha" placeholderTextColor={'#1C1C1C'}></TextInput>
          <TouchableOpacity className="flex items-center justify-center h-[40px] w-[90px] bg-black mt-8" onPress={CheckAuth}>
            <Text className="text-[20px] font-[800] text-white"> Enviar </Text>
          </TouchableOpacity>
          {errorMsg ? (
            <Text className="flex items-center justify-center h-[70px] w-[150px] color-black">Email ou Senha Inválidos</Text>  
          ) : (
            null
          )}
      </View>
    </>
  );
};
*/

const LandingScreen = ({navigation}) => {

  let [fontsLoaded] = useFonts({ Comfortaa_700Bold, Comfortaa_600SemiBold, Comfortaa_500Medium, Comfortaa_400Regular, Comfortaa_300Light, 
  BaiJamjuree_200ExtraLight, BaiJamjuree_200ExtraLight_Italic, BaiJamjuree_300Light, BaiJamjuree_300Light_Italic, BaiJamjuree_400Regular, 
  BaiJamjuree_400Regular_Italic, BaiJamjuree_500Medium, BaiJamjuree_500Medium_Italic, BaiJamjuree_600SemiBold, BaiJamjuree_600SemiBold_Italic,
  BaiJamjuree_700Bold, BaiJamjuree_700Bold_Italic, NotoSansJP_100Thin, NotoSansJP_300Light, NotoSansJP_400Regular, NotoSansJP_500Medium,
  NotoSansJP_700Bold, NotoSansJP_900Black });


  return (
    <>
      <View className="flex flex-col items-center justify-center h-full w-full bg-[#FF4466] relative">
        <Image source={require("./assets/bg7.jpg")} resizeMode="cover"
        className="h-full w-full absolute"></Image>

        <Image source={require("./assets/Landing/stroke1.png")} resizeMode="cover"
        className="h-[80px] w-full"></Image>

        <Image source={require("./assets/Landing/stroke2.png")} resizeMode="cover"
        className="h-[80px] w-full"></Image>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} className="mt-36 h-[86px] w-[240px] rounded-[100px] drop-shadow-btn flex
        justify-center items-center bg-[#FF4466]">
          <Image source={require("./assets/Landing/stroke3.png")} resizeMode="cover">
          </Image>
        </TouchableOpacity>

      </View>
    </>
  );
};


const CadastroScreen = ({navigation}) => {

  let [fontsLoaded] = useFonts({ Comfortaa_700Bold, Comfortaa_600SemiBold, Comfortaa_500Medium, Comfortaa_400Regular, Comfortaa_300Light, 
  BaiJamjuree_200ExtraLight, BaiJamjuree_200ExtraLight_Italic, BaiJamjuree_300Light, BaiJamjuree_300Light_Italic, BaiJamjuree_400Regular, 
  BaiJamjuree_400Regular_Italic, BaiJamjuree_500Medium, BaiJamjuree_500Medium_Italic, BaiJamjuree_600SemiBold, BaiJamjuree_600SemiBold_Italic,
  BaiJamjuree_700Bold, BaiJamjuree_700Bold_Italic, NotoSansJP_100Thin, NotoSansJP_300Light, NotoSansJP_400Regular, NotoSansJP_500Medium,
  NotoSansJP_700Bold, NotoSansJP_900Black });


  const logIn = authStore((state) => state.logIn);

  const loginErrorMsg = create((set) => ({

    isShown: false,
    show: () => set((state) => ({ isShown: true })),

  }));

  const errorMsg = loginErrorMsg((state) => state.isShown);
  const showErrorMsg = loginErrorMsg((state) => state.show);

  const toggleAppLoading = appLoading((state) => state.toggleLoading);

  const [username,setUsername] = useState('');

  const cadastraUser = () => {
    toggleAppLoading();

    const setCookie = async () => {
      try {
        await AsyncStorage.setItem("username", username);
        toggleAppLoading();
        logIn();
      } catch(e) {
        
      }
    }

    setCookie();

  };

  return (
    <>
      <View className="flex flex-col items-center justify-center h-full w-full bg-[#FF4466] relative">
        <Image source={require("./assets/bg2.jpg")} resizeMode="cover"
        className="h-full w-full absolute"></Image>

        <Image source={require("./assets/Landing/stroke1.png")} resizeMode="cover"
        className="h-[80px] w-full"></Image>

        <Image source={require("./assets/Landing/stroke2.png")} resizeMode="cover"
        className="h-[80px] w-full mb-12"></Image>

        {errorMsg ? (
          <Text className="flex items-center justify-center h-[25px] w-[85%] font-forta4 text-center text-white">Email ou Senha Inválidos</Text>  
        ) : (
          <Text className="flex items-center justify-center h-[25px] w-[85%]"></Text>
        )}

        <View className="h-[60px] w-full relative">
          <Image source={require("./assets/Cadastro/stroke1.png")} resizeMode="contain"
          className="h-[60px] w-auto absolute left-0"></Image>
        </View>
        
        <TextInput
        className="h-[50px] w-[300px] text-[14px] bg-white border-[1px] pl-4 border-[#878a87] text-black font-jp5"
        onChangeText={val => setUsername(val)}
        placeholder="名前"
        placeholderTextColor={'#000000'}>
        </TextInput>

        

      
        <TouchableOpacity className="flex items-center justify-center h-[86px] w-[240px] rounded-[100px] bg-[#FF4466]
        drop-shadow-btn mt-6 mb-14" onPress={cadastraUser}>
          <Image source={require("./assets/Cadastro/stroke2.png")} resizeMode="contain"
          ></Image>
        </TouchableOpacity>

      </View>
    </>
  );
};



const HomeScreen = ({navigation}) => {

  let [fontsLoaded] = useFonts({ Comfortaa_700Bold, Comfortaa_600SemiBold, Comfortaa_500Medium, Comfortaa_400Regular, Comfortaa_300Light, 
  BaiJamjuree_200ExtraLight, BaiJamjuree_200ExtraLight_Italic, BaiJamjuree_300Light, BaiJamjuree_300Light_Italic, BaiJamjuree_400Regular, 
  BaiJamjuree_400Regular_Italic, BaiJamjuree_500Medium, BaiJamjuree_500Medium_Italic, BaiJamjuree_600SemiBold, BaiJamjuree_600SemiBold_Italic,
  BaiJamjuree_700Bold, BaiJamjuree_700Bold_Italic, NotoSansJP_100Thin, NotoSansJP_300Light, NotoSansJP_400Regular, NotoSansJP_500Medium,
  NotoSansJP_700Bold, NotoSansJP_900Black });

  const toggleAppLoading = appLoading((state) => state.toggleLoading);
  toggleAppLoading();
  

  return (
    <>
      <View className="flex flex-col items-center justify-center h-full w-full bg-[#FF4466] relative">
        <Image source={require("./assets/brazil_bg3.jpg")} resizeMode="cover"
        className="h-full w-full absolute"></Image>
      </View>
    </>
  );
}



export default function App() {

  // AUTH
  const AppAuthLogged = authStore((state) => state.isLogged);
  const logInUserAutomatically = authStore((state) => state.logIn);
  
  // LOADING
  const isAppLoading = appLoading((state) => state.isLoading);
  const toggleAppLoading = authStore((state) => state.toggleLoading);


  const getCookie = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
      if ( value !== null ) {
        logInUserAutomatically();
        toggleAppLoading();
      } else {
        toggleAppLoading();
      }
    } catch(e) {
      
    }
  }

  getCookie();


  return (
    <NavigationContainer>
      <Spinner visible={isAppLoading} overlayColor="rgba(0, 0, 0, 0.75)" size={'large'} animation="fade" />
      {!AppAuthLogged ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Landing" component={LandingScreen} options={{ animationTypeForReplace: 'push', }} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ animationTypeForReplace: 'push', }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ animationTypeForReplace: 'push', }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}


