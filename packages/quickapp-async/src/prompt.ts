import prompt from '@system.prompt'
import { AsyncshowDialog, AsyncShowContextMenu } from './types'

export const asyncshowDialog: AsyncshowDialog = ({ title, message, buttons, autocancel }) => {
  return new Promise((resolve, reject) => {
    prompt.showDialog({
      title,
      message,
      buttons,
      autocancel,
      success: resolve,
      cancel: reject
    })
  })
}

export const asyncShowContextMenu: AsyncShowContextMenu = ({ itemList, itemColor }) => {
  return new Promise((resolve, reject) => {
    prompt.showContextMenu({
      itemList,
      itemColor,
      success: resolve,
      cancel: reject
    })
  })
}
