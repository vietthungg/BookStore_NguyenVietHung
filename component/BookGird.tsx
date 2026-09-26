import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Bổ sung thêm thuộc tính 'image' cho mỗi cuốn sách
const MOCK_BOOKS = [
  { 
    id: '1', 
    title: 'Sách Văn Học Lãng Mạn', 
    price: '150.000 đ',
    // Sử dụng ảnh local của bạn có sẵn trong thư mục
    image: require('../img/book1.png') 
  },
  { 
    id: '2', 
    title: 'Sách Kinh Tế Vĩ Mô', 
    price: '220.000 đ',
    
    image:require('../img/book2.png') 
  },
  { 
    id: '3', 
    title: 'Kỹ Năng Giao Tiếp (Tái bản)', 
    price: '95.000 đ',
    image: require('../img/book3.png') 
  },
  { 
    id: '4', 
    title: 'Truyện Tranh Manga Tập 1', 
    price: '45.000 đ',
    image: require('../img/book4.png') 
  },
];

const BookGrid = () => {
  return (
    <View style={styles.gridContainer}>
      {MOCK_BOOKS.map((book) => (
        <View key={book.id} style={styles.gridItem}>
          {/* Cập nhật thẻ Image: Gọi đường dẫn từ book.image và thêm style */}
          <Image 
            source={book.image} 
            style={styles.coverImage} 
            resizeMode="cover"
          />
          
          <View style={styles.infoBox}>
            <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
            <Text style={styles.price}>{book.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  gridItem: {
    width: '48%',
    marginBottom: 20,
  },
  // Thêm style cho ảnh để giới hạn kích thước theo đúng tỷ lệ 3/4
  coverImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 8,
    backgroundColor: '#e0e0e0', // Màu nền hiển thị tạm trong lúc chờ tải ảnh mạng
  },
  infoBox: {
    marginTop: 8,
  },
  title: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#e53935',
    fontWeight: 'bold',
  },
});

export default BookGrid;