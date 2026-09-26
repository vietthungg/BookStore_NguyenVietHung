import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Import các màn hình
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import { View, Text } from 'react-native';

// Khởi tạo Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              // Ẩn header mặc định của React Navigation vì chúng ta đã tự làm custom Header
              headerShown: false, 
              
              // Cấu hình Icon động dựa vào tên Route
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: keyof typeof Ionicons.glyphMap = 'home';

                if (route.name === 'Trang chủ') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Danh mục') {
                  iconName = focused ? 'grid' : 'grid-outline';
                } else if (route.name === 'Giỏ hàng') {
                  iconName = focused ? 'cart' : 'cart-outline';
                } else if (route.name === 'Tài khoản') {
                  iconName = focused ? 'person' : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              // Màu sắc khi active và inactive
              tabBarActiveTintColor: 'navy',
              tabBarInactiveTintColor: '#8e8e93',
              // Style cho khung Tab Bar
              tabBarStyle: {
                backgroundColor: '#ffffff',
                borderTopWidth: 1,
                borderTopColor: '#e0e0e0',
                height: 70,
                paddingBottom: 8,
                paddingTop: 8,
              },
            })}
          >
            {/* Khai báo các tab và liên kết với Screen tương ứng */}
            <Tab.Screen name="Trang chủ" component={HomeScreen} />
            <Tab.Screen name="Danh mục" component={ProfileScreen} />
            <Tab.Screen name="Giỏ hàng" component={CartScreen} />
            <Tab.Screen name="Tài khoản" component={CategoryScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}