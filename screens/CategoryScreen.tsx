import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đây là trang sản phẩm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' }
});

export default CategoryScreen;