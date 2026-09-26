import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
// Import từ thư viện safe-area-context
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; 
import Header from '../component/Header';
import BookCard from '../component/BookCard';
import Category from '../component/Category';
import BookGrid from '../component/BookGird';
function HomeScreen() {
  return (
<SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header/>
        <StatusBar style="auto" />
        <ScrollView>
          <Category/>
          <BookGrid />
          <BookCard 
            title="Lập trình React Native toàn tập từ cơ bản đến nâng cao (Tái bản 2026)"
            author="Tác giả Nguyễn Văn A"
            price="250.000 đ"
          />
          <BookCard 
            title="Hung"
            author='Hung'
            price='1000000'
          />
      </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', 
  },
});

export default HomeScreen