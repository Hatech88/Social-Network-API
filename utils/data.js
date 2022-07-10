const usernames = [
    "halshareef",
    "test1",
    "mike189",
    "jimdust",
    "saraheve",
  ];
  
  const emails = [
    "har@gmail.com",
    "test@gmail.com",
    "mike189@gmail.com",
    "jim7@gmail.com",
    "sara89@yahoo.com",
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
  const getRandomUsername = () => `${getRandomArrItem(usernames)}`;
  
  const getRandomEmail = () => `${getRandomArrItem(emails)}`;
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsername, getRandomEmail };