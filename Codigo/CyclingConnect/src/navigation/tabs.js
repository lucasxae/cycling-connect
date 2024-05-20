import * as React from 'react';
import {Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Home, Events, Feedback, TrainingPlan} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  faHome,
  faCalendar,
  faEnvelope,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import TabIcon from '../components/Tabs/TabIcon';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#f04444',
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    height: 60,
    borderRadius: 10,
  },
};

function TabNavigator() {
  const tabs = [
    {
      name: 'Home',
      label: 'Home',
      component: Home,
      icon: faHome,
    },
    {
      name: 'Events',
      label: 'Eventos',
      component: Events,
      icon: faCalendar,
    },
    {
      name: 'TrainingPlan',
      label: 'TrainingPlan',
      component: TrainingPlan,
      icon: faList,
    },
    {
      name: 'Feedback',
      label: 'Feedback',
      component: Feedback,
      icon: faEnvelope,
    },
  ];

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab, index) => {
        return (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={({navigation}) => ({
              tabBarShowLabel: false,
              tabBarIcon: props => {
                return (
                  <TouchableOpacity>
                    <TabIcon
                      {...props}
                      item={tab}
                      onPress={() => navigation.navigate(tab.name)}
                    />
                  </TouchableOpacity>
                );
              },
              headerShown: true,
              headerShadowVisible: false,
              headerTintColor: '#fff',
              headerTitle: '',
              headerStyle: {backgroundColor: '#222'},
              headerRight: () =>
                tab.name === 'Home' && (
                  <Button
                    onPress={() => navigation.navigate('Profile')}
                    title="Menu"
                  />
                ),
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default TabNavigator;
