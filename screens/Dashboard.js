import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../assets/theme/index';
import Home from './Home';
import History from './History';
import Stats from './Stats';
import Profile from './Profile';
import Scan from './Scan';
import AboutScreen from './About';
import ProductsScreen from './PoductsScreen';
import {Text, View} from 'react-native';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const productsObj = [
  {
    name: 'Adidas Ultra Boost 2023',
    price: '$149.99',
    id: 'AB2023',
    quantitySold: 300,
    quantityAvailable: 75,
    imgSrc: require('../assets/images/nike-shoes/77.png'),
    description:
      'The Adidas Ultra Boost 2023 is designed for ultimate performance and comfort. It features a responsive Boost midsole, Primeknit upper for a snug fit, and stylish design.',
    brand: 'Adidas',
    category: 'Shoes',
    color: 'Grey/Black',
    material: 'Primeknit Upper, Boost Midsole',
    size: 'Available in various sizes',
  },
  {
    name: 'Puma Ignite XT',
    price: '$89.99',
    id: 'PIXT',
    quantitySold: 150,
    quantityAvailable: 25,
    imgSrc: require('../assets/images/nike-shoes/55.png'),
    description:
      'The Puma Ignite XT offers superior energy return and flexibility. It features Ignite Foam cushioning, breathable mesh upper, and a durable rubber outsole.',
    brand: 'Puma',
    category: 'Shoes',
    color: 'Blue/Silver',
    material: 'Mesh Upper, Ignite Foam Midsole',
    size: 'Available in various sizes',
  },
  {
    name: 'Puma Ignite XG',
    price: '$90.99',
    id: 'PIXTq',
    quantitySold: 150,
    quantityAvailable: 25,
    imgSrc: require('../assets/images/nike-shoes/66.png'),
    description:
      'The Puma Ignite XTG offers superior energy return and flexibility. It features Ignite Foam cushioning, breathable mesh upper, and a durable rubber outsole.',
    brand: 'Puma',
    category: 'Shoes',
    color: 'Silver/Black',
    material: 'Mesh Upper, Ignite Foam Midsole',
    size: 'Available in various sizes',
  },
  {
    name: 'Reebok Classic Leather',
    price: '$79.99',
    id: 'RCL',
    quantitySold: 400,
    quantityAvailable: 100,
    imgSrc: require('../assets/images/nike-shoes/88.png'),
    description:
      'The Reebok Classic Leather is a timeless casual shoe. It features a soft leather upper, EVA midsole for cushioning, and a clean, iconic design.',
    brand: 'Reebok',
    category: 'Shoes',
    color: 'White',
    material: 'Leather Upper, EVA Midsole',
    size: 'Available in various sizes',
  },
  {
    name: 'Under Armour HOVR Sonic 5',
    price: '$119.99',
    id: 'UAHS5',
    quantitySold: 200,
    quantityAvailable: 50,
    imgSrc: require('../assets/images/nike-shoes/55.png'),
    description:
      'The Under Armour HOVR Sonic 5 delivers a balance of cushioning and responsiveness. It features UA HOVR technology, breathable upper, and a secure lacing system.',
    brand: 'Under Armour',
    category: 'Shoes',
    color: 'Black/Red',
    material: 'Mesh Upper, HOVR Midsole',
    size: 'Available in various sizes',
  },
  {
    name: 'New Balance Fresh Foam 880v11',
    price: '$109.99',
    id: 'NBFF880',
    quantitySold: 280,
    quantityAvailable: 60,

    imgSrc: require('../assets/images/nike-shoes/66.png'),
    description:
      'The New Balance Fresh Foam 880v11 provides plush cushioning and a smooth ride. It features Fresh Foam midsole, engineered mesh upper, and a versatile design.',
    brand: 'New Balance',
    category: 'Shoes',
    color: 'Grey/Blue',
    material: 'Engineered Mesh Upper, Fresh Foam Midsole',
    size: 'Available in various sizes',
  },
  {
    name: 'Vans Old Skool',
    price: '$59.99',
    id: 'VOS',
    quantitySold: 320,
    quantityAvailable: 80,
    imgSrc: require('../assets/images/nike-shoes/55.png'),
    description:
      'The Vans Old Skool is a classic skateboarding shoe with iconic side stripe. It features a canvas and suede upper, padded collar, and signature waffle outsole.',
    brand: 'Vans',
    category: 'Shoes',
    color: 'Black/White',
    material: 'Canvas and Suede Upper, Rubber Sole',
    size: 'Available in various sizes',
  },
  {
    name: 'Nike Air Max 2023',
    price: '$169.99',
    id: 'NAM2023',
    quantitySold: 250,
    quantityAvailable: 60,
    imgSrc: require('../assets/images/nike-shoes/77.png'),
    description:
      'The Nike Air Max 2023 combines style and comfort. It features visible Air cushioning, breathable mesh upper, and sleek design.',
    brand: 'Nike',
    category: 'Shoes',
    color: 'Black/White',
    material: 'Mesh Upper, Air Cushioning',
    size: 'Available in various sizes',
  },
  {
    name: 'Converse Chuck Taylor All Star',
    price: '$49.99',
    id: 'CTAS',
    quantitySold: 180,
    quantityAvailable: 40,
    imgSrc: require('../assets/images/nike-shoes/66.png'),
    description:
      'The Converse Chuck Taylor All Star is an iconic sneaker. It features a canvas upper, rubber toe cap, and classic high-top design.',
    brand: 'Converse',
    category: 'Shoes',
    color: 'Red',
    material: 'Canvas Upper, Rubber Sole',
    size: 'Available in various sizes',
  },
  {
    name: 'Sony 4K Ultra HD Smart TV',
    price: '$899.99',
    id: 'SONYTV',
    quantitySold: 50,
    quantityAvailable: 10,
    imgSrc: require('../assets/images/nike-shoes/88.png'),
    description:
      'The Sony 4K Ultra HD Smart TV offers stunning visuals and smart features. It features 4K resolution, HDR support, and access to streaming apps.',
    brand: 'Sony',
    category: 'Electronics',
    color: 'Black',
    material: 'LED Display',
    size: '55-inch',
  },
  {
    name: 'Apple iPhone 13 Pro',
    price: '$1099.99',
    id: 'IP13PRO',
    quantitySold: 120,
    quantityAvailable: 20,
    imgSrc: require('../assets/images/nike-shoes/66.png'),
    description:
      'The Apple iPhone 13 Pro is a powerful smartphone. It features a Super Retina XDR display, A15 Bionic chip, and advanced camera system.',
    brand: 'Apple',
    category: 'Electronics',
    color: 'Graphite',
    material: 'Glass and Stainless Steel',
    size: '256GB',
  },
  {
    name: 'Samsung Front Load Washer',
    price: '$599.99',
    id: 'SFLW',
    quantitySold: 80,
    quantityAvailable: 15,
    imgSrc: require('../assets/images/nike-shoes/88.png'),
    description:
      'The Samsung Front Load Washer offers efficient laundry cleaning. It features a large capacity, multiple wash cycles, and energy-saving technology.',
    brand: 'Samsung',
    category: 'Appliances',
    color: 'White',
    material: 'Metal and Plastic',
    size: '4.5 cu. ft.',
  },
  {
    name: 'Organic Fresh Apples',
    price: '$2.99/lb',
    id: 'APPLES',
    quantitySold: 400,
    quantityAvailable: 100,
    imgSrc: require('../assets/images/nike-shoes/3.png'),
    description:
      'Organic Fresh Apples are a healthy snack option. They are grown without synthetic pesticides and offer a crisp and juicy taste.',
    brand: 'Organic Farms',
    category: 'Groceries',
    color: 'Red and Green',
    material: 'Fruit',
    size: 'Per pound',
  },
  {
    name: 'HP Envy x360 Laptop',
    price: '$799.99',
    id: 'HPENVY',
    quantitySold: 90,
    imgSrc: require('../assets/images/nike-shoes/55.png'),
    quantityAvailable: 25,
    description:
      'The HP Envy x360 Laptop is a versatile 2-in-1 device. It features a powerful AMD Ryzen processor, touch screen display, and sleek design.',
    brand: 'HP',
    category: 'Electronics',
    color: 'Silver',
    material: 'Metal and Plastic',
    size: '13.3-inch',
  },
  {
    name: 'KitchenAid Stand Mixer',
    price: '$299.99',
    id: 'KASM',
    quantitySold: 60,
    quantityAvailable: 10,
    imgSrc: require('../assets/images/nike-shoes/66.png'),
    description:
      'The KitchenAid Stand Mixer is a must-have for baking enthusiasts. It features multiple attachments, powerful motor, and timeless design.',
    brand: 'KitchenAid',
    category: 'Appliances',
    color: 'Empire Red',
    material: 'Metal',
    size: '5-quart',
  },
];

const CustomDrawerContent = ({navigation}) => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Saif ur Rehman</Text>
        <Text style={styles.profileRole}>Admin</Text>
      </View>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('About')}>
        <Ionicons
          name="information-circle"
          size={20}
          color={COLORS.primary}
          style={styles.drawerIcon}
        />
        <Text style={styles.drawerText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Products')}>
        <Ionicons
          name="cube"
          size={20}
          color={COLORS.primary}
          style={styles.drawerIcon}
        />
        <Text style={styles.drawerText}>Products</Text>
      </TouchableOpacity>
      {/* Add more navigation items here */}
    </View>
  );
};

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 60,
    background: '#fff',
  },
};
const Dashboard = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Ionic
                    name={focused ? 'home' : 'home-outline'}
                    size={24}
                    color={focused ? COLORS.primary : '#111'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Ionic
                    name={focused ? 'list' : 'list-outline'}
                    size={24}
                    color={focused ? COLORS.primary : '#111'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Scan"
          component={Scan}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.primary,
                    width: Platform.OS == 'ios' ? 50 : 60,
                    height: Platform.OS == 'ios' ? 50 : 60,
                    top: Platform.OS == 'ios' ? -10 : -20,
                    borderRadius: Platform.OS == 'ios' ? 25 : 30,
                  }}>
                  <Ionic
                    name={focused ? 'scan-circle' : 'scan-circle-outline'}
                    size={24}
                    color={'#fff'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Ionic
                    name={focused ? 'stats-chart' : 'stats-chart-outline'}
                    size={24}
                    color={focused ? COLORS.primary : '#111'}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Ionic
                    name={focused ? 'person' : 'person-outline'}
                    size={24}
                    color={focused ? COLORS.primary : '#111'}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Dashboard;
