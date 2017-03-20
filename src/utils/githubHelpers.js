'use strict';
import axios from 'axios';

let id = "tbazko";
let sec = "ca9e759047c27fc3688b9277954b1aab2c5e08c0";
let param = `?client_id=${id}&cient_secret=${sec}`;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username +'/repos' + param + '&per_page=100');
}

function getTotalStars(repos) {
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count
  }, 0);
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars,
  ]
}

let helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map((username) => {
      return getUserInfo(username);
    }))
    .then((info) => {
      return info.map((user) => {
        return user.data;
      });
    }).catch((err) => console.warn('Error in getPlayersInfo', err));
  },

  battle: function(players) {
    let playerOneData = getPlayersData(players[0]);
    let playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch((err) => console.warn('Error in getPlayersInfo: ', err));
  }
}

export default helpers;

