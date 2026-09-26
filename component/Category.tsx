import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Mảng chứa danh sách các danh mục
const CATEGORIES = [
  'Văn học',
  'Kinh tế',
  'Thiếu nhi',
  'Truyện tranh',
  'Ngoại ngữ',
  'Lịch sử'
];

const Category = () => {
  return (
    <View style={styles.container}>
      {/* Sử dụng map để duyệt qua mảng và render ra từng chip */}
      {CATEGORIES.map((category, index) => (
        <View key={index} style={styles.chip}>
          <Text style={styles.chipText}>{category}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Sắp xếp các chip theo chiều ngang
    flexWrap: 'wrap',     // Tự động xuống dòng khi tràn màn hình (YÊU CẦU QUAN TRỌNG)
    gap: 8,               // Khoảng cách giữa các chip là 8px
    paddingHorizontal: 16,
    marginTop: 16,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: '#8A9AEC', // Màu xanh lam nhạt giống thiết kế
    borderRadius: 24,       // Bo góc tròn trịa tạo hình viên thuốc (pill)
    backgroundColor: '#FFFFFF',
    // Căn giữa text bên trong chip
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipText: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  }
});

export default Category;