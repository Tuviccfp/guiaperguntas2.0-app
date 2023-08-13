import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ThemeSwitcher from "./Theme/ThemeSwitcher";

const Stack = createNativeStackNavigator();

export default function Settings() {
    return (
        <Stack.Navigator>
         <Stack.Screen name="Theme" component={ThemeSwitcher}/>   
        </Stack.Navigator>
    )
}