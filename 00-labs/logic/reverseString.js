function ReverseString(str) {
  const s = str.split('')
  let a = 0
  let b = s.length - 1

  while (b > a) {
    let temp = s[b]
    s[b] = s[a]
    s[a] = temp
    a++
    b--
  }
  return s.join('')
}

ReverseString('hi')
console.log(s)
