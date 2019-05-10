module.exports = {
  disallowAttributeConcatenation: true,
  disallowAttributeInterpolation: true,
  disallowAttributeTemplateString: null,
  disallowBlockExpansion: true,
  disallowClassAttributeWithStaticValue: true,
  disallowClassLiteralsBeforeAttributes: null,
  disallowClassLiteralsBeforeIdLiterals: true,
  disallowClassLiterals: null,
  disallowDuplicateAttributes: true,
  disallowHtmlText: true,
  disallowIdAttributeWithStaticValue: true,
  disallowIdLiteralsBeforeAttributes: null,
  disallowIdLiterals: null,
  disallowLegacyMixinCall: true,
  disallowMultipleLineBreaks: true,
  disallowSpaceAfterCodeOperator: null,
  disallowSpacesInsideAttributeBrackets: true,
  disallowSpecificAttributes: [
    { 'a': 'name' }
  ],
  disallowSpecificTags: [
    'b',
    'i',
    'u'
  ],
  disallowStringConcatenation: true,
  disallowStringInterpolation: null,
  disallowTagInterpolation: null,
  disallowTemplateString: null,
  disallowTrailingSpaces: true,
  maximumLineLength: 80,
  maximumNumberOfLines: null,
  requireClassLiteralsBeforeAttributes: true,
  requireClassLiteralsBeforeIdLiterals: null,
  requireIdLiteralsBeforeAttributes: true,
  requireLineFeedAtFileEnd: true,
  requireLowerCaseAttributes: true,
  requireLowerCaseTags: true,
  requireSpaceAfterCodeOperator: true,
  requireSpacesInsideAttributeBrackets: null,
  requireSpecificAttributes: [
    { 'a': 'href' },
    { 'img': 'alt' }
  ],
  requireStrictEqualityOperators: true,
  validateAttributeQuoteMarks: '\'',
  validateAttributeSeparator: {
    separator: ', ',
    multiLineSeparator: '\n '
  },
  validateDivTags: true,
  validateExtensions: true,
  validateIndentation: 2,
  validateLineBreaks: 'LF',
  validateSelfClosingTags: true,
  validateTemplateString: null
}
