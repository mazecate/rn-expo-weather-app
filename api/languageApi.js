import React, { useState, useEffect } from 'react';

let english = false;

const getCurrentLanguage = () => {
  return english;
}
const setLanguage = (inLang) => {
  english = inLang;
}

export default {
  getCurrentLanguage,
  setLanguage,
} 