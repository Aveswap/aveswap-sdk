import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

export const INIT_CODE_HASH: string = '0x4e8cdebbad8c932d47bf0564bdafa743dd913ae7e5d72fc28037a03e9c5b6741'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const LAMBDA_URL = 'https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev'

export const SOCKET_URL = 'wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev'
