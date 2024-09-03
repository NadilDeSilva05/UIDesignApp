import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { LineChart } from 'react-native-chart-kit';

const Dashboard = () => {
  const [selectedIcon, setSelectedIcon] = useState('home');
  const screenWidth = Dimensions.get('window').width;

  const icons = [
    { name: 'menu', label: 'Menu' },
    { name: 'home', label: 'Home' },
    { name: 'file-text', label: 'Documents' },
    { name: 'users', label: 'Users' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {/* Header Section */}
        <View style={[styles.header, styles.shadow]}>
          <Text style={styles.headerText}>iPass</Text>
          <Icon name="bell" type="feather" color="#fff" size={20} marginTop={25}marginRight={10} />
        </View>

        {/* Location Dropdown */}
        <View style={[styles.locationContainer, styles.shadow]}>
          <Icon name="map-pin" type="feather" color="blue" size={16} />
          <Text style={styles.locationText}> Badulla Fitness</Text>
          <Icon name="chevron-down" type="feather" color="blue" size={16} />
        </View>

        {/* Clients Info */}
        <Text style={styles.clientsText}>20 clients now staying inside the gym</Text>

        {/* Active Clients and Stats */}
        <View style={[styles.statsContainer, styles.shadow]}>
          <View style={styles.activeClients}>
            <Text style={styles.activeClientsText}>Active Clients</Text>
            <Text style={styles.activeClientsNumbers}>81 / 200</Text>
            <Icon name="users" type="feather" color="blue" size={24} marginRight={20} />
          </View>
        </View>

        <View style={styles.infoCards}>
          <View style={[styles.infoCard, styles.shadow]}>
            <Text style={styles.infoCardText}>Payment Overdue</Text>
            <View style={[styles.row]}>
              <Icon name="alert-circle" type="feather" color="#FF0000" size={24} marginTop={5} marginRight={5} />
              <Text style={styles.infoCardNumber}>50</Text>
            </View>
          </View>
          <View style={[styles.infoCard, styles.shadow]}>
            <Text style={styles.infoCardText}>Leads</Text>
            <View style={[styles.row]}>
              <Icon name="user-plus" type="feather" color="#00FF00" size={24} marginTop={5} marginRight={5} />
              <Text style={styles.infoCardNumber2}>50</Text>
            </View>
          </View>
        </View>

        <Text style={styles.revenueText}>Revenue Estimate</Text>

        {/* Revenue Estimate Graph */}
        <View style={[styles.revenueContainer, styles.shadow]}>
          <View style={styles.tabsContainer}>
            <Text style={styles.tab}>This Week</Text>
            <Text style={[styles.tab, styles.activeTab]}>This Month</Text>
            <Text style={styles.tab}>Last Month</Text>
            <Text style={styles.tab}>All Time</Text>
          </View>

          <LineChart
            data={{
              labels: ['A', 'B', 'C', 'D', 'E', 'F'],
              datasets: [
                {
                  data: [50, 10, 40, 95, 85, 35, 70],
                },
              ],
            }}
            width={screenWidth - 80} // Further reduced width for a more compact look
            height={180} // Reduced height for a more compact look
            yAxisLabel="$"
            yAxisSuffix="k"
            chartConfig={{
              backgroundGradientFrom: '#eee',
              backgroundGradientTo: '#eee',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 100, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '4',
                strokeWidth: '1',
                stroke: '#888',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        {/* Footer Navigation */}
        <View style={[styles.footerNav, styles.shadow]}>
          {icons.map((icon) => (
            <TouchableOpacity
              key={icon.name}
              onPress={() => setSelectedIcon(icon.name)}
              style={styles.iconContainer}
            >
              <Icon
                name={icon.name}
                type="feather"
                color={selectedIcon === icon.name ? 'blue' : '#888'}
                size={24}
                style={selectedIcon === icon.name ? styles.bold : null}
              />
              <Text style={[styles.iconLabel, selectedIcon === icon.name && styles.activeIconLabel]}>
                {icon.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background
  },
  container2: {
    backgroundColor: '#0077CC',
    flex: 0.45,
    borderRadius: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5, // Reduced padding
    backgroundColor: '#0077CC',
  },
  headerText: {
    color: '#fff',
    fontSize: 20, // Reduced font size
    fontWeight: 'bold',
    margin: 10,
    marginTop:20
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 8,
    marginTop: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginRight: 200,
  },
  locationText: {
    color: 'black',
    marginHorizontal: 4,
    fontSize: 14, // Reduced font size
  },
  clientsText: {
    textAlign: 'left',
    marginVertical: 8, // Reduced margin
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14, // Reduced font size
    marginLeft: 20,
  },
  statsContainer: {
    marginHorizontal: 20, // Reduced margin
    marginVertical: 10, // Reduced margin
    backgroundColor: '#FFF',
    padding: 8, // Reduced padding
    borderRadius: 10,
    marginTop: 80,
  },
  activeClients: {
    flexDirection: 'row',
  },
  activeClientsText: {
    fontSize: 14, // Reduced font size
    color: '#888',
    textAlign: 'left',
    marginTop: 5,
  },
  activeClientsNumbers: {
    fontSize: 20, // Reduced font size
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'right',
    marginLeft: 140,
    marginRight: 5,
  },
  infoCards: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 60,
    marginTop: 10,
  },
  infoCard: {
    backgroundColor: '#FFF',
    padding: 10, // Reduced padding
    borderRadius: 10,
    alignItems: 'left',
    flex: 1,
    marginHorizontal: 4,
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 'top',
    alignItems: 'left',
    marginRight: 70,
  },
  infoCardText: {
    fontSize: 13, // Reduced font size
    color: '#888',
    marginTop: 1,
  },
  infoCardNumber: {
    fontSize: 18,
    color: 'red', // Reduced font size
    fontWeight: 'bold',
    marginTop: 4,
  },
  infoCardNumber2: {
    fontSize: 18,
    color: '#00FF00', // Reduced font size
    fontWeight: 'bold',
    marginTop: 4,
  },
  revenueContainer: {
    backgroundColor: '#FFF',
    margin: 30, // Reduced margin
    padding: 10, // Reduced padding
    borderRadius: 10,
    marginTop: 3,
  },
  revenueText: {
    fontSize: 14, // Reduced font size
    marginTop: -40, // Reduced margin
    color: '#888',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8, // Reduced margin
  },
  tab: {
    fontSize: 13, // Reduced font size
    color: '#888',
  },
  activeTab: {
    color: 'blue',
    fontWeight: 'bold',
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15, // Reduced padding
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    marginTop:20
  },
  iconContainer: {
    alignItems: 'center', // Center the icon and text
  },
  iconLabel: {
    fontSize: 12, // Font size for icon labels
    color: '#888',
    marginTop: 4,
  },
  activeIconLabel: {
    color: 'blue', // Change color for selected icon label
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default Dashboard;
