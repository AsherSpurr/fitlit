/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateMotivation: () => (/* binding */ animateMotivation),
/* harmony export */   averageOunces: () => (/* binding */ averageOunces),
/* harmony export */   calculateAverageSteps: () => (/* binding */ calculateAverageSteps),
/* harmony export */   calculateAvgHours: () => (/* binding */ calculateAvgHours),
/* harmony export */   calculateAvgQuality: () => (/* binding */ calculateAvgQuality),
/* harmony export */   currentDate: () => (/* binding */ currentDate),
/* harmony export */   findDailySleep: () => (/* binding */ findDailySleep),
/* harmony export */   findRecentWeek: () => (/* binding */ findRecentWeek),
/* harmony export */   findTodaysDate: () => (/* binding */ findTodaysDate),
/* harmony export */   findWeeklyHours: () => (/* binding */ findWeeklyHours),
/* harmony export */   findWeeklyQuality: () => (/* binding */ findWeeklyQuality),
/* harmony export */   getRandomUser: () => (/* binding */ getRandomUser),
/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),
/* harmony export */   grabHydrationData: () => (/* binding */ grabHydrationData),
/* harmony export */   initiateHydrationFunctions: () => (/* binding */ initiateHydrationFunctions),
/* harmony export */   initiateSleepFunctions: () => (/* binding */ initiateSleepFunctions),
/* harmony export */   initiateUserFunctions: () => (/* binding */ initiateUserFunctions),
/* harmony export */   weeklyOunces: () => (/* binding */ weeklyOunces)
/* harmony export */ });
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _src_images_layered_dumbell_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _src_images_light_dumbell_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _src_images_profile_image1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _src_images_profile_image2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _src_images_profile_image3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _src_images_profile_image4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var _src_images_profile_image5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
/* harmony import */ var _src_images_profile_image6_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var _src_images_profile_image7_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17);
/* harmony import */ var _src_images_profile_image8_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18);
/* harmony import */ var _src_images_profile_image9_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19);
/* harmony import */ var _src_images_profile_image10_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20);
/* harmony import */ var _src_images_water_drop_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21);
/* harmony import */ var _src_images_sleepy_star_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(22);
/* harmony import */ var _src_images_water_droplet_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23);
/* harmony import */ var _src_images_moon_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24);
/* harmony import */ var _src_images_space_ship_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(25);
/* harmony import */ var _src_images_wavy_corner_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26);
/* harmony import */ var _src_images_planet_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(27);
/* harmony import */ var _src_images_splatter_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(28);






//(also need to link to it in the index.html)























/* <><> API Data <><> */
function initiateUserFunctions(userData) {
    getRandomUser(userData)
    calculateAverageSteps(userData)
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displaySteps)(userData)
}

function initiateHydrationFunctions(hydrationData) {
    averageOunces(hydrationData)
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayHydrationData)(hydrationData)
}

function initiateSleepFunctions(sleepData) {
    calculateAvgHours(sleepData)
    calculateAvgQuality(sleepData)
    findDailySleep(sleepData)
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displaySleepData)(sleepData)
}

/* <><> Main User Info <><> */
var randomUserId;

function getRandomUser(userData) {
    randomUserId = Math.floor(Math.random() * userData.users.length)
    getUserInfo(randomUserId, userData)

}

function getUserInfo(randomUserId, userData) {
    let targetUser = userData.users.find((user) => {
        return user.id === randomUserId
    })
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayUserData)(targetUser)
    findFriends(targetUser, userData)
}

function findFriends(targetUser, userData) {
    var friends = [];
    let friendIds = targetUser.friends
    for (var i = 0; i < friendIds.length; i++) {
        let friend = userData.users.find(user => {
            return user.id === friendIds[i]
        })
        friends.push(friend.name)
    }
    (0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayFriends)(friends)
}

/* <><> Average Steps <><> */
function calculateAverageSteps(userData) {
    let totalSteps = 0
    userData.users.forEach(user => {
        totalSteps += user.dailyStepGoal
    })
    return totalSteps / userData.users.length
}

/* <><> Hydration Functions <><> */
function averageOunces(hydration) {
    var targetUser = hydration.hydrationData.filter(user => user.userID === randomUserId)
    var sum = targetUser.reduce((acc, user) => {
        acc += user.numOunces
        return acc
    }, 0)
    return Math.round(sum / targetUser.length)
}

function weeklyOunces(hydration) {
    let week = []
    let targetUser = hydration.hydrationData.filter((user) => {
        return user.userID === randomUserId
    });
    for (var i = 0; i < 7; i++) {
        let day = {}
        day.date = targetUser[i].date
        day.numOunces = targetUser[i].numOunces
        week.push(day)
    }
    return week
};

/* <><> Sleep Functions */
function findDailySleep(sleep) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    });
    let index = targetUser.length - 1
    return `${targetUser[index].hoursSlept}hrs | ${targetUser[index].sleepQuality} quality`
};

function calculateAvgHours(sleep) {
    let totalHours = 0
    let userHoursSlept = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    }).map((day) => { return day.hoursSlept })
    userHoursSlept.forEach((day) => {
        totalHours += day
    })
    return Math.round(totalHours / userHoursSlept.length)
}

function calculateAvgQuality(sleep) {
    let totalSleepQuality = 0
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    }).map((day) => { return day.sleepQuality })
    targetUser.forEach((day) => {
        totalSleepQuality += day
    })
    return Math.round(totalSleepQuality / targetUser.length)
}

function findRecentWeek(sleep) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    }).reverse()
    let recentWeekStart = targetUser[6].date
    return recentWeekStart
}

function findWeeklyHours(sleep, day) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    })
    let startDateIndex = targetUser.findIndex((log) => {
        return log.date === day
    })
    let weeklySleep = []
    for (var i = startDateIndex; i < (startDateIndex + 7); i++) {
        weeklySleep.push({ date: targetUser[i].date, hours: targetUser[i].hoursSlept })
    }
    return weeklySleep
}

function findWeeklyQuality(sleep, day) {
    let targetUser = sleep.sleepData.filter((user) => {
        return user.userID === randomUserId
    })
    let startDateIndex = targetUser.findIndex((log) => {
        return log.date === day
    })
    let weeklyQuality = []
    for (var i = startDateIndex; i < (startDateIndex + 7); i++) {
        weeklyQuality.push({ date: targetUser[i].date, quality: targetUser[i].sleepQuality })
    }
    return weeklyQuality
}

/* <><> POST Functions */
var currentDate;
function grabHydrationData(selectedDate, ounces) {
    let dateParsed = selectedDate.replace('-', '/').replace('-', '/')
    let userPost = {
        userID: randomUserId,
        date: dateParsed,
        numOunces: ounces
    }
    ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_2__.displayDailyHydration)(userPost)
    if (userPost.date && userPost.numOunces) {
        (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.postData)(userPost)
    }
}

function findTodaysDate() {
    let date = new Date()
    let day = String(date.getDate())
    let month = String(date.getMonth() + 1)
    let year = String(date.getFullYear())
    if (month < 10) {
        currentDate = `${year}/0${month}/${day}`
    } else {
        currentDate = `${year}/${month}/${day}`
    }
    return currentDate
}

function animateMotivation(inputValue) {
    storeMotivation(inputValue)
    let value = inputValue
    switch (value) {
        case '0':
            _domUpdates__WEBPACK_IMPORTED_MODULE_2__.takeOff.style.animationName = "anim-0";
            break;
        case '2':
            _domUpdates__WEBPACK_IMPORTED_MODULE_2__.takeOff.style.animationName = "anim-1";
            break;
        case '4':
            _domUpdates__WEBPACK_IMPORTED_MODULE_2__.takeOff.style.animationName = "anim-2";
            break;
        case '6':
            _domUpdates__WEBPACK_IMPORTED_MODULE_2__.takeOff.style.animationName = "anim-3";
            break;
        case '8':
            _domUpdates__WEBPACK_IMPORTED_MODULE_2__.takeOff.style.animationName = "anim-4";
            break;
        case '10':
            _domUpdates__WEBPACK_IMPORTED_MODULE_2__.takeOff.style.animationName = "anim-5";
            break;
    }
}

function storeMotivation(inputValue) {
    let dateN = new Date()
    let motivation = {
        userID: randomUserId,
        motivation: inputValue,
        date: dateN
    }
    return motivation
}






/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllData: () => (/* binding */ getAllData),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



function getAllData() {
    const users = fetch('http://localhost:3001/api/v1/users')
        .then(resp => resp.json())

    const hydration = fetch('http://localhost:3001/api/v1/hydration')
        .then(resp => resp.json())

    const sleep = fetch('http://localhost:3001/api/v1/sleep')
        .then(resp => resp.json())

    Promise.all([users, hydration, sleep])
        .then((data) => {
            let [users, hydration, sleep] = data
            ;(0,_scripts__WEBPACK_IMPORTED_MODULE_0__.initiateUserFunctions)(users)
            ;(0,_scripts__WEBPACK_IMPORTED_MODULE_0__.initiateHydrationFunctions)(hydration)
            ;(0,_scripts__WEBPACK_IMPORTED_MODULE_0__.initiateSleepFunctions)(sleep)
        })
        .catch(error => console.log(error))
}

function postData(userPost) {
    fetch('http://localhost:3001/api/v1/hydration', {
        method: 'POST',
        body: JSON.stringify(userPost),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .catch(err => {
        console.log(err)
        ;(0,_domUpdates__WEBPACK_IMPORTED_MODULE_1__.displayError)()
    })
}




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateAvgQuality: () => (/* reexport safe */ _scripts_js__WEBPACK_IMPORTED_MODULE_0__.calculateAvgQuality),
/* harmony export */   displayDailyHydration: () => (/* binding */ displayDailyHydration),
/* harmony export */   displayError: () => (/* binding */ displayError),
/* harmony export */   displayFriends: () => (/* binding */ displayFriends),
/* harmony export */   displayHydrationData: () => (/* binding */ displayHydrationData),
/* harmony export */   displaySleepData: () => (/* binding */ displaySleepData),
/* harmony export */   displaySteps: () => (/* binding */ displaySteps),
/* harmony export */   displayUserData: () => (/* binding */ displayUserData),
/* harmony export */   takeOff: () => (/* binding */ takeOff)
/* harmony export */ });
/* harmony import */ var _scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _apiCalls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
//NOTE: Your DOM manipulation will occur in this file






const error = document.querySelector('.error')

const username = document.querySelector('.user-name')
const address = document.querySelector('.address-cont')
const strideData = document.querySelector('.stride-data')
const stepGoal = document.querySelector('.steps-goal-data')
const avgStepGoal = document.querySelector('.global-steps-goal-data')
const userFriends = document.querySelector('.user-friends')

const dailyHydration = document.querySelector('.daily-hydration-label')
const weeklyHydrationDate = document.querySelectorAll('.hydration-date')
const hydrationSelect = document.querySelector('.weekly-hydration-select')

const hydrationSubmit = document.querySelector('.hydration-submit')
const hydrationFormDate = document.querySelector('#hydration-date')
const hydrationFormOunces = document.querySelector('#hydration-volume')

const weeklySleepDate = document.querySelectorAll('.sleep-date')
const sleepSelect = document.querySelector('.weekly-sleep-select')

const avgQualityData = document.querySelector('.avg-quality-data')
const avgHoursData = document.querySelector('.avg-hours-data')

const dailySleep = document.querySelector('.daily-sleep-data')

const sliderInput = document.querySelector('#slider')
const takeOff = document.querySelector('.take-off')

window.addEventListener('load', _apiCalls_js__WEBPACK_IMPORTED_MODULE_1__.getAllData)
hydrationSelect.addEventListener('change', () => { checkIfSelected(userHydration, weeklyHoursSlept, weeklyQualitySlept) })
sleepSelect.addEventListener('change', () => { checkIfSelected(userHydration, weeklyHoursSlept, weeklyQualitySlept) })
hydrationSubmit.addEventListener('click', function (event) {
  event.preventDefault()
  ;(0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.findTodaysDate)()
  ;(0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.grabHydrationData)(hydrationFormDate.value, hydrationFormOunces.value)
  resetInputField()
})

hydrationFormDate.addEventListener('click', removeError)
hydrationFormOunces.addEventListener('click', removeError)

sliderInput.addEventListener('change', () => { ;(0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.animateMotivation)(sliderInput.value) })

function displayError() {
  error.innerHTML = "<span style='color: red'>There was an unexpected error please try again</span>"
}

function removeError() {
  error.innerText = ""
}

function displayUserData(userInfo) {
  username.innerText = userInfo.name
  strideData.innerText = userInfo.strideLength
  stepGoal.innerText = userInfo.dailyStepGoal
  address.innerHTML +=
    `<address class='contact-info'>
    Email: ${userInfo.email} <br>
    Address: ${userInfo.address} <br>
  </address>`
}
function displayFriends(friends) {
  var listContent = '';
  for (var i = 0; i < friends.length; i++) {
    listContent += `<li class='friend'>${friends[i]}</li>`;
  }
  userFriends.innerHTML = listContent;
}


function displaySteps(userData) {
  avgStepGoal.innerText = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.calculateAverageSteps)(userData)
}

function checkIfSelected(a, b, c) {
  let p = document.getElementById('hydration-data')
  let x = document.querySelector('.weekly-hydration-select').value
  let tdHours = document.querySelector('.hours-slept')
  let tdQuality = document.querySelector('.quality-slept')
  let v = document.querySelector('.weekly-sleep-select').value

  if (x !== 'Click to Select a Date') {
    let targetObj = a.find((user) => {
      return user.date === x
    })
    let data = targetObj.numOunces
    p.innerText = data
  } else {
    p.innerText = '----'
  }

  if (v !== 'Click to Select a Date') {
    let targetObjHours = b.find((user) => {
      return user.date === v
    })
    let targetObjQuality = c.find((user) => {
      return user.date === v
    })
    let dataHours = targetObjHours.hours
    tdHours.innerText = dataHours

    let dataQuality = targetObjQuality.quality
    tdQuality.innerText = dataQuality
  } else {
    tdHours.innerText = '----'
    tdQuality.innerText = '----'
  }
}

let userHydration;

function displayHydrationData(hydration) {
  userHydration = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.weeklyOunces)(hydration)


  let dates = userHydration.map((object) => {
    return object.date
  })
  weeklyHydrationDate[0].innerText = dates[0]
  weeklyHydrationDate[1].innerText = dates[1]
  weeklyHydrationDate[2].innerText = dates[2]
  weeklyHydrationDate[3].innerText = dates[3]
  weeklyHydrationDate[4].innerText = dates[4]
  weeklyHydrationDate[5].innerText = dates[5]
  weeklyHydrationDate[6].innerText = dates[6]

  weeklyHydrationDate[0].value = dates[0]
  weeklyHydrationDate[1].value = dates[1]
  weeklyHydrationDate[2].value = dates[2]
  weeklyHydrationDate[3].value = dates[3]
  weeklyHydrationDate[4].value = dates[4]
  weeklyHydrationDate[5].value = dates[5]
  weeklyHydrationDate[6].value = dates[6]
}

function displayDailyHydration(userPost) {
  if (userPost.numOunces && (userPost.date === _scripts_js__WEBPACK_IMPORTED_MODULE_0__.currentDate)) {
    dailyHydration.innerText = `${userPost.numOunces} ounces of water!`
  } else if (userPost.date !== _scripts_js__WEBPACK_IMPORTED_MODULE_0__.currentDate) {
    error.innerHTML = "<span style='color: red; font-size: 1.5rem;'>Please enter today's date!</span>"
  } else if (!userPost.numOunces) {
    error.innerHTML = "<span style='color: red; font-size: 1.5rem;'>Please enter ounces drank!</span>"
  }
}

function resetInputField() {
  hydrationFormDate.value = ''
  hydrationFormOunces.value = ''
}

let weeklyHoursSlept;
let weeklyQualitySlept;

function displaySleepData(sleep) {
  let date = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.findRecentWeek)(sleep)
  weeklyHoursSlept = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.findWeeklyHours)(sleep, date)
  weeklyQualitySlept = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.findWeeklyQuality)(sleep, date)
  dailySleep.innerText = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.findDailySleep)(sleep)

  let dates = weeklyHoursSlept.map((object) => {
    return object.date
  })
  weeklySleepDate[0].innerText = dates[0]
  weeklySleepDate[1].innerText = dates[1]
  weeklySleepDate[2].innerText = dates[2]
  weeklySleepDate[3].innerText = dates[3]
  weeklySleepDate[4].innerText = dates[4]
  weeklySleepDate[5].innerText = dates[5]
  weeklySleepDate[6].innerText = dates[6]

  weeklySleepDate[0].value = dates[0]
  weeklySleepDate[1].value = dates[1]
  weeklySleepDate[2].value = dates[2]
  weeklySleepDate[3].value = dates[3]
  weeklySleepDate[4].value = dates[4]
  weeklySleepDate[5].value = dates[5]
  weeklySleepDate[6].value = dates[6]

  avgQualityData.innerText = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.calculateAvgQuality)(sleep)

  avgHoursData.innerText = (0,_scripts_js__WEBPACK_IMPORTED_MODULE_0__.calculateAvgHours)(sleep)
}



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 5 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  display: flex;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #BC74F3;\n  color: #3d3d4e;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  font-family: \"Bungee\", sans-serif;\n  transform: scale(0.9);\n  border: 5px solid #3d3d4e;\n  border-radius: 18px;\n}\n\nmain {\n  overflow-wrap: break-word;\n  background-color: #FBF5E7;\n  width: 100%;\n  height: 180%;\n  box-shadow: 40px 40px #3d3d4e;\n  border-radius: 18px;\n}\n\nheader {\n  display: flex;\n  background-color: #FBF5E7;\n  height: 5%;\n  border-radius: 12px;\n}\n\n.dumbell-image {\n  margin-left: 0.5em;\n  margin-top: 1em;\n}\n\nh1 {\n  font-size: 2em;\n  margin-left: 0.5em;\n  margin-top: 0;\n  padding-top: 0.5em;\n  display: flex;\n}\n\nnav {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  margin-left: 1em;\n  align-items: center;\n}\n\n.link {\n  margin-left: 1em;\n  font-size: larger;\n  color: #3d3d4e;\n}\n\n.link:hover {\n  color: #BC74F3;\n}\n\nselect:hover {\n  cursor: pointer;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.link:hover {\n  color: #BC74F3;\n}\n\n/*<><> Main user Data <><>*/\n/*<> Left <>*/\n.user-data {\n  background-color: #FBF5E7;\n  display: flex;\n  justify-content: space-between;\n  min-height: 80vh;\n  overflow-x: hidden;\n}\n\n.user-data-left {\n  display: flex;\n  flex-direction: column;\n  margin-left: 4%;\n  margin-bottom: 6em;\n  margin-top: 6em;\n  width: 30%;\n  padding-left: 3em;\n  overflow-x: visible;\n}\n\n.name-cont {\n  width: auto;\n  height: auto;\n  overflow-x: visible;\n  overflow-wrap: break-word;\n}\n\n.name-cont {\n  width: auto;\n  height: auto;\n  overflow-x: visible;\n  overflow-wrap: break-word;\n}\n\n.user-name {\n  font-size: 3.5rem;\n  font-family: \"Bungee\", sans-serif;\n  filter: none;\n  text-align: left;\n}\n\n.address-cont {\n  font-family: \"DotGothic16\", sans-serif;\n  font-style: normal;\n  float: right;\n  padding-right: 2em;\n  padding-bottom: 2em;\n  overflow-x: visible;\n  font-size: 1.4em;\n}\n\n.user-friends {\n  background-color: #FBE5A8;\n  font-size: 2rem;\n  width: 10em;\n  height: 6em;\n  margin-top: 2em;\n  padding-top: 1em;\n  border-radius: 10px;\n  box-shadow: -8px 13px 20px #3d3d4e;\n}\n\n.friend {\n  font-size: 1rem;\n  margin-left: 8%;\n  margin-top: 2%;\n}\n\n.profile-image {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n/*<> Right <>*/\n.user-data-right {\n  display: flex;\n  justify-content: right;\n  width: 40%;\n  margin-top: 4em;\n}\n\ndl {\n  display: flex;\n  flex-direction: column;\n}\n\ndt {\n  height: 20%;\n  margin-left: 0.5em;\n  text-align: center;\n  padding-bottom: 0.5em;\n  font-size: 150%;\n  border-radius: 20px 20px 0px;\n}\n\n.stride-cont,\n.steps-goal-cont,\n.global-steps-goal-cont {\n  display: flex;\n  flex-direction: row-reverse;\n  height: 50%;\n}\n\n.data {\n  padding-top: 20px;\n  font-size: 2em;\n}\n\n@keyframes stride-animation {\n  from {\n    width: 1vw;\n  }\n  to {\n    width: 15vw;\n  }\n}\n@keyframes steps-goal-animation {\n  from {\n    width: 1vw;\n  }\n  to {\n    width: 25vw;\n  }\n}\n@keyframes global-steps-goal-animation {\n  from {\n    width: 1vw;\n  }\n  to {\n    width: 35vw;\n  }\n}\n.stride-label {\n  background-color: #D4B7F8;\n  padding: 15px 0px;\n  padding: 15px 0px;\n  width: 15vw;\n  animation-name: stride-animation;\n  animation-duration: 0.5s;\n  animation-direction: normal;\n  box-shadow: 14px 14px 20px #3d3d4e;\n}\n\n.steps-goal-label {\n  background-color: #FBE5A8;\n  padding: 15px 0px;\n  width: 25vw;\n  animation-name: steps-goal-animation;\n  animation-duration: 1s;\n  animation-direction: normal;\n  box-shadow: 14px 14px 20px #3d3d4e;\n}\n\n.global-steps-goal-label {\n  background-color: #B7DAF7;\n  padding: 15px 0px;\n  width: 35vw;\n  animation-name: global-steps-goal-animation;\n  animation-duration: 1.5s;\n  animation-direction: normal;\n  box-shadow: 14px 14px 20px #3d3d4e;\n}\n\n.banner-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FAC8EC;\n  border-top: 3px #3d3d4e solid;\n  border-bottom: 3px #3d3d4e solid;\n  height: 15vh;\n  font-size: 2.5em;\n  font-weight: 500;\n  font-family: \"Sixtyfour\", sans-serif;\n  margin-bottom: 20px;\n}\n\nh2 {\n  font-family: \"Bungee Outline\", sans-serif;\n  font-size: 7em;\n  text-align: right;\n  padding-right: 5vw;\n  margin-top: 2.5vh;\n  margin-bottom: 2.5vh;\n  color: #3d3d4e;\n  height: min-content;\n  filter: drop-shadow(1px 105px 1px #a7a7a7);\n}\n\n.hydration-container {\n  display: flex;\n  flex-direction: row-reverse;\n  height: 100vh;\n  justify-content: space-between;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  width: 100%;\n}\n\n.hydration-right-cont {\n  width: 50vw;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.water-img-cont {\n  position: relative;\n  margin-right: 20em;\n  text-align: center;\n  margin-top: 3em;\n}\n\n#hydration-data {\n  font-size: 5em;\n  position: absolute;\n  top: 50%;\n  left: 20%;\n}\n\n.hydration-left-cont {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 0;\n  float: inline-start;\n}\n\nh3 {\n  margin: 0;\n  font: 1em;\n}\n\n.banner-text {\n  font-weight: 200;\n  font-size: 1.1em;\n}\n\n.weekly-hydration-select {\n  border-radius: 20px 20px 20px 0px;\n  background-color: #D4B7F8;\n  width: 45vw;\n  height: 20vh;\n  font-family: \"Bungee\", sans-serif;\n  text-align: center;\n  font-size: 200%;\n  color: #3d3d4e;\n  box-shadow: 10px 14px 20px #3d3d4e;\n  margin: 5% 0%;\n}\n\n.daily-hydration-cont {\n  border-radius: 20px 20px 20px 0px;\n  background-color: #B7DAF7;\n  text-align: center;\n  padding-top: 5%;\n  width: 35vw;\n  height: 18vh;\n  margin: 5% 0%;\n  box-shadow: 10px 14px 20px #3d3d4e;\n}\n\n.hydration-user-input {\n  border-radius: 20px 20px 20px 0px;\n  background-color: #FBE5A8;\n  padding-top: 5%;\n  width: 35vw;\n  height: 20vh;\n  margin-bottom: 5%;\n  margin-top: 10%;\n  box-shadow: 10px 14px 20px #3d3d4e;\n  font-size: 175%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hydration-inputs {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding-top: 1em;\n  font-size: 80%;\n}\n\nlabel {\n  margin-left: 1em;\n}\n\ninput {\n  width: 9em;\n  margin-left: 1em;\n}\ninput:hover {\n  cursor: pointer;\n}\n\n.hydration-submit {\n  margin-left: 2em;\n  margin-top: 1.5em;\n  height: 3em;\n  width: 7em;\n  border-radius: 10px;\n  font-size: medium;\n  font-family: \"Bungee\", sans-serif;\n}\n.hydration-submit:hover {\n  cursor: pointer;\n  background-color: #e2b948;\n}\n\n.daily-hydration-label {\n  font-size: xx-large;\n}\n\n/*<><><><> SLEEP <><><><>*/\n#sleep-banner {\n  margin-top: 1.4em;\n  width: 100%;\n}\n\n.main-sleep-container {\n  height: 120vh;\n}\n\n.sleep-cont-left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 0;\n  float: left;\n}\n\n.sleep-heading {\n  text-align: left;\n  padding-left: 5vw;\n  margin-top: 4%;\n  position: relative;\n}\n\n.moon-img-cont {\n  display: flex;\n  margin-inline-start: 80px;\n  margin-inline-end: 40px;\n}\n\n.sleep-data-cont {\n  margin-left: 200px;\n  font-size: xx-large;\n}\n\ntable,\ntr,\nth {\n  padding: 10px 10px;\n  text-align: center;\n}\n\n.hours-slept {\n  border-right: 2px #3d3d4e solid;\n}\n\n.sleep-cont-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  min-height: 100%;\n}\n\n.daily-sleep-cont {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px 20px 0px 20px;\n  background-color: #B7DAF7;\n  padding: 3%;\n  width: 35vw;\n  height: 12vh;\n  margin-bottom: 0;\n  margin-top: 10%;\n  box-shadow: 6px 13px 20px #3d3d4e;\n}\n\n.daily-sleep-label {\n  margin: 0;\n}\n\n.daily-sleep-data {\n  font-size: xx-large;\n  margin: 0;\n}\n\n.avg-sleep-cont {\n  border-radius: 20px 20px 0px 20px;\n  background-color: #B7DAF7;\n  padding-top: 10%;\n  padding-bottom: 0;\n  width: 46vw;\n  height: 10vh;\n  margin-right: 0;\n  box-shadow: 6px 13px 20px #3d3d4e;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 90px;\n}\n\n.avg-quality-data {\n  margin: 0;\n  font-size: xx-large;\n}\n\n.avg-hours-data {\n  margin: 0;\n  font-size: xx-large;\n}\n\n.avg-hours-label {\n  margin-top: 20px;\n}\n\n.weekly-sleep-select {\n  border-radius: 20px 20px 0px 20px;\n  background-color: #D4B7F8;\n  width: 55vw;\n  height: 20vh;\n  font-family: \"Bungee\", sans-serif;\n  text-align: center;\n  font-size: 200%;\n  color: #3d3d4e;\n  box-shadow: 6px 13px 20px #3d3d4e;\n}\n\n.moon-png,\n.water-png {\n  height: 100%;\n  width: 100%;\n  padding-right: 2vw;\n}\n\n.motivation {\n  max-height: 120vh;\n}\n\n.motivation-heading {\n  margin-bottom: 15%;\n  position: static;\n  z-index: 1;\n}\n\n.motivation-left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 0;\n  float: left;\n  width: fit-content;\n  flex-wrap: nowrap;\n}\n\n.space-ship-png {\n  height: 50%;\n  width: 50%;\n  position: sticky;\n  top: 10%;\n}\n\n.planet-png {\n  z-index: 0;\n}\n\n.take-off-cont {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  bottom: 0px;\n}\n\n.take-off {\n  border-radius: 20px 20px 0px 0px;\n  background-color: #D4B7F8;\n  width: 5vw;\n  height: 10vh;\n  position: sticky;\n  animation-duration: 5s;\n  animation-direction: normal;\n  animation-fill-mode: forwards;\n}\n\n.motivation-right {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  float: right;\n  min-height: 100%;\n  width: fit-content;\n}\n\n.slide-cont {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.slider {\n  width: 30vw;\n  height: 10vh;\n  border: 0;\n  cursor: pointer;\n  position: absolute;\n  top: 25%;\n  left: 5%;\n  z-index: 1;\n}\n\n.slider-label {\n  position: absolute;\n  top: 22%;\n  left: 7%;\n  font-size: larger;\n}\n\n.wavy-corner-png {\n  width: 60vw;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  margin-bottom: -260px;\n  border-radius: 3%;\n  margin-top: 100px;\n  opacity: 80%;\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n  background-color: transparent;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 300px;\n  height: 50px;\n  background: #FFDC7A;\n  border: none;\n  border-radius: 15px;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 50px;\n  width: 50px;\n  background-color: #FAC8EC;\n  border-radius: 15px;\n  margin-top: -1px;\n}\n\ninput[type=range]:focus {\n  outline: none;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  border: 2px #3d3d4e solid;\n}\n\ninput[type=range]:focus::-webkit-slider-thumb {\n  border: 2px #3d3d4e solid;\n}\n\ninput[type=range]::-moz-range-track {\n  width: 500px;\n  height: 50px;\n  background: #FFDC7A;\n  border: none;\n  border-radius: 15px;\n}\n\ninput[type=range]::-moz-range-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 50px;\n  width: 50px;\n  background-color: #FAC8EC;\n  border-radius: 15px;\n  margin-top: -1px;\n}\n\n@keyframes anim-0 {\n  from {\n    height: 10vh;\n  }\n  to {\n    height: 10vh;\n  }\n}\n@keyframes anim-1 {\n  from {\n    height: 10vh;\n  }\n  to {\n    height: 25vh;\n  }\n}\n@keyframes anim-2 {\n  from {\n    height: 10vh;\n  }\n  to {\n    height: 35vh;\n  }\n}\n@keyframes anim-3 {\n  from {\n    height: 10vh;\n  }\n  to {\n    height: 45vh;\n  }\n}\n@keyframes anim-4 {\n  from {\n    height: 10vh;\n  }\n  to {\n    height: 55vh;\n  }\n}\n@keyframes anim-5 {\n  from {\n    height: 10vh;\n  }\n  to {\n    height: 65vh;\n  }\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iCAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;AACF;;AAEA;EACE,yBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,yBAAA;EACA,UAAA;EACA,mBAAA;AACF;;AAEA;EACE,kBAAA;EACA,eAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;AACF;;AAEA;EACE,UAAA;EACA,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,mBAAA;AACF;;AAEA;EACE,gBAAA;EACA,iBAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,eAAA;AACF;;AACA;EACE,cAAA;AAEF;;AACA,2BAAA;AACA,aAAA;AAEA;EACE,yBAAA;EACA,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;AACF;;AAEA;EACE,iBAAA;EACA,iCAAA;EACA,YAAA;EACA,gBAAA;AACF;;AAEA;EACE,sCAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;EACE,yBAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,kCAAA;AACF;;AAEA;EACE,eAAA;EACA,eAAA;EACA,cAAA;AACF;;AACA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;AAEF;;AACA,cAAA;AAEA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,4BAAA;AACF;;AAEA;;;EAGE,aAAA;EACA,2BAAA;EACA,WAAA;AACF;;AAEA;EACE,iBAAA;EACA,cAAA;AACF;;AAEA;EACE;IACE,UAAA;EACF;EAEA;IACE,WAAA;EAAF;AACF;AAGA;EACE;IACE,UAAA;EADF;EAIA;IACE,WAAA;EAFF;AACF;AAKA;EACE;IACE,UAAA;EAHF;EAMA;IACE,WAAA;EAJF;AACF;AAOA;EACE,yBAAA;EACA,iBAAA;EACA,iBAAA;EACA,WAAA;EACA,gCAAA;EACA,wBAAA;EACA,2BAAA;EACA,kCAAA;AALF;;AAQA;EACE,yBAAA;EACA,iBAAA;EACA,WAAA;EACA,oCAAA;EACA,sBAAA;EACA,2BAAA;EACA,kCAAA;AALF;;AAQA;EACE,yBAAA;EACA,iBAAA;EACA,WAAA;EACA,2CAAA;EACA,wBAAA;EACA,2BAAA;EACA,kCAAA;AALF;;AAQA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,6BAAA;EACA,gCAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,oCAAA;EACA,mBAAA;AALF;;AAQA;EACE,yCAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,cAAA;EACA,mBAAA;EACA,0CAAA;AALF;;AAQA;EACE,aAAA;EACA,2BAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AALF;;AAQA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;AALF;;AAQA;EACE,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;AALF;;AAQA;EACE,cAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;AALF;;AAQA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;E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","sourcesContent":["html {\n  display: flex;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #BC74F3;\n  color: #3d3d4e;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  font-family: 'Bungee', sans-serif;\n  transform: scale(0.90);\n  border: 5px solid #3d3d4e;\n  border-radius: 18px;\n}\n\nmain {\n  overflow-wrap: break-word;\n  background-color: #FBF5E7;\n  width: 100%;\n  height: 180%;\n  box-shadow: 40px 40px #3d3d4e;\n  border-radius: 18px;\n}\n\nheader {\n  display: flex;\n  background-color: #FBF5E7;\n  height: 5%;\n  border-radius: 12px;\n}\n\n.dumbell-image {\n  margin-left: .5em;\n  margin-top: 1em;\n}\n\nh1 {\n  font-size: 2em;\n  margin-left: .5em;\n  margin-top: 0;\n  padding-top: .5em;\n  display: flex;\n}\n\nnav {\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  margin-left: 1em;\n  align-items: center;\n}\n\n.link {\n  margin-left: 1em;\n  font-size: larger;\n  color: #3d3d4e;\n}\n\n.link:hover {\n  color: #BC74F3;\n} \n\nselect:hover {\n  cursor: pointer;\n}\n\nbutton {\n  cursor: pointer;\n}\n.link:hover {\n  color:#BC74F3\n}\n\n/*<><> Main user Data <><>*/\n/*<> Left <>*/\n\n.user-data {\n  background-color: #FBF5E7;\n  display: flex;\n  justify-content: space-between;\n  min-height: 80vh;\n  overflow-x: hidden;\n}\n\n.user-data-left {\n  display: flex;\n  flex-direction: column;\n  margin-left: 4%;\n  margin-bottom: 6em;\n  margin-top: 6em;\n  width: 30%;\n  padding-left: 3em;\n  overflow-x: visible;\n}\n\n.name-cont {\n  width: auto;\n  height: auto;\n  overflow-x: visible;\n  overflow-wrap: break-word;\n}\n\n.name-cont {\n  width: auto;\n  height: auto;\n  overflow-x: visible;\n  overflow-wrap: break-word;\n}\n\n.user-name {\n  font-size: 3.5rem;\n  font-family: 'Bungee', sans-serif;\n  filter: none;\n  text-align: left;\n}\n\n.address-cont {\n  font-family: 'DotGothic16', sans-serif;\n  font-style: normal;\n  float: right;\n  padding-right: 2em;\n  padding-bottom: 2em;\n  overflow-x: visible;\n  font-size: 1.4em;\n}\n\n.user-friends {\n  background-color: #FBE5A8;\n  font-size: 2rem;\n  width: 10em;\n  height: 6em;\n  margin-top: 2em;\n  padding-top: 1em;\n  border-radius: 10px;\n  box-shadow: -8px 13px 20px #3d3d4e;\n}\n\n.friend {\n  font-size: 1rem;\n  margin-left: 8%;\n  margin-top: 2%;\n}\n.profile-image {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n/*<> Right <>*/\n\n.user-data-right {\n  display: flex;\n  justify-content: right;\n  width: 40%;\n  margin-top: 4em;\n}\n\ndl {\n  display: flex;\n  flex-direction: column;\n}\n\ndt {\n  height: 20%;\n  margin-left: .5em;\n  text-align: center;\n  padding-bottom: .5em;\n  font-size: 150%;\n  border-radius: 20px 20px 0px;\n}\n\n.stride-cont,\n.steps-goal-cont,\n.global-steps-goal-cont {\n  display: flex;\n  flex-direction: row-reverse;\n  height: 50%;\n}\n\n.data {\n  padding-top: 20px;\n  font-size: 2em;\n}\n\n@keyframes stride-animation {\n  from {\n    width: 1vw;\n  }\n\n  to {\n    width: 15vw;\n  }\n}\n\n@keyframes steps-goal-animation {\n  from {\n    width: 1vw;\n  }\n\n  to {\n    width: 25vw;\n  }\n}\n\n@keyframes global-steps-goal-animation {\n  from {\n    width: 1vw;\n  }\n\n  to {\n    width: 35vw;\n  }\n}\n\n.stride-label {\n  background-color: #D4B7F8;\n  padding: 15px 0px;\n  padding: 15px 0px;\n  width: 15vw;\n  animation-name: stride-animation;\n  animation-duration: .5s;\n  animation-direction: normal;\n  box-shadow: 14px 14px 20px #3d3d4e;\n}\n\n.steps-goal-label {\n  background-color: #FBE5A8;\n  padding: 15px 0px;\n  width: 25vw;\n  animation-name: steps-goal-animation;\n  animation-duration: 1s;\n  animation-direction: normal;\n  box-shadow: 14px 14px 20px #3d3d4e;\n}\n\n.global-steps-goal-label {\n  background-color: #B7DAF7;\n  padding: 15px 0px;\n  width: 35vw;\n  animation-name: global-steps-goal-animation;\n  animation-duration: 1.5s;\n  animation-direction: normal;\n  box-shadow: 14px 14px 20px #3d3d4e;\n}\n\n.banner-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FAC8EC;\n  border-top: 3px #3d3d4e solid;\n  border-bottom: 3px #3d3d4e solid;\n  height: 15vh;\n  font-size: 2.5em;\n  font-weight: 500;\n  font-family: 'Sixtyfour', sans-serif;\n  margin-bottom: 20px;\n}\n\nh2 {\n  font-family: \"Bungee Outline\", sans-serif;\n  font-size: 7em;\n  text-align: right;\n  padding-right: 5vw;\n  margin-top: 2.5vh;\n  margin-bottom: 2.5vh;\n  color: #3d3d4e;\n  height: min-content;\n  filter: drop-shadow(1px 105px 1px #a7a7a7);\n}\n\n.hydration-container {\n  display: flex;\n  flex-direction: row-reverse;\n  height: 100vh;\n  justify-content: space-between;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  width: 100%;\n}\n\n.hydration-right-cont {\n  width: 50vw;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.water-img-cont {\n  position: relative;\n  margin-right: 20em;\n  text-align: center;\n  margin-top: 3em;\n}\n\n#hydration-data {\n  font-size: 5em;\n  position: absolute;\n  top: 50%;\n  left: 20%;                    \n}\n\n.hydration-left-cont {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 0;\n  float: inline-start;\n}\n\nh3 {\n  margin: 0;\n  font: 1em;\n}\n\n.banner-text {\n  font-weight: 200;\n  font-size: 1.1em;\n}\n\n.weekly-hydration-select {\n  border-radius: 20px 20px 20px 0px;\n  background-color: #D4B7F8;\n  width: 45vw;\n  height: 20vh;\n  font-family: 'Bungee', sans-serif;\n  text-align: center;\n  font-size: 200%;\n  color: #3d3d4e;\n  box-shadow: 10px 14px 20px #3d3d4e;\n  margin: 5% 0%;\n}\n\n.daily-hydration-cont {\n  border-radius: 20px 20px 20px 0px;\n  background-color: #B7DAF7;\n  text-align: center;\n  padding-top: 5%;\n  width: 35vw;\n  height: 18vh;\n  margin: 5% 0%;\n  box-shadow: 10px 14px 20px #3d3d4e;\n}\n\n.hydration-user-input {\n  border-radius: 20px 20px 20px 0px;\n  background-color: #FBE5A8;\n  padding-top: 5%;\n  width: 35vw;\n  height: 20vh;\n  margin-bottom: 5%;\n  margin-top: 10%;\n  box-shadow: 10px 14px 20px #3d3d4e;\n  font-size: 175%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hydration-inputs {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding-top: 1em;\n  font-size: 80%;\n}\n\nlabel {\n  margin-left: 1em;\n}\n\ninput {\n  width: 9em;\n  margin-left: 1em;\n\n    &:hover {\n    cursor: pointer;\n  }\n}\n\n.hydration-submit {\n  margin-left: 2em;\n  margin-top: 1.5em;\n  height: 3em;\n  width: 7em;\n  border-radius: 10px;\n  font-size:medium;\n  font-family: 'Bungee', sans-serif;\n  \n    &:hover {\n      cursor: pointer;\n      background-color: #e2b948;\n    }\n}\n\n.daily-hydration-label {\n  font-size: xx-large,\n}\n\n/*<><><><> SLEEP <><><><>*/\n#sleep-banner {\n  margin-top: 1.4em;\n  width: 100%;\n}\n\n.main-sleep-container {\n  height: 120vh;\n}\n\n.sleep-cont-left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 0;\n  float: left;\n}\n\n.sleep-heading {\n  text-align: left;\n  padding-left: 5vw;\n  margin-top: 4%;\n  position: relative;\n}\n\n.moon-img-cont {\n  display: flex;\n  margin-inline-start: 80px;\n  margin-inline-end: 40px;\n}\n\n.sleep-data-cont {\n  margin-left: 200px;\n  font-size: xx-large;\n}\n\ntable,\ntr,\nth {\n  padding: 10px 10px;\n  text-align: center;\n}\n\n.hours-slept {\n  border-right: 2px #3d3d4e solid;\n}\n\n.sleep-cont-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  min-height: 100%;\n}\n\n.daily-sleep-cont {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px 20px 0px 20px;\n  background-color: #B7DAF7;\n  padding: 3%;\n  width: 35vw;\n  height: 12vh;\n  margin-bottom: 0;\n  margin-top: 10%;\n  box-shadow: 6px 13px 20px #3d3d4e;\n}\n\n.daily-sleep-label {\n  margin: 0;\n}\n\n.daily-sleep-data {\n  font-size: xx-large;\n  margin: 0,\n}\n\n.avg-sleep-cont {\n  border-radius: 20px 20px 0px 20px;\n  background-color: #B7DAF7;\n  padding-top: 10%;\n  padding-bottom: 0;\n  width: 46vw;\n  height: 10vh;\n  margin-right: 0;\n  box-shadow: 6px 13px 20px #3d3d4e;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  padding-bottom: 90px;\n}\n\n.avg-quality-data {\n  margin: 0;\n  font-size: xx-large;\n}\n\n.avg-hours-data {\n  margin: 0;\n  font-size: xx-large;\n}\n\n.avg-hours-label {\n  margin-top: 20px;\n}\n\n.weekly-sleep-select {\n  border-radius: 20px 20px 0px 20px;\n  background-color: #D4B7F8;\n  width: 55vw;\n  height: 20vh;\n  font-family: 'Bungee', sans-serif;\n  text-align: center;\n  font-size: 200%;\n  color: #3d3d4e;\n  box-shadow: 6px 13px 20px #3d3d4e;\n}\n\n.moon-png,\n.water-png {\n  height: 100%;\n  width: 100%;\n  padding-right: 2vw;\n}\n\n.motivation {\n  max-height: 120vh;\n}\n\n.motivation-heading {\n  margin-bottom: 15%;\n  position: static;\n  z-index: 1;\n}\n\n.motivation-left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 0;\n  float: left;\n  width: fit-content;\n  flex-wrap: nowrap;\n}\n\n.space-ship-png {\n  height: 50%;\n  width: 50%;\n  position: sticky;\n  top: 10%;\n}\n\n.planet-png {\n  z-index: 0;\n}\n\n\n.take-off-cont {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  bottom: 0px;\n}\n\n.take-off {\n  border-radius: 20px 20px 0px 0px;\n  background-color: #D4B7F8;\n  width: 5vw;\n  height: 10vh;\n  position: sticky;\n  animation-duration: 5s;\n  animation-direction: normal;\n  animation-fill-mode: forwards;\n}\n\n.motivation-right {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  float: right;\n  min-height: 100%;\n  width: fit-content;\n}\n\n.slide-cont {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.slider {\n  width: 30vw;\n  height: 10vh;\n  border: 0;\n  cursor: pointer;\n  position: absolute;\n  top: 25%;\n  left: 5%;\n  z-index: 1;\n}\n\n.slider-label {\n  position: absolute;\n  top: 22%;\n  left: 7%;\n  font-size: larger;\n}\n\n.wavy-corner-png {\n  width: 60vw;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  margin-bottom: -260px;\n  border-radius: 3%;\n  margin-top: 100px;\n  opacity: 80%;\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n  background-color: transparent;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 300px;\n  height: 50px;\n  background: #FFDC7A;\n  border: none;\n  border-radius: 15px;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 50px;\n  width: 50px;\n  background-color: #FAC8EC;\n  border-radius: 15px;\n  margin-top: -1px;\n}\n\ninput[type=range]:focus {\n  outline: none;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  border: 2px #3d3d4e solid;\n}\n\ninput[type=range]:focus::-webkit-slider-thumb {\n  border: 2px #3d3d4e solid;\n}\n\ninput[type=range]::-moz-range-track {\n  width: 500px;\n  height: 50px;\n  background: #FFDC7A;\n  border: none;\n  border-radius: 15px;\n}\n\ninput[type=range]::-moz-range-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 50px;\n  width: 50px;\n  background-color: #FAC8EC;\n  border-radius: 15px;\n  margin-top: -1px;\n}\n\n@keyframes anim-0 {\n  from {\n    height: 10vh;\n  }\n\n  to {\n    height: 10vh;\n  }\n}\n\n@keyframes anim-1 {\n  from {\n    height: 10vh;\n  }\n\n  to {\n    height: 25vh;\n\n  }\n}\n\n@keyframes anim-2 {\n  from {\n    height: 10vh;\n  }\n\n  to {\n    height: 35vh;\n  }\n}\n\n@keyframes anim-3 {\n  from {\n    height: 10vh;\n  }\n\n  to {\n    height: 45vh;\n  }\n}\n\n@keyframes anim-4 {\n  from {\n    height: 10vh;\n  }\n\n  to {\n    height: 55vh;\n  }\n}\n\n@keyframes anim-5 {\n  from {\n    height: 10vh;\n  }\n\n  to {\n    height: 65vh;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 6 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 7 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/layered-dumbell.png");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/light-dumbell.png");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image1.png");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image2.png");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image3.png");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image4.png");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image5.png");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image6.png");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image7.png");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image8.png");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image9.png");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/profile-image10.png");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/water-drop.png");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/sleepy-star.png");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/water-droplet.png");

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/moon.png");

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/space-ship.png");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/wavy-corner.png");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/planet.png");

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/splatter.png");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map