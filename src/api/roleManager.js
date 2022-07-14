import request from '@/utils/request'
const getRoleList = (data) => {
  return request({
    url: '/role/list',
    method: 'GET',
    data
  })
}
const updateRole = (id, data) => {
  return request({
    url: `/user/assign/${id}`,
    method: 'POST',
    data
  })
}

export default {
  getRoleList,
  updateRole
}
