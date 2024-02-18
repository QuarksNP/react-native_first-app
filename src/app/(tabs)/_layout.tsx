import { Foundation, MaterialCommunityIcons, Octicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerStyle: { backgroundColor: "#141414" }, tabBarShowLabel: false, tabBarStyle: { backgroundColor: "#141414" }, headerTitleStyle: { color: "white" } }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <Foundation name="home" size={24} color="white" /> }} />
      <Tabs.Screen name="calculator" options={{ title: "Calculator", tabBarIcon: () => <MaterialCommunityIcons name="numeric" size={24} color="white" /> }} />
      <Tabs.Screen name="n-translate" options={{ title: "Number Translate", tabBarIcon: () => <MaterialIcons name="translate" size={24} color="white" /> }} />
      <Tabs.Screen name="table" options={{ title: "Table", tabBarIcon: () => <FontAwesome5 name="table" size={24} color="white" /> }} />
      <Tabs.Screen name="opinion" options={{ title: "Personal Opinion", tabBarIcon: () => <Octicons name="pencil" size={24} color="white" /> }} />
    </Tabs>
  );
}
