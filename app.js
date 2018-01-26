const zhihu = require('zhihu')
const username = 'excited-B1anker'
zhihu.User.info(username).then((user) => {
  console.log(user)
})