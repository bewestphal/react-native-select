# react-native-select
A dead simple Select input for react native.

### Installation
npm install react-native-select-input

### Component Props
| Name  | Description |
| ------------- | ------------- |
| options  | An array of objects describing the options to select with the format {label: value: '}  |
| onSelect  | Callback described in the higher level component called when an option is selected.  |
| containerStyle  | Object to override the initial input container style  |
| optionTextStyle  | Object to override the style of input options text  |
| scrollStyle  | Object to override the style of the popup option container  |


### Example Usage

The following example is a dropdown select input to choose a color.

The example creates a transparent overlay wrapper on the entire view to close every select input when a user taps anywhere on screen.

```
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {SelectInput} from "../lib/index";
import Select from "../lib/index";


export default class FavoriteColorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null
    };
  }

  closeSelections = () => {
    this.select.closeSelection()
  };

  render() {
    let colorSelectItems = [
      {label:'Red', value: 'red'},
      {label:'Green', value: 'green'},
      {label:'Yellow', value: 'yellow'},
      {label:'Blue', value: 'blue'},
      {label:'Pink', value: 'pink'},
    ];

    return (
      <TouchableWithoutFeedback style={{width: '100%'}} onPress={this.closeSelections}>
        <View style={styles.overlay}>
          <Select
            options={colorSelectItems}
            ref={(ref) => this.select = ref}
            defaultValue={this.state.color || 'Select your favorite color'}
            onSelect={(itemValue) => this.setState({color: itemValue})} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%'
  }
});
```
