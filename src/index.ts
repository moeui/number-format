export const formatDecimal = (number: number, decimal: number): string => {
    let num = number.toString()
    const index = num.indexOf('.')
    if (index !== -1) {
        num = num.substring(0, decimal + index + 1)
    } else {
        num = num.substring(0)
    }
    return parseFloat(num).toFixed(decimal)
}

export const formatMoney = (value: string | number, n: number): number | string => {
    if (isNaN(Number(value))) return Number(0).toFixed(n > 0 ? n : 0)
    const isNegative = value < 0
    const v = formatDecimal(Math.abs(Number(value)), n > 0 ? n : 0)
    const l = v.split('.')[0].split('').reverse()
    const r = v.split('.')[1]
    let t = ''
    for (let i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '')
    }
    const res = t.split('').reverse().join('') + `${r ? '.' + r : ''}`
    return `${isNegative ? '-' : ''}${res}`
}