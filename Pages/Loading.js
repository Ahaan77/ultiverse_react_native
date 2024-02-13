import { View, ActivityIndicator, TouchableOpacity, Text } from "react-native"
import tw from 'twrnc'
import { useState } from "react"
import { useContext } from "react"
import AppContext from "../AppContext"
import { Video } from "expo-av"
import { video_url } from "../utils/asset_uris"


const Loading = () => {

    const [darkMode, setDarkMode] = useState(true)
    const { setLoading } = useContext(AppContext)

    return (
        <>
            <Video
                source={video_url}
                isLooping={true}
                style={tw`h-full w-full absolute h-full border `}
                shouldPlay={true}
                resizeMode="cover"

            />
            <View style={tw`h-full w-full justify-center bg-${darkMode ? "black" : "white"} bg-opacity-60`}>
                {/* <TouchableOpacity style={tw`absolute top-10 left-4`} activeOpacity={0.4} onPress={() => setLoading(false)} >
                <Text style={tw`text-white text-sm`}>Back</Text>
            </TouchableOpacity> */}
                <ActivityIndicator size="large" color="#FFFFFF" />
            </View >
        </>
    )

}



export default Loading