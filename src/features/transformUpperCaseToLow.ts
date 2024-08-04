export const transformUpperCaseToLow = (word: any | string) => {
  return word.charAt(0) + word.slice(1).toLowerCase()
}