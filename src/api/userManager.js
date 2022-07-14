import request from '@/utils/request'

const getUserList = (data) => {
  return request({
    url: '/user/list',
    method: 'get',
    data
  })
}

const deleteUser = (data) => {
  return request({
    url: '/user/delete',
    method: 'post',
    data
  })
}
const addUser = (data) => {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}
const updateUser = (data) => {
  return request({
    url: '/user/update',
    method: 'put',
    data
  })
}

/**
 * 查询单个用户信息接口
 * @param id
 * @returns {AxiosPromise}
 */
const findUser = (id) => {
  return request({
    url: `user/userInfo/${id}`,
    method: 'get'
  })
}

export default {
  getUserList,
  deleteUser,
  addUser,
  updateUser,
  findUser
}
