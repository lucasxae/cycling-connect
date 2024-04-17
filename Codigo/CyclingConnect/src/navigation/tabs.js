import * as React from 'react';
import {useAuth} from '../context/AuthContext';
import {Button} from 'react-native';
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
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    height: 60,
    borderRadius: 10,
  },
};

function TabNavigator(props) {
  const {onLogout} = useAuth();

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
      name: 'Feedback',
      label: 'Feedback',
      component: Feedback,
      icon: faList,
    },
    {
      name: 'TrainingPlan',
      label: 'Planilhas',
      component: TrainingPlan,
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
            initialParams={tab.name === 'Home' && props}
            options={({navigation}) => ({
              tabBarShowLabel: false,
              tabBarIcon: props => {
                return (
                  <TabIcon
                    {...props}
                    item={tab}
                    onPress={() => navigation.navigate(tab.name)}
                  />
                );
              },
              headerShown: true,
              headerRight: () => <Button onPress={onLogout} title="Sair" />,
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default TabNavigator;
