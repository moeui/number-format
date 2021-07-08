### install

    yarn add @moeui/number-format  

    // or 

    npm i @moeui/number-format
### use

    import { formatMoney } from '@moeui/number-format'

### Test

    expect(formatMoney('1111', 4)).toBe('1,111.0000')
    expect(formatMoney('111.0000', 4)).toBe('111.0000')
    expect(formatMoney('1111.987654321', 4)).toBe('1,111.9876')
    expect(formatMoney('-1111.0000', 4)).toBe('-1,111.0000')
    expect(formatMoney('-111.987', 4)).toBe('-111.9870')
    expect(formatMoney('-111.987654321', 4)).toBe('-111.9876')
    expect(formatMoney('-1e9', 4)).toBe('-1,000,000,000.0000')
    expect(formatMoney('-1e9', 0)).toBe('-1,000,000,000')
    expect(formatMoney('qwq-1e9', 4)).toBe('0.0000')
    expect(formatMoney('-qwq-1e9', 4)).toBe('0.0000')