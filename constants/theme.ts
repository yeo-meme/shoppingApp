import { Dimensions, TextStyle } from 'react-native';
const { width, height } = Dimensions.get('window');

export const SIZES: { [key: string]: number} = {
// global sizes
base: 8,
font: 14,
radius: 12,
padding: 24,

// font sizes
navTitle: 25,
h1: 30,
h2: 22,
h3: 16,
h4: 14,
h5: 12,
body1: 30,
body2: 20,
body3: 16,
body4: 14,
body5: 12,

// app dimensions
width,
height,
};

const appTheme = { SIZES };

export default appTheme;