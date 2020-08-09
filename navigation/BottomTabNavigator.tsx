import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabBarIcon from '../components/TabBarIcon';
import MainTabStack from './tabs/MainTabStack';
import CollectionTabStack from './tabs/CollectionTabStack';
import SearchTabStack from './tabs/SearchTabStack';
import { useLocale } from '../hooks/useLocale';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MainTab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="MainTab"
        component={MainTabStack}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-o" color={color} />,
          tabBarLabel: useLocale({},"mainTabLabel")
        }}
      />
      <BottomTab.Screen
        name="CollectionTab"
        component={CollectionTabStack}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          tabBarLabel: useLocale({},"collectionTabLabel")
        }}
      />
      <BottomTab.Screen
        name="SearchTab"
        component={SearchTabStack}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          tabBarLabel: useLocale({},"searchTabLabel")
        }}
      />
    </BottomTab.Navigator>
  );
}


