declare namespace LintingCommonFormatter {
  type Formatter = (messages: object[]) => string
}

export const eslint: LintingCommonFormatter.Formatter
export const stylelint: LintingCommonFormatter.Formatter
export const htmlhint: LintingCommonFormatter.Formatter
export const pugLint: LintingCommonFormatter.Formatter
