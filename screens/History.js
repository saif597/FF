import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import {COLORS} from '../assets/theme/index';
const transactions = [
  {
    name: 'John Doe',
    cashier: 'Alice',
    timestamp: '2023-08-26',
    items: [
      {name: 'Item 1', quantity: 2},
      {name: 'Item 2', quantity: 1},
    ],
  },
  {
    name: 'Jane Smith',
    cashier: 'Bob',
    timestamp: '2023-08-25',
    items: [
      {name: 'Item 3', quantity: 3},
      {name: 'Item 4', quantity: 1},
    ],
  },
  {
    name: 'Michael Johnson',
    cashier: 'Eve',
    timestamp: '2023-08-24',
    items: [
      {name: 'Item 5', quantity: 1},
      {name: 'Item 6', quantity: 2},
    ],
  },
  // Add more transactions
  {
    name: 'Emily Brown',
    cashier: 'David',
    timestamp: '2023-08-23',
    items: [
      {name: 'Item 7', quantity: 1},
      {name: 'Item 8', quantity: 1},
    ],
  },
  {
    name: 'William Anderson',
    cashier: 'Eve',
    timestamp: '2023-08-22',
    items: [
      {name: 'Item 9', quantity: 3},
      {name: 'Item 10', quantity: 1},
    ],
  },
  {
    name: 'Olivia Garcia',
    cashier: 'Frank',
    timestamp: '2023-08-21',
    items: [
      {name: 'Item 11', quantity: 1},
      {name: 'Item 12', quantity: 2},
    ],
  },
  {
    name: 'James Wilson',
    cashier: 'Grace',
    timestamp: '2023-08-20',
    items: [
      {name: 'Item 13', quantity: 1},
      {name: 'Item 14', quantity: 1},
    ],
  },
  {
    name: 'Sophia Taylor',
    cashier: 'Hank',
    timestamp: '2023-08-19',
    items: [
      {name: 'Item 15', quantity: 2},
      {name: 'Item 16', quantity: 1},
    ],
  },
  {
    name: 'Benjamin Lewis',
    cashier: 'Ivy',
    timestamp: '2023-08-18',
    items: [
      {name: 'Item 17', quantity: 1},
      {name: 'Item 18', quantity: 2},
    ],
  },
  {
    name: 'Isabella Adams',
    cashier: 'Jack',
    timestamp: '2023-08-17',
    items: [
      {name: 'Item 19', quantity: 3},
      {name: 'Item 20', quantity: 1},
    ],
  },
  // Continue adding more transactions...
];

const History = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const handleSearch = text => {
    const filtered = transactions.filter(
      transaction =>
        transaction.name.toLowerCase().includes(text.toLowerCase()) ||
        transaction.cashier.toLowerCase().includes(text.toLowerCase()) ||
        transaction.timestamp.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredTransactions(filtered);
    setSearchQuery(text);
  };

  const toggleDetails = index => {
    const updatedTransactions = [...filteredTransactions];
    updatedTransactions[index].showDetails =
      !updatedTransactions[index].showDetails;
    setFilteredTransactions(updatedTransactions);
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        elevation: 2,
      }}
      onPress={() => toggleDetails(index)}>
      <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
        Purchaser: {item.name}
      </Text>
      <Text style={{color: COLORS.primary}}>Cashier: {item.cashier}</Text>
      <Text style={{color: COLORS.primary}}>Timestamp: {item.timestamp}</Text>
      {/* Render the lower part of the card */}
      {item.showDetails && (
        <FlatList
          data={item.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: COLORS.primary}}>{item.name}</Text>
              <Text style={{color: COLORS.primary}}>
                Quantity: {item.quantity}
              </Text>
            </View>
          )}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, padding: 20}}>
      <FlatList
        data={filteredTransactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        refreshing={false} // Add this line
        onRefresh={() => setFilteredTransactions(transactions)}
      />
    </ScrollView>
  );
};

export default History;
