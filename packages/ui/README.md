# @ds3/ui

A cross-platform UI component library that provides native APIs for both web and React Native developers.

## Key Features

- 🔄 **Dual-API Components**: Use web-specific APIs (onClick, onChange) or React Native APIs (onPress, onChangeText) with the same components
- 🖥️ **Native Feel on Every Platform**: Components behave like native elements on each platform
- 🧩 **Compound Component Patterns**: Flexible, composable components following modern React patterns
- 📱 **Complete Accessibility**: Built-in accessibility features for all platforms
- 🎨 **Consistent Theming**: Shared design tokens across platforms
- 🌈 **Advanced Styling**: Powered by TailwindCSS and NativeWind
- 🔌 **Flexible SVG Icon Support**: Bring any SVG icon library and use it cross-platform

## Installation

```bash
pnpm install @ds3/core @ds3/ui
```

## Components

DS3 UI offers a comprehensive set of cross-platform components for building modern user interfaces:

- [**Button**](src/components/button/README.md) - Versatile button component with multiple variants, sizes, and states
- [**Input**](src/components/input/README.md) - Text input field with support for validation and states
- **Text** - Typography component with various styles and weights
- **Dialog** - Modal dialog for displaying content
- **Switch** - Toggle control for boolean values
- **Checkbox** - Selection control for multiple options
- **Select** - Dropdown selection component
- **Avatar** - User or entity representation
- **Card** - Container for related content
- **Icon** - SVG icon component
- **Badge** - Small label for status or count
- **Spinner** - Loading indicator

Each component follows the same cross-platform principles with consistent APIs across web and native platforms.

## Dual-API

Unlike most cross-platform libraries that force you to use a lowest-common-denominator API, DS3 UI provides **platform-native APIs** for both web and React Native developers.

DS3 UI is designed for two distinct developer personas:
- **Web-only developers** who want familiar DOM events and HTML attributes
- **Native/hybrid developers** who need consistent cross-platform components

### Web-Only Developers
If you're building exclusively for the web:
- Use familiar web-specific APIs (`onClick`, `onChange`, `type`, etc.)
- Write components just like you would with any other React web library
- Get complete DOM access, browser features, and TypeScript type safety

```tsx
// Web-familiar code
<Button
  type="submit"
  onClick={handleSubmit}
  disabled={isLoading}
>
  Submit Form
</Button>

<Input
  type="email"
  onChange={e => setEmail(e.target.value)}
  required
  placeholder="Enter email"
/>
```

### Native and Hybrid Developers
For native-only or hybrid applications:
- Use React Native APIs consistently (`onPress`, `onChangeText`, etc.)
- Same component API works across all platforms
- Native and hybrid cases share the same interfaces and approach

```tsx
// Cross-platform code that works on both web and native
<Button
  onPress={handleSubmit}
  disabled={isLoading}
>
  <Button.Text>Submit Form</Button.Text>
</Button>

<Input
  onChangeText={setEmail}
  keyboardType="email-address"
  placeholder="Enter email"
>
  <Input.Field />
</Input>
```

### Type-Safe Event Handling

The library exports global type definitions for platform-specific events:

```tsx
import type { WebClickEvent, NativePressEvent } from '@ds3/ui';

// Web-specific usage with familiar web APIs
<Button onClick={(e: WebClickEvent) => console.log('Clicked!', e.currentTarget)}>
  Click Me
</Button>

// React Native/Web-specific usage
<Button onPress={(e: NativePressEvent) => console.log('Pressed!', e.nativeEvent)}>
  <Button.Text>Press Me</Button.Text>
</Button>
```

| Web Types | Native Types | Description |
|-----------|--------------|-------------|
| `WebClickEvent` | `NativePressEvent` | For button click/press events |
| `WebFocusEvent` | `NativeFocusEvent` | For focus/blur events |
| `WebChangeEvent` | `NativeChangeEvent` | For input change events |

### Guiding Philosophy

**Choose one API style and stick with it throughout your codebase.** 

For the best developer experience and to avoid confusion:
- **Web-only development**: Use ONLY web props (`onClick`, `onChange`, etc.)
- **Native/hybrid development**: Use ONLY native props (`onPress`, `onChangeText`, etc.)
- Never mix web and native APIs in the same project

``tsx
// ❌ INCORRECT: Mixing prop styles
<Button 
  onClick={() => {}} // web prop
  onPress={() => {}} // native prop
  variant="outline" 
  color="primary"
>
  <Button.Text>Mixed Props Button</Button.Text>
</Button>
```

This deliberate separation ensures your code remains clean, consistent, and optimized for your specific platform needs.

## The Slot Pattern (`asChild`)

The Slot pattern allows you to replace a component's default root element with your own custom element, while preserving all styling, behavior, and accessibility features.

### How It Works

When you pass `asChild={true}` to a component:

1. The component renders a `Slot` component instead of its default element
2. The `Slot` captures all props from the parent component
3. It applies those props to the first child element you provide
4. The child element becomes the new root, inheriting all behavior

### Examples

```tsx
// Regular button
<Button variant="solid" color="primary">
  <Button.Text>Click Me</Button.Text>
</Button>

// Button as a link using asChild
<Button variant="solid" color="primary" asChild>
  <a href="https://example.com">Visit Website</a>
</Button>

// Button as a router link
<Button variant="solid" color="primary" asChild>
  <Link to="/dashboard">Go to Dashboard</Link>
</Button>
```

The rendered DOM with `asChild` would be essentially:

```html
<a 
  href="https://example.com" 
  class="ds3-button ds3-button-solid ds3-button-primary"
  role="button"
>
  Visit Website
</a>
```

### Slot Implementation

Our components use different Slot implementations based on platform:

- **Web**: Uses `@radix-ui/react-slot` for DOM elements
- **Native**: Uses `@rn-primitives/slot` for React Native components

This allows the same API to work seamlessly across platforms while respecting platform-specific behavior.

## Compound Component Pattern

Our components use the Compound Component pattern to give you maximum flexibility in how you structure and style your UI.

### What This Means For You

With compound components, you can:

- **Use simple or advanced APIs** - Basic usage is concise, but you can expand when needed
- **Control exact component structure** - Position elements precisely where you want them
- **Apply custom styling to specific parts** - Target Tailwind classes to exactly the right element
- **Add or remove elements** - Include only the parts you need

### Button Example

```tsx
// Simple usage - clean and concise
<Button color="primary">
  Sign Up
</Button>

// Advanced usage - complete control over structure and styling
<Button color="primary" className="px-8 rounded-full">
  <Button.Spinner loadingIcon={RefreshCw} className="mr-2 animate-spin" />
  <Button.Text className="font-bold tracking-wide">Create Account</Button.Text>
  <Button.Icon icon={ArrowRight} className="ml-3 text-white" />
</Button>
```

This pattern is used throughout our component library, giving you the perfect balance between simplicity for common cases and flexibility when you need more control.

## Development

```bash
# Install dependencies
pnpm i

# Watch the package and build
pnpm dev

# Build the package
pnpm build
```

## License

MIT 