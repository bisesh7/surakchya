const functions = {
  isNotEmpty: (string) => {
    return string.length > 0;
  },
  emailIsValid: (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  hasLowerCaseLetter: (string) => {
    const re = /[a-z]/;
    return re.test(string);
  },
  hasUpperCaseLetter: (string) => {
    const re = /[A-Z]/;
    return re.test(string);
  },
  hasNumber: (string) => {
    const re = /[0-9]/;
    return re.test(string);
  },
  hasAtLeastEightCharacters: (string) => {
    return string.length >= 8;
  },
  isSameStrings: (string1, string2) => {
    return string1 === string2;
  },
};

module.exports = functions;
