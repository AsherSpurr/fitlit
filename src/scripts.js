
import './apiCalls';
import './css/styles.css';
import { displayUserData, displayHydrationData, displaySteps, displaySleepData } from './domUpdates';

//(also need to link to it in the index.html)
import './images/turing-logo.png';
import '../src/images/layered-dumbell.png'
import '../src/images/light-dumbell.png'
import '../src/images/profile-image1.png'
import '../src/images/profile-image2.png'
import '../src/images/profile-image3.png'
import '../src/images/profile-image4.png'
import '../src/images/profile-image5.png'
import '../src/images/profile-image6.png'
import '../src/images/profile-image7.png'
import '../src/images/profile-image8.png'
import '../src/images/profile-image9.png'
import '../src/images/profile-image10.png'
import '../src/images/water-drop.png'
import '../src/images/sleepy-star.png'

/* <><> API Data <><> */

function initiateFunctions(userData, hydrationData, sleepData) {
    const randomUserId = getRandomUserId(userData);
    displayUserData(getUserInfo(randomUserId, userData));
    displaySteps(userData, randomUserId);
    displayHydrationData(hydrationData, randomUserId);
    displaySleepData(sleepData, randomUserId);
}

// function initiateUserFunctions(userData) {
//     getRandomUser(userData)
//     calculateAverageSteps(userData)
//     displaySteps(userData)
// }

// function initiateHydrationFunctions(hydrationData) {
//     averageOunces(hydrationData)
//     dailyOunces(hydrationData)
//     dailyOunces(hydrationData)
//     displayHydrationData(hydrationData)
// }

// function initiateSleepFunctions(sleepData) {
//     calculateAvgHours(sleepData)
//     calculateAvgQuality(sleepData)
//     findDailySleep(sleepData)
//     displaySleepData(sleepData)


/* <><> Main User Info <><> */
var randomUserId;

function getRandomUserId(userData) {
    return Math.floor(Math.random() * userData.users.length)
}

function getUserInfo(userId, userData) {
    return userData.users.find(user => user.id === userId)
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

function dailyOunces(hydration) {
    let targetUser = hydration.hydrationData.filter((user) => {
        return user.userID === randomUserId
    });
    let index = targetUser.length - 1
    return `${targetUser[index].numOunces} ounces of water!`
};

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

export {
    getUserInfo,
    calculateAverageSteps,
    getRandomUserId,
    averageOunces,
    dailyOunces,
    weeklyOunces,
    initiateFunctions,
    // initiateUserFunctions,
    // initiateHydrationFunctions,
    // initiateSleepFunctions,
    findDailySleep,
    findWeeklyHours,
    findWeeklyQuality,
    findRecentWeek,
    calculateAvgQuality,
    calculateAvgHours
}