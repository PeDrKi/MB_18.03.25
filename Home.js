import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


// Dữ liệu mẫu
const categories = [
  { id: '1', name: 'Pizza', image: require('./assets/pizza.jpg') },
  { id: '2', name: 'Burgers', image: require('./assets/burger.jpg') },
  { id: '3', name: 'Steak', image: require('./assets/steak.jpg') },
  { id: '4', name: 'Fries', image: require('./assets/khoaitay.jpg') },
];

const popularItems = [
  { id: '1', name: 'Food 1', price: '1$', image: require('./assets/vietnam.jpg') },
  { id: '2', name: 'Food 2', price: '3$', image: require('./assets/chauau.jpg') },
  { id: '3', name: 'Food 3', price: '9$', image: require('./assets/ando.jpg') },
];

const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search for meals or area" />

      <Text style={styles.sectionTitle}>Top Categories</Text>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.sectionTitle}>Popular Items</Text>
      <FlatList
        data={popularItems}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Image source={item.image} style={styles.foodImage} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.sectionTitle}>Popular Items</Text>
      <FlatList
        data={popularItems}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Image source={item.image} style={styles.foodImage} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Account</Text>
      </View>
      <View style={styles.header} />

      <View style={styles.content}>
        <Image style={{height:150,width:150,borderRadius:40,}}
        source={require("./assets/PDK.jpg")}/>
        <Text style={styles.username}>Pham Dang Khue</Text>
        <Text style={styles.role}>Game developer</Text>
        <Text style={styles.description}>
          I have above 1 month of experience in native mobile apps development, now I am learning React Native
        </Text>

        <TouchableOpacity
  style={styles.signOutButton}
  onPress={() => navigation.navigate('Home')} // Đưa về màn hình đăng nhập
>
  <Text style={styles.signOutText}>Sign Out</Text>
</TouchableOpacity>

      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === 'Explorer' ? 'compass-outline' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Explorer" component={ExplorerScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop : 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  foodItem: {
    backgroundColor: '#F8F8F8',
    width: 150,
    height: 150,
    padding: 20,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  foodImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  accountContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    paddingTop: 40,
    paddingBottom: 10,
    paddingLeft: 20,
    backgroundColor: '#FFF',
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: 120,
    backgroundColor: 'skyblue',
  },
  content: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  signOutButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
