// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
var config = require('../../../config')
var ui = require('../ui-properties/ui-locators.js')
var personPage = require('../pages/person.js')
var planetPage = require('../pages/planet.js')
var starshipPage = require('../pages/starship.js')
var helpPage = require('../pages/help.js')
var privacyPage = require('../pages/privacy.js')


module.exports = {
  'default e2e tests': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .assert.title("Force Vue")
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .pause(2000)
      .end()
  },


'verify person record has seven table records': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .assert.elementCount(ui.dev.tableRecord, 7)
      .waitForElementVisible(personPage.elements.nameTextbox, 5000) // Unsure how to hook up @nameTextBox
      .assert.elementPresent(personPage.elements.nameTextbox) // The @nameTextbox was not working
      .assert.elementPresent(personPage.elements.heightTextbox)
      .assert.elementPresent(personPage.elements.massTextbox)
      .assert.elementPresent(personPage.elements.hairColorTextbox)
      .assert.elementPresent(personPage.elements.eyeColorTextbox)
      .assert.elementPresent(personPage.elements.birthYearTextbox)
      .assert.elementPresent(personPage.elements.genderTextbox)
      .pause(2000)
      .end()
  },


  'verify planet record has nine table records': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.planet)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(planetPage.elements.randomPlanetButton)
      .assert.elementCount(ui.dev.tableRecord, 9)
      .waitForElementVisible(planetPage.elements.nameTextbox, 5000) // Unsure how to hook up @nameTextBox
      .assert.elementPresent(planetPage.elements.nameTextbox) // The @nameTextbox was not working
      .assert.elementPresent(planetPage.elements.rotationPeriodTextbox)
      .assert.elementPresent(planetPage.elements.orbitalPeriodTextbox)
      .assert.elementPresent(planetPage.elements.diameterTextbox)
      .assert.elementPresent(planetPage.elements.climateTextbox)
      .assert.elementPresent(planetPage.elements.gravityTextbox)
      .assert.elementPresent(planetPage.elements.terrainTextbox)
      .assert.elementPresent(planetPage.elements.surfaceWaterTextbox)
      .assert.elementPresent(planetPage.elements.populationTextbox)
      .pause(2000)
      .end()
  },


  'verify starship record has thirteen table records': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.starship)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(starshipPage.elements.randomStarshipButton)
      .assert.elementCount(ui.dev.tableRecord, 13)
      .waitForElementVisible(starshipPage.elements.nameTextbox, 5000) // Unsure how to hook up @nameTextBox
      .assert.elementPresent(starshipPage.elements.nameTextbox) // The @nameTextbox was not working
      .assert.elementPresent(starshipPage.elements.modelTextbox)
      .assert.elementPresent(starshipPage.elements.manufacturerTextbox)
      .assert.elementPresent(starshipPage.elements.costInCreditsTextbox)
      .assert.elementPresent(starshipPage.elements.lengthTextbox)
      .assert.elementPresent(starshipPage.elements.maxAtmosTextbox)
      .assert.elementPresent(starshipPage.elements.passengersTextbox)
      .assert.elementPresent(starshipPage.elements.cargoTextbox)
      .assert.elementPresent(starshipPage.elements.consumablesTextbox)
      .assert.elementPresent(starshipPage.elements.hyperdriveTextbox)
      .assert.elementPresent(starshipPage.elements.mgltTextbox)
      .assert.elementPresent(starshipPage.elements.starshipClassTextbox)
      .pause(2000)
      .end()
  },


  'verify selecting random person: name field not empty': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .click(personPage.elements.randomPersonButton)
      .getText(ui.dev.tableRecord, function(result) {
        this.assert.notEqual(result,'')
      })
      .end()
  },


  'verify person button has expected value: face RANDOM PERSON': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .getText(personPage.elements.randomPersonButton, function(result) {
        this.assert.equal(result.value,'face RANDOM PERSON')
      })
      .end()
  },


  'verify planet button has expected value: public RANDOM PLANET': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.planet)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(planetPage.elements.randomPlanetButton)
      .getText(planetPage.elements.randomPlanetButton, function(result) {
        this.assert.equal(result.value,'public RANDOM PLANET')
      })
      .end()
  },


 'verify startship button has expected value: public RANDOM STARTSHIP': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.starship)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(starshipPage.elements.randomStarshipButton)
      .getText(starshipPage.elements.randomStarshipButton, function(result) {
        this.assert.equal(result.value,'public RANDOM STARSHIP')
      })
      .end()
  },


  'starship e2e tests': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .setValue(ui.dev.select,ui.dev.selectValue.starship)
      .click(ui.dev.select)
      .pause(1000)
      .keys(['\uE006'])
      .pause(3000)
      .assert.elementPresent(starshipPage.elements.randomStarshipButton)
      .click(starshipPage.elements.randomStarshipButton)
      .waitForElementPresent(ui.dev.tableRecord, 2000)
      .pause(3000)
      .getText(ui.dev.tableRecord, function(result) {
        this.assert.notEqual(result,'')
      })
      .end()
  },


  'verify that help page loads with the correct title': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .click(helpPage.elements.helpLink)
      .getText(helpPage.elements.helpTitle, function(text) {
        this.assert.equal(text.value, 'Help')
      })
      .end()
  },


  'verify that privacy and terms page loads with the correct title': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .click(privacyPage.elements.privacyLink)
      .getText(privacyPage.elements.privacyTitle, function(text) {
        this.assert.equal(text.value, 'Privacy & Terms')
      })
      .end()
  },


'verify that about page loads with the correct title': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .useXpath()
      .click("/html/body/div[1]/div/div/header/div[3]/nav/a[2]")
      .pause(1000)
      .assert.elementPresent("/html/body/div[1]/div/div/main/div/div/div/div[1]/h2")
      .getText("/html/body/div[1]/div/div/main/div/div/div/div[1]/h2", function(text) {
      this.assert.equal(text.value, 'About')
      })
      .useCss()
      .end()
  },


'verify that contact page loads with the correct title and all elements are present': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .useXpath()
      .click("/html/body/div[1]/div/div/header/div[3]/nav/a[3]")
      .pause(1000)
      .assert.elementPresent("/html/body/div[1]/div/div/main/div/div/div/div[1]/h2")
      .getText("/html/body/div[1]/div/div/main/div/div/div/div[1]/h2", function(text) {
        this.assert.equal(text.value, 'Contact')
      })
      .assert.elementPresent("/html/body/div[1]/div/div/main/div/div/div/div[3]/form/div[1]")
      .getText("/html/body/div[1]/div/div/main/div/div/div/div[3]/form/div[1]", function(text) {
        this.assert.equal(text.value, 'Name')
      })
      .assert.elementPresent("/html/body/div[1]/div/div/main/div/div/div/div[3]/form/div[2]")
      .getText("/html/body/div[1]/div/div/main/div/div/div/div[3]/form/div[2]", function(text) {
        this.assert.equal(text.value, 'Email')
      })
       .assert.elementPresent("/html/body/div[1]/div/div/main/div/div/div/div[3]/form/div[3]")
       .getText("/html/body/div[1]/div/div/main/div/div/div/div[3]/form/div[3]", function(text) {
        this.assert.equal(text.value, 'Note')
      })
      .assert.elementPresent("/html/body/div[1]/div/div/main/div/div/div/div[3]/form/p/button")
      .getText("/html/body/div[1]/div/div/main/div/div/div/div[3]/form/p/button", function(text) {
       this.assert.equal(text.value, 'SUBMIT')
       })
      .pause(1000)
      .useCss()
      .end()
  },


 'verify that selecting help page does not break/change home page' : function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .click(helpPage.elements.helpLink)
      .getText(helpPage.elements.helpTitle, function(text) {
        this.assert.equal(text.value, 'Help')
      })
      .useXpath()
      .click("/html/body/div[1]/div/div/header/div[3]/nav/a[1]") //verifying if clicking on 'Home' returns to Home page;
      .useCss()
      .waitForElementVisible(ui.dev.select, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .pause(2000)
      .end()
  },


  'verify that selecting privacy page does not break/change home page': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .click(privacyPage.elements.privacyLink)
      .getText(privacyPage.elements.privacyTitle, function(text) {
      this.assert.equal(text.value, 'Privacy & Terms')
      })
      .useXpath()
      .click("/html/body/div[1]/div/div/header/div[3]/nav/a[1]") //verifying if clicking on 'Home' returns to Home page;
      .useCss()
      .waitForElementVisible(ui.dev.select, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .pause(2000)
      .end()
 },


 'verify that selecting privacy page, then selecting help page, then going back to Home page does not break pages': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .click(privacyPage.elements.privacyLink)
      .getText(privacyPage.elements.privacyTitle, function(text) {
        this.assert.equal(text.value, 'Privacy & Terms')
      })
      .click(helpPage.elements.helpLink)
      .getText(helpPage.elements.helpTitle, function(text) {
        this.assert.equal(text.value, 'Help')
      })
      .useXpath()
      .click("/html/body/div[1]/div/div/header/div[3]/nav/a[1]") //verifying if clicking on 'Home' returns to Home page;
      .useCss()
      .waitForElementVisible(ui.dev.select, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .pause(2000)
      .end()

 },


'verify that selecting contact page, then selecting about page, then going back to Home page does not break/change pages': function (browser) {
    browser
      .url(browser.globals.devServerURL)
      .waitForElementVisible(ui.dev.select, 5000)
      .useXpath()
      .click("/html/body/div[1]/div/div/header/div[3]/nav/a[3]")
      .pause(1000)
      .assert.elementPresent("/html/body/div[1]/div/div/main/div/div/div/div[1]/h2")
      .getText("/html/body/div[1]/div/div/main/div/div/div/div[1]/h2", function(text) {
        this.assert.equal(text.value, 'Contact')
      })
      .click("/html/body/div[1]/div/div/header/div[3]/nav/a[2]")
      .pause(1000)
      .assert.elementPresent("/html/body/div[1]/div/div/main/div/div/div/div[1]/h2")
      .getText("/html/body/div[1]/div/div/main/div/div/div/div[1]/h2", function(text) {
       this.assert.equal(text.value, 'About')
      })
      .click("/html/body/div[1]/div/div/header/div[3]/nav/a[1]") //verifying if clicking on 'Home' returns to Home page;
      .useCss()
      .waitForElementVisible(ui.dev.select, 5000)
      .assert.elementPresent(personPage.elements.randomPersonButton)
      .pause(2000)
      .end()

  }



}

