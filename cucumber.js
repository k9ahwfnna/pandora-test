module.exports = {
  default: [
    '--require features/support/**/*.js',
    '--require features/step_definitions/**/*.js',
    '--format progress',
    '--format json:reports/cucumber-report.json',
    '--tags "not @wip"'
  ].join(' ')
};