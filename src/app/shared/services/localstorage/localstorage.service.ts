import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  setWithExpiry(key: string, value: string, timeExpire: string) {

    const now = new Date()

    // 'item' = contains the original value and the time when expire
    const item = {
      value: value,
      expiry: now.getMonth() + timeExpire,
    }

    localStorage.setItem(key, JSON.stringify(item))
  }

  setItem(key: string, value: string) {

    // 'item' = contains the value for localstorage
    const item = {
      value: value
    }

    localStorage.setItem(key, JSON.stringify(item))
  }

  getWithExpiry(key: string) {

    const itemStr = localStorage.getItem(key)

    // if the item doesn't exist, return null
    if (!itemStr) {
      return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()

    // compare the expiry time of the item with the current time
    if (now.getMonth() > item.expiry) {

      // If the item is expired, delete the item from storage and return null
      localStorage.removeItem(key)
      return null
    }

    return item.value
  }

  removeLs(key: string) {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.log(error);
    }
  }

}
