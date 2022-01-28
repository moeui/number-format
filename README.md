### Install

    yarn add @moeui/number-format  

    // or 

    npm i @moeui/number-format
    
### Use

    import { formatMoney, formatDecimal } from '@moeui/number-format'

    formatMoney('1111.987654321', 4) // 1,111.9876
    formatMoney('-1111.987654321', 4) // -1,111.9876
    formatMoney('-abcd', 4) // 0.0000
    
    formatDecimal(1111.987654321, 4) // 1111.9876
    formatDecimal(-1111.987654321, 4) // -1111.9876

