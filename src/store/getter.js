import { getItem, USER_KEY } from '@/utils/storage'

export const isAutnenticated = (state) => state.isAutnenticated
export const user = (state) => {
  console.log('vuex', state.user, getItem(USER_KEY))
  return getItem(USER_KEY)
}
export const profile = (state) => state.profile
export const loading = (state) => state.loading
export const profiles = (state) => state.profiles //开发者们信息

export const currRouter = (state) => state.currRouter //开发者们信息
