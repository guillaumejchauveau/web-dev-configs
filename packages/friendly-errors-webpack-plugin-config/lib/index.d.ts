import { Severity, WebpackError } from 'friendly-errors-webpack-plugin'

declare namespace FriendlyErrorsWebpackPlugin {
  type Transformer = (error: any) => any
  type Formatter = (errors: WebpackError[], type: Severity) => string[]
}

export namespace transformers {
  const preFormattedErrorsTransformer: FriendlyErrorsWebpackPlugin.Formatter
}
export namespace formatters {
  const preFormattedErrorsFormatter: FriendlyErrorsWebpackPlugin.Transformer
}
