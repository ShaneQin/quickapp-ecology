import device from '@system.device'
import {
  AsyncDeviceGetInfo,
  AsyncDeviceGetId,
  AsyncDeviceGetDeviceId,
  AsyncDeviceGetUserId,
  AsyncDeviceGetAdvertisingId,
  AsyncDeviceGetSerial,
  AsyncDeviceGetTotalStorage,
  AsyncDeviceGetAvailableStorage,
  AsyncDeviceGetCpuInfo,
  AsyncDeviceGetOAID
} from './types'

export const asyncDeviceGetInfo: AsyncDeviceGetInfo = () => {
  return new Promise((resolve, reject) => {
    device.getInfo({
      success: resolve,
      fail: reject
    })
  })
}

export const asyncDeviceGetId: AsyncDeviceGetId = ({ type }) => {
  return new Promise((resolve, reject) => {
    device.getId({
      type,
      success: resolve,
      fail: reject
    })
  })
}

export const asyncDeviceGetDeviceId: AsyncDeviceGetDeviceId = () => {
  return new Promise((resolve, reject) => {
    device.getDeviceId({
      success: resolve,
      fail: reject
    })
  })
}

export const asyncDeviceGetUserId: AsyncDeviceGetUserId = () => {
  return new Promise((resolve, reject) => {
    device.getUserId({
      success: resolve,
      fail: reject
    })
  })
}

export const asyncDeviceGetAdvertisingId: AsyncDeviceGetAdvertisingId = () => {
  return new Promise((resolve, reject) => {
    device.getAdvertisingId({
      success: resolve,
      fail: reject
    })
  })
}

export const asyncDeviceGetSerial: AsyncDeviceGetSerial = () => {
  return new Promise((resolve, reject) => {
    device.getSerial({
      success: resolve,
      fail: reject
    })
  })
}

export const asyncDeviceGetTotalStorage: AsyncDeviceGetTotalStorage = () => {
  return new Promise((resolve, reject) => {
    device.getTotalStorage({
      success: resolve,
      fail: reject
    })
  })
}

export const asyncDeviceGetAvailableStorage: AsyncDeviceGetAvailableStorage = () => {
  return new Promise((resolve, reject) => {
    device.getAvailableStorage({
      success: resolve,
      fail: reject
    })
  })
}

export const asyncDeviceGetCpuInfo: AsyncDeviceGetCpuInfo = () => {
  return new Promise((resolve, reject) => {
    device.getCpuInfo({
      success: resolve,
      fail: reject
    })
  })
}

export const asyncDeviceGetOAID: AsyncDeviceGetOAID = () => {
  return new Promise((resolve, reject) => {
    device.getOAID({
      success: resolve,
      fail: reject
    })
  })
}
