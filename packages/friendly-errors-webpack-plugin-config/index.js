/**
 * @class ModuleBuildError
 */
const ModuleBuildError = require('webpack/lib/ModuleBuildError')
/**
 * @class ModuleDependencyWarning
 */
const ModuleDependencyWarning = require('webpack/lib/ModuleDependencyWarning')
/**
 * @class ModuleNotFoundError
 */
const ModuleNotFoundError = require('webpack/lib/ModuleNotFoundError')
/**
 * @class ModuleWarning
 */
const ModuleWarning = require('webpack/lib/ModuleWarning')

const chalk = require('chalk')

module.exports = {
  transformers: {
    preFormattedErrorsTransformer (exception) {
      const wError = exception.webpackError

      const message = {
        message: null,
        severity: 2
      }

      if (wError.error) {
        message.message = wError.error.message
      } else if (wError.warning) {
        message.message = wError.warning.message
      } else if (wError.message) {
        message.message = wError.message
      }

      if (
        wError instanceof ModuleWarning ||
        wError instanceof ModuleDependencyWarning
      ) {
        message.severity = 1
      }
      if (wError instanceof ModuleBuildError) {
        if (wError.error instanceof ModuleNotFoundError) {
          return {}
        }

        message.message =
          exception.file +
          '\n' +
          message.message.replace(/^Module build failed.*:/, '') +
          '\n'
      }
      if (
        wError instanceof ModuleNotFoundError &&
        wError.dependencies.length > 0
      ) {
        const moduleRequire = wError.dependencies[0]
        const moduleRequirePos = moduleRequire.loc.start

        message.message =
          `Can't resolve '${moduleRequire.request}' in ` +
          chalk.underline(exception.file)

        if (moduleRequirePos) {
          message.message += chalk.hidden.dim.gray(
            `:${moduleRequirePos.line}:${moduleRequirePos.column}`
          )
        }
      }

      return message
    }
  },
  formatters: {
    preFormattedErrorsFormatter (exceptions, type) {
      return exceptions.reduce((accumulator, exception) => {
        return accumulator + exception.message
      }, '')
    }
  }
}
