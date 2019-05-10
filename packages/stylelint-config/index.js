// TODO: Add Prettier support with `stylelint-config-prettier` and
// `stylelint-plugin-prettier`.

const kebabCasedName = '[a-z]+(-[a-z]+)*'
const kebabCasedNumericalName = '[a-z]+(-[a-z0-9]+)*'
const bemBlockName = `[c|o]-${kebabCasedName}` // c: Component; o: Object
const bemElementName = `__${kebabCasedName}`
const bemModifierName = `_${kebabCasedName}`
const pseudoName = `:{1,2}.+`

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss'
  ],
  plugins: [
    'stylelint-at-rule-no-children',
    'stylelint-csstree-validator',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-no-unsupported-browser-features',
    'stylelint-order'
  ],
  rules: {
    'aditayvm/at-rule-no-children': true,
    //
    'csstree/validator': true,
    //
    'plugin/declaration-block-no-ignored-properties': true,
    //
    'plugin/no-unsupported-browser-features': [
      true,
      {
        'severity': 'warning',
        'ignore': ['wordwrap', 'outline']
      }
    ],
    //
    'order/order': [
      [
        {
          type: 'at-rule',
          name: 'extend'
        },
        {
          type: 'at-rule',
          name: 'include'
        },
        'less-mixins',
        'custom-properties',
        'dollar-variables',
        'at-variables',
        'declarations',
        'rules',
        {
          type: 'at-rule',
          name: 'include',
          parameter: '^media-'
        },
        {
          type: 'at-rule',
          name: 'media'
        }
      ],
      {
        unspecified: 'bottom'
      }
    ],
    'order/properties-order': [
      [
        {
          properties: [
            'position',
            'float',
            'top',
            'right',
            'bottom',
            'left',
            'z-index'
          ]
        },
        {
          properties: [
            'display',
            'overflow',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'box-sizing',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'order',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left'
          ]
        }
      ],
      {
        unspecified: 'bottomAlphabetical'
      }
    ],
    //
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-function-pattern': `^${kebabCasedName}$`,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': [
      'scss'
    ],
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': `^${kebabCasedName}$`,
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-dollar-variable'],
        ignore: ['after-comment']
      }
    ],
    'scss/dollar-variable-pattern': // scope__property_modifier
      `^${kebabCasedName}__${kebabCasedName}(_${kebabCasedNumericalName})?$`,
    'scss/percent-placeholder-pattern': `^${kebabCasedNumericalName}$`,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    // 'scss/no-duplicate-dollar-variables': true,
    //
    'at-rule-empty-line-before': [ // stylelint-config-prettier conflict
      'always',
      {
        except: [
          'blockless-after-same-name-blockless',
          'first-nested'
        ],
        ignore: [
          'after-comment'
        ],
        ignoreAtRules: [
          'else'
        ]
      }
    ],
    'at-rule-no-vendor-prefix': true,
    'block-closing-brace-newline-after': [ // stylelint-config-prettier conflict
      'always-multi-line',
      {
        ignoreAtRules: [
          'if',
          'else'
        ]
      }
    ],
    'color-named': 'never',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'never',
    'max-line-length': 80,
    'max-nesting-depth': 3,
    'media-feature-name-no-vendor-prefix': true,
    'number-leading-zero': 'never',
    'property-no-vendor-prefix': true,
    'selector-class-pattern': [
      `^${bemBlockName}(${bemElementName})?(${bemModifierName}){0,2}`
      + `(${pseudoName})?$`,
      {
        resolveNestedSelectors: true
      }
    ],
    'selector-max-compound-selectors': 3,
    'selector-nested-pattern': `^&(${bemModifierName}){0,2}(${pseudoName})?$`,
    'selector-no-vendor-prefix': true,
    'string-quotes': 'single',
    'value-no-vendor-prefix': true
  }
}
