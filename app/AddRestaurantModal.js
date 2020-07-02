import React, {Component} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';

class AddRestaurantModal extends Component {
  state = {
    value: '',
  };

  onChangeText = (text) => {
    this.setState({value: text});
  };

  onSaveClicked = () => {
    this.props.onSaveClicked(this.state.value);
    this.setState({value: ''});
  };

  onCloseClick = () => {
    this.props.onCloseClick();
  };

  render() {
    return (
      <Modal transparent={true} visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.modelContent}>
            <Text h4 style={styles.title}>
              Add New Restaurant
            </Text>
            <Input
              label="Restaurant Name"
              testID="newRestaurantTextField"
              placeholder="Enter new restaurant name"
              value={this.state.value}
              onChangeText={this.onChangeText}
            />
            <Button
              style={styles.button}
              testID="saveRestaurantButton"
              title="Save Restaurant"
              onPress={this.onSaveClicked}
            />
            <Button
              style={styles.button}
              testID="closeButton"
              title="Close"
              onPress={this.onCloseClick}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  title: {
    marginBottom: 16,
  },
  button: {
    marginTop: 4,
  },
  modelContent: {
    padding: 20,
    alignSelf: 'center',
    width: '70%',
    backgroundColor: '#ffffff',
  },
});

export default AddRestaurantModal;
