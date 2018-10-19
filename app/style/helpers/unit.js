/* @flow */

const parseUnit =
    (rawValue:string|number, defaultUnit = 'px') => {
        const [ _, value, unit ] = String(rawValue || '0').match(/([\d.]+)([a-z%]+)?/i)
        return [ Number(value), unit || defaultUnit ]
    }

const unit = Object.create(null)

unit.normalize =
    (defaultUnit:string) =>
        (unit:string|number) =>
            parseUnit(unit, defaultUnit).join('')

unit.add =
    (add:number, fixedDecimal:number = 3) =>
        (rawValue) => {
            const [ value, unit ] = parseUnit(rawValue)
            const result = (value + add).toFixed(fixedDecimal)
            return `${ result }${ unit }`
        }

unit.subtract =
    (sub:number, fixedDecimal:number = 3) =>
        (rawValue) => {
            const [ value, unit ] = parseUnit(rawValue)
            const result = (value - sub).toFixed(fixedDecimal)
            return `${ result }${ unit }`
        }

unit.multiply =
    (mul:number, fixedDecimal:number = 3) =>
        (rawValue) => {
            const [ value, unit ] = parseUnit(rawValue)
            const result = (value * mul).toFixed(fixedDecimal)
            return `${ result }${ unit }`
        }

unit.divide =
    (div:number, fixedDecimal:number = 3) =>
        (rawValue) => {
            const [ value, unit ] = parseUnit(rawValue)
            const result = (value / div).toFixed(fixedDecimal)
            return `${ result }${ unit }`
        }

export default unit
