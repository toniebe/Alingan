import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {CGreey1, CGreey3, CGreey5, CSecondary} from '../../styles/colors';
import {scale} from '../../helper/scaling';
import iconEyeOff from '../../images/icon/Eye-off.png';
import iconEye from '../../images/icon/Eye.png';

export default function TextInputs({
  icon,
  placeholder = 'example',
  disable,
  onChangeText,
  value,
  keyboardType = 'default',
  secureTextEntry = false,
  password = false,
}) {
  const [borderColor, setBorderColor] = React.useState(CGreey1);
  const [borderIcon, setBorderIcon] = React.useState(CGreey5);
  const [hide, setHide] = React.useState(secureTextEntry);
  return (
    <View
      style={[styles.container, {borderWidth: 1, borderColor: borderColor}]}>
      <View>
        <Image source={icon} style={[styles.icon, {tintColor: borderIcon}]} />
      </View>
      <View style={[styles.texinputContainer]}>
        <TextInput
          placeholder={placeholder}
          style={styles.textinput}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          editable={!disable}
          onFocus={() => {
            setBorderColor(CSecondary);
            setBorderIcon(CGreey3);
          }}
          onBlur={() => {
            setBorderColor(CGreey1);
            setBorderIcon(CGreey5);
          }}
          secureTextEntry={hide}
        />
      </View>
      {password && (
        <TouchableOpacity onPress={() => setHide(!hide)}>
          <Image source={hide ? iconEye : iconEyeOff} style={[styles.icon,{tintColor: borderIcon}]} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: CGreey1,
    paddingHorizontal: scale(5),
    paddingVertical: scale(0),
    borderRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
  },
  textinput: {
    paddingHorizontal: scale(10),
    width: '100%',
    // backgroundColor: 'pink',
  },
  texinputContainer: {
    flex: 1,
  },
});
