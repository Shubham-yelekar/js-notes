function isPalindrome(str) {
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  let a = 0
  let b = s.length - 1

  while (b > a) {
    if (s[a] !== s[b]) {
      return false
    }
    a++
    b--
  }
  return true
}

console.log(isPalindrome('Race car'))
