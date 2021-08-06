import { setItem, USER_KEY } from '@/utils/storage'

// 这样做的目的可以避免访问和获取数据的名字不一致导致的问题

export const setIsAutnenticated = (state, data) => {
  state.isAutnenticated = data
}
export const setUser = (state, data) => {
  //res.data
  state.user = data
  setItem(USER_KEY, state.user)
  // console.log(state.user);
}
export const setProfile = (state, data) => {
  state.profile = data
}
export const setLoading = (state, data) => {
  state.loading = data //加载
}
export const setTime = (state, data) => {
  state.time = data
}

export const setcurrRouter = (state, data) => {
  state.currRouter = data
}
