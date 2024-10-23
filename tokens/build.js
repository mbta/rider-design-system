import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { getTailwindFormat } from 'sd-tailwindcss-transformer';

register(StyleDictionary);

const tailwindConfig = {
  hooks: {
    formats: {
      tailwindFormat: ({ dictionary }) => {
        return getTailwindFormat({
          dictionary,
          formatType: "js",
          isVariables: false, // don't use CSS variables
          extend: false, // completely replace the default TW theme
          type: "all",
          tailwind: {
            content: [],
            darkMode: "media"
          }
        })
      }
    }
  },
  source: [
    'tokens/Base/Mode 1.json',
    `tokens/Mbta System/Value.json`,
  ],
  preprocessors: ['tokens-studio'],
  platforms: {
    tailwind: {
      transforms: [
        'attribute/cti',
        'name/kebab'
      ],
      buildPath: "dist/",
      files: [
        {
          destination: "tailwind.config.js",
          format: 'tailwindFormat'
        }
      ]
    }
  }
};

const themeCSSConfigs = ["Light", "Dark"].map(theme =>
({
  include: ['tokens/Base/Mode 1.json'],
  source: [`tokens/Semantic/${theme}.json`],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'dist/',
      files: [{
        destination: `variables.${theme.toLowerCase()}.css`,
        format: 'css/variables',
      }],
    }
  }
})
);

for (var config of [tailwindConfig, ...themeCSSConfigs]) {
  const sd = new StyleDictionary(config, { verbosity: "verbose" });
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
}

console.log('\nBuild completed!');
