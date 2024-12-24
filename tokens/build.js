import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { getTailwindFormat } from 'sd-tailwindcss-transformer';
import { kebabCase } from 'change-case';

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
    "tokens/figma/MBTA System/Mode 1.json",
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
        const formattedTailwindConfig = getTailwindFormat({
          dictionary,
          formatType: "js",
          isVariables: true,
          type: "all",
          tailwind: {
            content: [],
            darkMode: "media"
          }
        });
        // Can't really inject our own formatters or filters into the
        // sd-tailwindcss-transformer, so we gotta process the output after the
        // fact to un-camel-case certain names to create nicer utility class
        // names (e.g. "bg-green-line" instead of "bg-greenLine")
        const systemColorNamesRegex = new RegExp(["greenLine", "orangeLine", "redLine", "blueLine", "silverLine", "brandBus", "theRide", "commuterRail", "mbtaDark", "darkWinter", "midWinter"].join("|"), "gi");
        const config = formattedTailwindConfig.replace(systemColorNamesRegex, function (matched) {
          return `"${kebabCase(matched)}"`;
        }).replace("module.exports", "const tailwindConfig");
        return config.concat(";\nexport default tailwindConfig.theme;\n");
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
