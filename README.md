import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const  App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topIconsContainer}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        <MaterialCommunityIcons name="bell" size={24} color="black" />
      </View>

      <Image source={require('./src/assets/ID2.jpg')} style={styles.profileImage} />


      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.role}>React Native Developer</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>30</Text>
          <Text style={styles.statLabel}>Apps</Text>
          <Text style={styles.statSubLabel}>Deployed</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>20</Text>
          <Text style={styles.statLabel}>Clients</Text>
          <Text style={styles.statSubLabel}>Satisfied</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10</Text>
          <Text style={styles.statLabel}>Experience</Text>
          <Text style={styles.statSubLabel}>Years</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="account-edit" size={20} color="white" />
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="bell" size={20} color="white" />
        <Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="account-cog" size={20} color="white" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <View style={styles.newsletterContainer}>
        <TextInput 
          placeholder="Enter email for newsletter" 
          style={styles.input} 
          placeholderTextColor="#999"
        />
        
      </View>

      <TouchableOpacity style={styles.subscribeButton}>
          <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
          <Text style={styles.subscribeText}>Subscribe</Text>
        </TouchableOpacity>

      <Text style={styles.versionText}>Version 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  topIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#333',
  },
  statSubLabel: {
    fontSize: 12,
    color: '#999',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6c63ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 10,
  },
  newsletterContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  subscribeButton: {
    flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'purple',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'purple',
      marginTop:20,
      
  },subscribeText:{
    fontSize:10,
    color:'white',
    
  },
  versionText: {
    fontSize: 12,
    color: '#999',
    marginTop: 20,
  },
});

export default App;
