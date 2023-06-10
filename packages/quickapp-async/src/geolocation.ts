import geolocation from '@system.geolocation';
import {
  AsyncGeolocationGetLocation,
  AsyncGeolocationOpenLocation,
  AsyncGeolocationChooseLocation,
  AsyncGeolocationGetLocationType,
  AsyncGeolocationGeocodeQuery,
  AsyncGeolocationReverseGeocodeQuery
} from './types';

export const asyncGeolocationGetLocation: AsyncGeolocationGetLocation = (args) => {
  return new Promise((resolve, reject) => {
    geolocation.getLocation({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncGeolocationOpenLocation: AsyncGeolocationOpenLocation = (args) => {
  return new Promise((resolve, reject) => {
    geolocation.openLocation({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncGeolocationChooseLocation: AsyncGeolocationChooseLocation = (args) => {
  return new Promise((resolve, reject) => {
    geolocation.chooseLocation({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncGeolocationGetLocationType: AsyncGeolocationGetLocationType = () => {
  return new Promise((resolve, reject) => {
    geolocation.getLocationType({
      success: resolve,
      fail: reject
    });
  });
};

export const asyncGeolocationGeocodeQuery: AsyncGeolocationGeocodeQuery = (args) => {
  return new Promise((resolve, reject) => {
    geolocation.geocodeQuery({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};

export const asyncGeolocationReverseGeocodeQuery: AsyncGeolocationReverseGeocodeQuery = (args) => {
  return new Promise((resolve, reject) => {
    geolocation.reverseGeocodeQuery({
      ...args,
      success: resolve,
      fail: reject
    });
  });
};
