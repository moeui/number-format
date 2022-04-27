# @moeui/number-format &middot; [![npm version](https://img.shields.io/npm/v/@moeui/number-format.svg?style=flat)](https://www.npmjs.com/package/@moeui/number-format) [![Release Workflow Status](https://github.com/moeui/number-format/actions/workflows/release.yml/badge.svg)](https://github.com/moeui/number-format/actions/workflows/release.yml)

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

