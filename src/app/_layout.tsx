import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown: false, // Hidden because the Stack inside will have its own header
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="clock"
        options={{
          title: "Live Clock",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="clock" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}