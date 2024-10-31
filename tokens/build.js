import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { getTailwindFormat } from 'sd-tailwindcss-transformer';
import { kebabCase } from 'change-case';

register(StyleDictionary);

const tailwindConfig = {
  hooks: {
    filters: {
      'base': token => {
        const fileName = token.path[0];
        return fileName == "Base/Mode 1" || fileName == "MBTA System/Mode 1";
      },
    },
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
    },
    transforms: {
      'removeFileName': {
        type: 'attribute',
        transitive: true,
        transform: token => {
          delete token.attributes.category
          return token.attributes;
        },
      }
    }
  },
  source: ["tokens/tokens.json"],
  preprocessors: ['tokens-studio'],
  platforms: {
    tailwind: {
      transforms: [
        'attribute/cti',
        'removeFileName',
        'name/kebab'
      ],
      buildPath: "dist/",
      files: [
        {
          destination: "tailwind.config.cjs",
          format: 'tailwindFormat',
          filter: 'base'
        }
      ]
    }
  }
};

const themeCSSConfigs = ["Light", "Dark"].map(theme =>
({
  source: [
     "tokens/tokens.json"
  ],
  hooks: {
    filters: {
      'theme': token => {
        const fileName = token.path[0];
        if (fileName == "Base/Mode 1") return true;
        return fileName == `Semantic/${theme}` || fileName == `Components/${theme}`;
      },
    },
    transforms: {
      'removeFileName': {
        type: `name`,
        transitive: true,
        transform: (token) => {
          const [category, ...tokenPath] = token.path;
          return kebabCase(tokenPath.join(' '))
        },
      }
    }
  },
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['removeFileName'],
      buildPath: 'dist/',
      files: [{
        destination: `variables.${theme.toLowerCase()}.css`,
        format: 'css/variables',
        filter: 'theme'
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
