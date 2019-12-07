//This is the NODEjs script for updating the app.json files that will be used by the application
//It will deep merge app.json to process.env.NODE_ENV file
//Then finally it will be copied to the top folder ../../

module.exports = function() {
  const _ = require('lodash')
  const fs = require('fs')
  const chalk = require('chalk')
  const info = chalk.blue
  const argv = require('yargs').argv

  //the default is development
  const env = process.env.NODE_ENV || 'development'

  const sourceFilName = `./${env}-app.json`
  const main = require('./app')
  const source = require(sourceFilName)
  const package = require('../../package.json')

  //update the version to be the same as package.json
  const version = { expo: { version: package.version } }

  //update the google version code as necessary
  let versionCode = source.expo.android.versionCode
  if (argv.addVersionCode === 'true') {
    versionCode = Number.parseInt(versionCode) + 1
  }

  const googleVersionCode = {
    expo: {
      android: { versionCode },
    },
  }

  //update the source
  const sourceUpdated = _.merge(source, version, googleVersionCode)
  //the output should be the main application
  fs.writeFileSync(`./.scripts/setting/${sourceFilName}`, JSON.stringify(sourceUpdated, null, 2))

  //deep merge the main setting which contains all values
  //against the setting of specific environment only
  const merged = _.merge(main, source)

  //the output should be the main application
  const outputFilename = 'app.json'
  fs.writeFileSync(outputFilename, JSON.stringify(merged, null, 2))

  console.info(info(`Done updating the app.json as ## ${env} ##`))
}
