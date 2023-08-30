import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {COLORS} from '../assets/theme/index';
import {Picker} from '@react-native-picker/picker';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('Saif ur Rehman');
  const [age, setAge] = useState('25');
  const [role, setRole] = useState('Admin');
  const [cnic, setCnic] = useState('12345-6789012-3');
  const [contact, setContact] = useState('123-4567890');
  const [username, setUsername] = useState('saif123');
  const [password, setPassword] = useState('password123');
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [email, setEmail] = useState('saif@example.com');
  const [gender, setGender] = useState('Male');
  const [rank, setRank] = useState('Senior');

  const toggleEdit = () => {
    if (editing) {
      // Save changes
      setEditing(false);
    } else {
      // Enable editing
      setEditing(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* Upper View */}
      <View style={styles.upperView}>
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>

      {/* Lower View */}
      <View style={styles.lowerView}>
        <View style={styles.fieldRow}>
          <View style={styles.field}>
            <Text style={styles.label}>Name</Text>
            {editing ? (
              <TextInput
                value={name}
                onChangeText={setName}
                style={styles.input}
              />
            ) : (
              <Text style={styles.value}>{name}</Text>
            )}
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Age</Text>
            {editing ? (
              <TextInput
                value={age}
                onChangeText={setAge}
                keyboardType="number-pad"
                style={styles.input}
              />
            ) : (
              <Text style={styles.value}>{age}</Text>
            )}
          </View>
        </View>
        <View style={styles.fieldRow}>
          <View style={styles.field}>
            <Text style={styles.label}>Role</Text>
            {editing ? (
              <TextInput
                value={role}
                onChangeText={setRole}
                style={styles.input}
              />
            ) : (
              <Text style={styles.value}>{role}</Text>
            )}
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>CNIC</Text>
            {editing ? (
              <TextInput
                value={cnic}
                onChangeText={setCnic}
                style={styles.input}
              />
            ) : (
              <Text style={styles.value}>{cnic}</Text>
            )}
          </View>
        </View>
        <View style={styles.fieldRow}>
          <View style={styles.field}>
            <Text style={styles.label}>Contact</Text>
            {editing ? (
              <TextInput
                value={contact}
                onChangeText={setContact}
                style={styles.input}
              />
            ) : (
              <Text style={styles.value}>{contact}</Text>
            )}
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Username</Text>
            {editing ? (
              <TextInput
                value={username}
                onChangeText={setUsername}
                style={styles.input}
              />
            ) : (
              <Text style={styles.value}>{username}</Text>
            )}
          </View>
        </View>

        <View style={styles.fieldRow}>
          <View style={styles.field}>
            <Text style={styles.label}>Blood Group</Text>
            {editing ? (
              <TextInput
                value={bloodGroup}
                onChangeText={setBloodGroup}
                style={styles.input}
              />
            ) : (
              <Text style={styles.value}>{bloodGroup}</Text>
            )}
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            {editing ? (
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />
            ) : (
              <Text style={styles.value}>{email}</Text>
            )}
          </View>
        </View>
        <View style={styles.fieldRow}>
          <View style={styles.field}>
            <Text style={styles.label}>Gender</Text>
            {editing ? (
              <TextInput
                value={gender}
                onChangeText={setGender}
                style={styles.input}
              />
            ) : (
              <Text style={styles.value}>{gender}</Text>
            )}
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Rank</Text>
            {editing ? (
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={rank}
                  onValueChange={setRank}
                  style={styles.picker}>
                  <Picker.Item label="Senior" value="Senior" />
                  <Picker.Item label="Junior" value="Junior" />
                  <Picker.Item label="Internee" value="Internee" />
                  <Picker.Item label="New Recruit" value="New Recruit" />
                </Picker>
                <Text style={styles.dropdownIndicator}>▼</Text>
              </View>
            ) : (
              <Text style={styles.value}>{rank}</Text>
            )}
          </View>
        </View>
        <View style={styles.fieldRow}>
          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            {editing ? (
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
              />
            ) : (
              <Text style={styles.value}>{password}</Text>
            )}
          </View>
        </View>
        {role === 'Admin' && (
          <TouchableOpacity style={styles.editButton} onPress={toggleEdit}>
            <Text style={styles.buttonText}>{editing ? 'Save' : 'Edit'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  upperView: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  lowerView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  role: {
    fontSize: 14,
    color: COLORS.secondary,
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  field: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    color: COLORS.primary,
  },
  value: {
    fontSize: 14,
    color: 'darkgray',
  },
  input: {
    fontSize: 14,
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  picker: {
    flex: 1,
    height: 30,
    color: 'black',
    fontSize: 14,
    padding: 0,
    margin: 0,
  },
  dropdownIndicator: {
    fontSize: 16,
    color: COLORS.primary,
  },
  editButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Profile;
