import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Text, ModeToggle, } from "@ds3/react/src";
import { View, } from "react-native";

export default function Tokens() {

  const spacingPresets = [
    { name: 'space-0', width: 'w-0' },
    { name: 'space-0.5', width: 'w-0.5' },
    { name: 'space-1', width: 'w-1' },
    { name: 'space-1.5', width: 'w-1.5' },
    { name: 'space-2', width: 'w-2' },
    { name: 'space-2.5', width: 'w-2.5' },
    { name: 'space-3', width: 'w-3' },
    { name: 'space-3.5', width: 'w-3.5' },
    { name: 'space-4', width: 'w-4' },
    { name: 'space-5', width: 'w-5' },
    { name: 'space-6', width: 'w-6' },
    { name: 'space-7', width: 'w-7' },
    { name: 'space-8', width: 'w-8' },
    { name: 'space-10', width: 'w-10' },
    { name: 'space-12', width: 'w-12' },
    { name: 'space-14', width: 'w-14' },
    { name: 'space-16', width: 'w-16' },
    { name: 'space-18', width: 'w-18' },
    { name: 'space-20', width: 'w-20' },
    { name: 'space-24', width: 'w-24' },
    { name: 'space-28', width: 'w-28' },
    { name: 'space-32', width: 'w-32' },
    { name: 'space-36', width: 'w-36' },
    { name: 'space-40', width: 'w-40' }
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
        <View className="flex-1 items-center">
          <View className="w-full max-w-[1200px] px-4 bg-neutral-1 h-full gap-4">
            <Text className="text-heading-12">Tokens</Text>

            <ModeToggle />

            <Text className="text-h2">Space</Text>
            {spacingPresets.map(({ name, width }) => (
              <View key={name} className="flex flex-row flex-wrap gap-4">
                <Text className="flex items-center w-24">{name}</Text>
                <View className={`bg-neutral-6 h-4 ${width}`} />
              </View>
            ))}

          </View>
        </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
