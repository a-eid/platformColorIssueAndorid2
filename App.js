import * as React from 'react';
import {View, PlatformColor, Platform, Text, Image} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        width: 350,
        height: 350,

        // backgroundColor:
        //   Platform.OS == 'android'
        //     ? PlatformColor('?attr/colorAccent')
        //     : 'blue',

        // shadowColor:
        //   Platform.OS == 'android'
        //     ? PlatformColor('?attr/colorAccent')
        //     : 'green',

        // borderColor: 'green',

        borderWidth: 5,
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
      }}>
      <Text
        style={{
          // borderColor:
          //   Platform.OS == 'android'
          //     ? PlatformColor('?attr/colorPrimary')
          //     : 'blue',
          borderWidth: 2,
          backgroundColor:
            Platform.OS == 'android'
              ? PlatformColor('?attr/colorAccent')
              : 'blue',
          color:
            Platform.OS == 'android'
              ? PlatformColor('?attr/colorPrimary')
              : 'blue',
        }}>
        Here we goo
      </Text>
      <Image
        source={{
          uri: 'https://source.unsplash.com/user/c_v_r/1900x800',
        }}
        style={{
          width: 100,
          height: 100,

          // overlayColor:
          //   Platform.OS == 'android'
          //     ? PlatformColor('?attr/colorPrimary')
          //     : 'blue',
          // Platform.OS == 'android'
          //   ? PlatformColor('?attr/colorPrimary')
          //   : 'blue',

          tintColor:
            Platform.OS == 'android'
              ? PlatformColor('?attr/colorAccent')
              : 'blue',
        }}
      />
    </View>
  );
}

// case 6:
//   this.mViewManager.setBackgroundColor(view, value == null ? 0 : ColorPropConverter.getColor(value, view.getContext()));
//   break;
