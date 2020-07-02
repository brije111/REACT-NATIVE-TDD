import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import api from './api';
import Hello from './Hello';

const WidgetContainer = () => {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    console.log('before response');
    api.get('/widgets').then((response) => {
      console.log('after response');
      setWidgets(response.data);
    });
  }, []);

  return (
    <View>
      <Hello name="Hello World" />
      {widgets.map((widget) => (
        <Text key={widget.id}>{widget.name}</Text>
      ))}
    </View>
  );
};

export default WidgetContainer;
