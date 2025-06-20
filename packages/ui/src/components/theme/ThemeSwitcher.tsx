import * as React from 'react';
import { useTheme } from './useTheme';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import type { ThemeSwitcherProps } from './types';
import _ from 'lodash';

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const triggerRef = React.useRef<React.ElementRef<typeof SelectTrigger>>(null);
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: Platform.select({ ios: insets.bottom, android: insets.bottom + 24 }),
    left: 12,
    right: 12,
  };

  const { theme, setTheme, config } = useTheme();
  const themes = config?.themes;
  const themeKeys = themes ? Object.keys(themes) : [];

  return (
    <Select
      value={{ value: theme, label: theme }}
      onValueChange={(item) => setTheme(item?.value as string)}
    >
      <SelectTrigger ref={triggerRef} className={className}>
        <SelectValue
          className='text-foreground text-sm native:text-lg'
          placeholder='Select a theme'
        />
      </SelectTrigger>
      <SelectContent insets={contentInsets}>
        <SelectGroup>
          {themeKeys.map((key) => (
            <SelectItem label={_.lowerCase(key)} value={key} key={key} />
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';
