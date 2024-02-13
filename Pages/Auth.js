import { View, Button, StyleSheet, Text, Switch, Image, TouchableOpacity, SafeAreaView, TextInput, Keyboard, Platform } from "react-native"
import tw from 'twrnc'
import { useState, useEffect } from "react"
import { useContext } from "react"
import AppContext from "../AppContext"
import socials from "../utils/socials"
import { Video } from 'expo-av';
import { useNavigation } from "@react-navigation/native"
import { video_url, logo } from "../utils/asset_uris"


const Auth = () => {

    const [darkMode, setDarkMode] = useState(true)
    const [username, onChangeUsername] = useState("")
    const [password, onChangePassword] = useState("")
    const [keyboardShown, setKeyboardShown] = useState(false)
    const { setLoading } = useContext(AppContext)
    const navigation = useNavigation()

    const toggleSwitch = () => setDarkMode(previousState => !previousState);

    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
    });

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            console.log("Keyboard shown")
            setKeyboardShown(true)
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardShown(false)
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);


    return (
        <>
            <Video
                source={video_url}
                isLooping={true}
                style={tw`h-full w-full absolute h-full border `}
                shouldPlay={true}
                resizeMode="cover"

            />
            <View style={tw`h-[100%] w-[100%] justify-center bg-${darkMode ? "black" : "white"} bg-opacity-60 `}>
                {/* <Switch
                trackColor={{ false: '#767577', true: '#767577' }}
                thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={darkMode}
                style={tw`absolute top-4 right-4`}
            /> */}

                <Image style={tw`h-40 w-full absolute top-10`} source={logo} />
                <SafeAreaView style={tw`flex justify-center items-center gap-5 ${keyboardShown && Platform.OS === "android" ? "mt-52" : "mt-0"}`}>
                    <TextInput
                        style={tw`text-white border-b border-white w-[80%] h-12 px-4 py-2`}
                        onChangeText={onChangeUsername}
                        placeholder="Username"
                        value={username}
                        placeholderTextColor={"#FFFFFF"}
                    />
                    <TextInput
                        style={tw`text-white border-b border-white w-[80%] h-12 px-4 py-2 `}
                        secureTextEntry={true}
                        onChangeText={onChangePassword}
                        placeholder="Password"
                        placeholderTextColor={"#FFFFFF"}
                        value={password}
                    />
                </SafeAreaView>

                <View style={tw` w-full flex justify-center items-center mt-10`} >
                    <TouchableOpacity activeOpacity={0.4} onPress={() =>
                        navigation?.navigate('Loading')
                    } style={tw` h-10 w-1/4 bg-transparent border border-white flex justify-center items-center`}>
                        <Text style={tw`text-white `}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={tw`flex justify-center items-center mt-10`}>
                    <View style={tw` flex flex-row gap-4 items-center`}>
                        {
                            socials?.map((item, id) => {
                                return (
                                    <TouchableOpacity key={id} style={tw`rounded-full h-10 w-10 bg-gray-100 flex justify-center items-center`} activeOpacity={0.4}>
                                        <Image source={item?.img_src} style={tw`h-${id == 2 ? "10" : id == 0 ? "7" : "6"} w-${id == 2 ? "10" : id == 0 ? "7" : '6'}`} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </View >
        </>
    )

}



export default Auth