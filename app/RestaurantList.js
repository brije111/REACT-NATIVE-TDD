import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import AddRestaurantModal from './AddRestaurantModal';
import {Button, ListItem} from 'react-native-elements';

class RestaurantList extends Component {
  state = {
    isModalVisible: false,
    reataurants: [],
  };

  onSaveClicked = (restaurant) => {
    this.setState({
      reataurants: [restaurant, ...this.state.reataurants],
      isModalVisible: false,
    });
  };

  onCloseClick = () => {
    this.setState({isModalVisible: false});
  };

  renderRestaurantList = ({item}) => <ListItem title={item} />;

  render() {
    return (
      <View>
        <Button
          testID="newRestaurantButton"
          title="Add New Restaurant"
          onPress={() => this.setState({isModalVisible: true})}
        />

        <AddRestaurantModal
          visible={this.state.isModalVisible}
          onSaveClicked={this.onSaveClicked}
          onCloseClick={this.onCloseClick}
        />

        <FlatList
          data={this.state.reataurants}
          renderItem={this.renderRestaurantList}
          keyExtractor={(item) => item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RestaurantList;
