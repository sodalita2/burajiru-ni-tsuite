import { Text, View, TextInput } from 'react-native';

const LoginScreen = () => {

    return (
        <View className="flex items-center justify-center h-full w-full bg-black">
            <Text>Login</Text>
            <TextInput className="h-[40px] w-[200px] bg-black text-white"></TextInput>
        </View>
    );
};

export default LoginScreen;