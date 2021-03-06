import checker, { isLineValid } from './day2-2'

describe('2020, Count passwords', () => {
  it('should find lines valid', () => {
    const input = `1-3 a: abcde`
    expect(isLineValid(input)).toBeTruthy()
  })

  it('should solve dummyInputRight', () => {
    const input = `1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc`
    expect(checker(input)).toBe(1)
  })
})
