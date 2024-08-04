
const atLeast = (name: string, val:number | string):string => {
  return `${name} must contain at least ${val} symbols.`
}
const noMore = (name: string, val:number | string):string => {
  return `${name} must contain no more ${val} symbols.`
}

const FORM_CONFIG = {
  LOGIN_MIN: 6,
  LOGIN_MAX: 24,

  PASSWORD_MIN: 12,
  PASSWORD_MAX: 64,

  MESSAGES: {
    LOGIN: {
      MAX: noMore("Login", 24),
      MIN: atLeast("Login",  6),
    },
    PASSWORD: {
      MAX: noMore("Password", 64),
      MIN: atLeast("Password", 12),
      NOT_EQUAL: "Passwords in two fields must be equal."
    },
    EMAIL: {
      NOT_EMAIL: "Email input must contain email string."
    }
  }
}


export default FORM_CONFIG;