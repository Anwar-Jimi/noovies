import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import {useColorScheme} from 'react-native';
import { YELLOW_COLOR, BLACK_COLOR, DARK_GREY, LIGHT_GREY } from '../colors';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? DARK_GREY : LIGHT_GREY,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        headerTitleStyle: {
          color: isDark ? YELLOW_COLOR : BLACK_COLOR,
        }
      }}>
        <Tab.Screen name="Movies"
                    component={Movies}
                    options={{
                      tabBarIcon: ({color, size}) => {
                        return <Ionicons name="film-outline" color={color} size={size} />
                      }
                    }}  />
        <Tab.Screen name="Tv"
                    component={Tv}
                    options={{
                      tabBarIcon: ({color, size}) => {
                        return <Ionicons name="tv-outline" color={color} size={size} />
                      }
                    }}  />
        <Tab.Screen name="Search"
                    component={Search}
                    options={{
                      tabBarIcon: ({color, size}) => {
                        return <Ionicons name="search-outline" color={color} size={size} />
                      }
                    }}  />
    </Tab.Navigator>
  )
}

export default Tabs;