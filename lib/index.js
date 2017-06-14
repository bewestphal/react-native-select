import React, {Component} from 'react';
import {TouchableWithoutFeedback, View, Text, StyleSheet, ScrollView} from 'react-native';


class Option extends Component {
  static propTypes = {
    children: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    optionTextStyle: React.PropTypes.object,
  };

  render() {
    return (
      <TouchableWithoutFeedback
        style={styles.optionContainerStyle}
        onPress={this.props.onSelect}>
        <View>
          <Text style={styles.optionTextStyle}>
            {this.props.children}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default class Select extends Component {
  static propTypes = {
    options: React.PropTypes.array,
    onSelect: React.PropTypes.func.isRequired,
    containerStyle: React.PropTypes.object,
    optionTextStyle: React.PropTypes.object,
    scrollStyle: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: null || 'Select an option',
      isVisible: false
    }
  }

  onSelect = (item) => {
    this.setState({value: item, isVisible: false});
    this.props.onSelect()
  };

  closeSelection = () => {
    this.setState({isVisible: false})
  };

  render() {
    let options = this.props.options.map((option, index) => {
      return (
        <Option key={index}
          onSelect={() => this.onSelect(option.value)}
          optionTextStyle={this.props.optionTextStyle}>
          {option.label}
        </Option>
      )});

    let scrollView = (
      <ScrollView bounces={false} style={this.props.scrollStyle || styles.scrollStyle}>
        {options}
      </ScrollView>
    );

    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.setState({isVisible: !this.state.isVisible})}>
          <View style={this.props.containerStyle || styles.containerStyle}>
            <Text>{this.state.value}</Text>
          </View>
        </TouchableWithoutFeedback>
        {this.state.isVisible ? scrollView : <View />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    width: '100%',
    position: 'absolute',
    top: '-50%',
    height: 150,
    borderColor: '#BDBDC1',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 1
  },
  optionTextStyle: {
    margin: 10,
    height: 20,
    textAlign: 'center'
  },
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderWidth: 1,
    borderColor: '#929292',
    paddingHorizontal: 16,
  }
});