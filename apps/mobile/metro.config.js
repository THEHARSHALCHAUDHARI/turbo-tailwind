const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro"); // Docs say lowercase 'w'

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withNativewind(config, {
  input: "./global.css",
  inlineRem: 16,
});