import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../assets/theme/index';
// ... (previous code)
const AboutScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 40,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/images/logo/1.png')}
          style={{width: 100, height: 100}}
        />
        <Text
          style={{
            color: COLORS.primary,
            fontWeight: 'bold',
            fontSize: 28,
            marginLeft: 10,
          }}>
          ZAIF
        </Text>
      </View>

      <Text
        style={{
          color: COLORS.primary,
          textAlign: 'center',
          marginTop: 20,
          fontSize: 13,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
        tristique felis, at fermentum ligula cursus id. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nullam auctor tristique felis, at
        fermentum ligula cursus id. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam auctor tristique felis, at fermentum ligula
        cursus id.
      </Text>

      <View style={{flexDirection: 'column', marginTop: 20}}>
        <View
          style={{
            backgroundColor: '#DEF9FB',
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
          }}>
          <Text style={{color: COLORS.primary}}>Version 1.0.0.0</Text>
        </View>
        <View
          style={{backgroundColor: '#DEF9FB', padding: 10, borderRadius: 10}}>
          <TouchableOpacity>
            <Text style={{color: COLORS.primary}}>Advertise with us</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          color: COLORS.primary,
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 40,
          textAlign: 'left',
        }}>
        Connect with us
      </Text>

      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#DEF9FB',
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
          }}>
          <Ionicons name="mail-outline" size={30} color={COLORS.primary} />
          <Text style={{color: COLORS.primary, marginLeft: 10}}>
            Contact us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#DEF9FB',
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
          }}>
          <Ionicons name="logo-facebook" size={30} color={COLORS.primary} />
          <Text style={{color: COLORS.primary, marginLeft: 10}}>
            Join us on Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#DEF9FB',
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
          }}>
          <Ionicons name="logo-instagram" size={30} color={COLORS.primary} />
          <Text style={{color: COLORS.primary, marginLeft: 10}}>
            Join us on Instagram
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#DEF9FB',
            padding: 10,
            borderRadius: 10,
          }}>
          <Ionicons name="logo-youtube" size={30} color={COLORS.primary} />
          <Text style={{color: COLORS.primary, marginLeft: 10}}>
            Subscribe on YouTube
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#DEF9FB',
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}>
        <Ionicons
          name={Platform.OS === 'ios' ? 'logo-apple' : 'logo-google-playstore'}
          size={30}
          color={COLORS.primary}
        />
        <Text style={{color: COLORS.primary, marginLeft: 10}}>
          Rate us on {Platform.OS === 'ios' ? 'App Store' : 'Play Store'}
        </Text>
      </View>
    </View>
  );
};

export default AboutScreen;
