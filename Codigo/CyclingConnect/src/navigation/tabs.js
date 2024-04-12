import * as React from 'react';
import {useAuth} from '../context/AuthContext';
import {Button, TouchableOpacity, View} from 'react-native';
import {Home, Events, Feedback, TrainingPlan} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faCalendar,
  faEnvelope,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import theme from '../global/theme';
import TabIcon from '../components/Tabs/TabIcon';

const {colors} = theme;

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    // elevation: 0,
    height: 60,
    borderRadius: 10,
  },
};

function TabNavigator() {
  const {onLogout} = useAuth();

  const Tabs = [
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
      {Tabs.map((tab, index) => {
        return (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
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

      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon icon={faHome} size={20} color={focused ? '#000' : '#ccc'} />
            );
          },
          headerShown: true,
          headerRight: () => <Button onPress={onLogout} title="Sair" />,
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default TabNavigator;
