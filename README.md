// ProfileInfo.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NameTitle = () => {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={require('../../assets/ID2.jpg')}  // Placeholder image
        style={styles.avatar}
      />
      <Text style={styles.name}>Lordweil E. Abalde</Text>
      <Text style={styles.role}>React Native Developer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  role: {
    fontSize: 14,
    color: 'gray',
  },
});

export default NameTitle;



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stat = ({ number, label }) => {
  return (
    <View style={styles.stat}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const Stats = () => {
  return (
    <View style={styles.statsContainer}>
      <Stat number="30" label="Apps" />
      <Stat number="20" label="Clients" />
      <Stat number="10" label="Experience" />
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Stats;


// ButtonComponent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PurpleButton = ({ title, iconName }) => (
  <TouchableOpacity style={styles.button}>
    <Icon name={iconName} size={20} color="#FFF" style={styles.icon} />
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Button = () => (
  <View style={styles.container}>
    <PurpleButton title="Edit Profile" iconName="user" />
    <PurpleButton title="Notification" iconName="bell" />
    <PurpleButton title="Settings" iconName="cog" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
    justifyContent: 'center',
    marginVertical: 3,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  icon: {
    marginRight: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Button;



// Subscribe.js
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Subscribe = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter email for newsletter"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button}>
        <Icon name="paper-plane" size={16} color="purple" style={styles.icon} />
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'purple',
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'purple',
    fontSize: 16,
  },
});

export default Subscribe;


