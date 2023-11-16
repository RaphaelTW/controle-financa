import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

export default function CustomTabBar( state, descriptors, navigation ) {
 return (
   <View style={styles.container}>
        <View style={styles.content}>
            {state.routes.map((route, index) => {
                const {} = descriptors[route.key];

                const isFocued = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merga: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
            })}
        </View>
   </View>
  );
}

const styles = StyleSheet.create({

})