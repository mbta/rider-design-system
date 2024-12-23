import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { getTailwindFormat } from 'sd-tailwindcss-transformer';

/* Register Tokens Studio transforms */
register(StyleDictionary, { excludeParentKeys: false });

/* Register even more custom transforms */
StyleDictionary.registerTransform({
  type: "value",
  transitive: true,
  name: "adjustOtherUnits",
  filter: (token, options) => {
    return token.attributes.category === "transition-duration" || token.attributes.category === "line-height";
  },
  transform: (token) => {
    return token.original.value
  },
});

const preprocessors = ['tokens-studio'];
const transforms = [
  'attribute/cti',
  'name/kebab',
  'fontFamily/css',
  'ts/size/px',
  'size/pxToRem',
  'adjustOtherUnits'
];

const themeCSSConfigs = ["Light", "Dark"].map(theme =>
({
  source: [
    "tokens/figma/Base/Mode 1.json",
    `tokens/figma/Semantic/${theme}.json`,
    `tokens/figma/Components/${theme}.json`,
  ],
  preprocessors,
  platforms: {
    css: {
      transforms,
      transformGroup: 'tokens-studio',
      buildPath: 'dist/',
      files: [{
        destination: `variables.${theme.toLowerCase()}.css`,
        format: 'css/variables'
      }],
    }
  }
})
);

const tailwindConfig = {
  hooks: {
    formats: {
      tailwindFormat: ({ dictionary }) => {
        return getTailwindFormat({
          dictionary,
          formatType: "js",
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
    "tokens/figma/Base/Mode 1.json",
    "tokens/figma/MBTA System/Mode 1.json",
  ],
  preprocessors,
  platforms: {
    tailwind: {
      transforms,
      buildPath: "dist/",
      files: [
        {
          destination: 'tailwind.config.js',
          format: 'tailwindFormat'
        }
      ]
    }
  }
};

for (var config of [tailwindConfig, ...themeCSSConfigs]) {
  const sd = new StyleDictionary(config, { verbosity: "verbose" });
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
}

console.log('\nBuild completed!');
