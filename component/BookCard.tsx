import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Khai báo kiểu dữ liệu cho props truyền vào Thẻ sách
interface BookCardProps {
  title: string;
  author: string;
  price: string;
  imageUrl?: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, price, imageUrl }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Ảnh bìa bên trái */}
      <View style={styles.coverWrapper}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.coverImage} />
        ) : (
          <View style={[styles.coverImage, styles.placeholderImage]}>
             <Text style={styles.placeholderText}>Ảnh bìa</Text>
          </View>
        )}
      </View>

      {/* Cột thông tin bên phải */}
      <View style={styles.infoColumn}>
        <View>
          {/* Xử lý tên sách dài làm lệch layout bằng numberOfLines */}
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.author}>{author}</Text>
        </View>
        
        {/* Giá tiền được đẩy xuống dưới cùng nhờ space-between ở infoColumn */}
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Căn các item lên sát đỉnh (so sánh với center thì flex-start hợp lý hơn cho thẻ sách)
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
 
  },
  coverWrapper: {
    marginRight: 12,
  },
  coverImage: {
    width: 80,
    height: 110, // Kích thước cố định
    borderRadius: 6,
  },
  placeholderImage: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#757575',
    fontSize: 12,
  },
  infoColumn: {
    flex: 1, // Chiếm phần không gian còn lại
    flexDirection: 'column',
    height: 110, // Giới hạn chiều cao bằng ảnh bìa để space-between hoạt động
    justifyContent: 'space-between', 
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 22,
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e53935', // Màu đỏ cho giá tiền
  },
});

export default BookCard;