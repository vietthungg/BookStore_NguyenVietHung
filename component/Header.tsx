import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoBox}>
        <Image 
            source={require('../img/logo.png')} 
            style={styles.logoImage}
            resizeMode="cover" 
            />
      </View>

      {/* Khối bên phải: Chứa 2 icon Tìm kiếm và Giỏ hàng */}
      <View style={styles.rightActions}>
        <TouchableOpacity style={styles.iconPlaceholder}>

          <AntDesign name="search" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconPlaceholder}>
         
            <Entypo name="shopping-cart" size={24} color="black" />
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    height: 56, // Chiều cao cố định theo yêu cầu
    backgroundColor: 'navy', // Màu nền navy/indigo
  },
  logoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  rightActions: {
    flexDirection: 'row',
    gap: 16, // Tạo khoảng cách giữa 2 icon bên phải (có thể dùng marginLeft nếu RN version cũ)
  },
  iconPlaceholder: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  logoImage: {
  width: 100, 
  height: 56, 
  },

});

export default Header;