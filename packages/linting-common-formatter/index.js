const formatter = require('eslint-formatter-pretty')

function formatMessages (messages, dataMapping) {
  const messagesByFile = {}

  for (const message of messages) {
    const filePath = dataMapping.filePath(message)

    if (!messagesByFile[filePath]) {
      messagesByFile[filePath] = []
    }

    for (const realMessage of dataMapping.realMessages(message)) {
      messagesByFile[filePath].push(realMessage)
    }
  }

  const results = []
  for (const filePath in messagesByFile) {
    const fileMessages = messagesByFile[filePath]
    const result = {
      filePath,
      errorCount: 0,
      warningCount: 0,
      messages: []
    }

    for (const message of fileMessages) {
      const severity = dataMapping.severity(message)
      result.messages.push({
        line: dataMapping.line(message),
        column: dataMapping.column(message),
        severity,
        message: dataMapping.message(message),
        ruleId: dataMapping.ruleId(message)
      })

      if (severity === 1) {
        result.warningCount++
      }
      if (severity === 2) {
        result.errorCount++
      }
    }

    results.push(result)
  }

  return formatter(results)
}

module.exports = {
  eslint: formatter,
  stylelint (messages) {
    return formatMessages(messages, {
      filePath: message => message.source,
      realMessages: message => message.warnings,
      line: message => message.line,
      column: message => message.column,
      severity: message => {
        switch (message.severity) {
          case 'error':
            return 2
          case 'info':
            return 0
          default:
            return 1
        }
      },
      message: message => message.text,
      ruleId: message => message.rule
    })
  },
  htmlhint (messages) {
    return formatMessages(messages, {
      filePath: message => message.filePath,
      realMessages: message => [message],
      line: message => message.line,
      column: message => message.col,
      severity: message => {
        switch (message.type) {
          case 'error':
            return 2
          case 'info':
            return 0
          default:
            return 1
        }
      },
      message: message => message.message,
      ruleId: message => message.rule.id
    })
  },
  pugLint (messages) {
    return formatMessages(messages, {
      filePath: message => message.filename,
      realMessages: message => [message],
      line: message => message.line,
      column: message => message.column,
      severity: message => 1,
      message: message => message.msg,
      ruleId: message => message.code
    })
  }
}
