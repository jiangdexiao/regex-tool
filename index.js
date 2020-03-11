/*
 * @Author: 289608944@qq.com
 * @Date: 2020-03-11 16:06:39
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2020-03-11 18:20:38
 * @Description: In User Settings Edit
 */
import {
  idCard,
  hkCard,
  aoMenCard,
  taiWanCard,
  email,
  phone,
  mobile,
  mobileAndTel,
  intOrFloat,
  integer,
  number,
  currency,
  qq,
  chinese,
  english,
  unnormal,
  password,
  zip,
  ip,
  date,
} from './pattern'

const callback = (regex,value) => (regex.test(value))
const action = new Map([
  ['isIdCard',(value,regex)=> callback(regex||idCard,value) ],
  ['isHKCard',(value,regex)=> callback(regex||hkCard,value) ],
  ['isOMenCard',(value,regex)=> callback(regex||aoMenCard,value) ],
  ['isTaiWanCard',(value,regex)=> callback(regex||taiWanCard,value) ],
  ['isEmail',(value,regex)=> callback(regex||email,value) ],
  ['isPhone',(value,regex)=> callback(regex||phone,value) ],
  ['isMobile',(value,regex)=> callback(regex||mobile,value) ],
  ['isMobileAndTel',(value,regex)=> callback(regex||mobileAndTel,value) ],
  ['isIntOrFloat',(value,regex)=> callback(regex||intOrFloat,value) ],
  ['isInteger',(value,regex)=> callback(regex||integer,value) ],
  ['isNumber',(value,regex)=> callback(regex||number,value) ],
  ['isCurrency',(value,regex)=> callback(regex||currency,value) ],
  ['isQQ',(value,regex)=> callback(regex||qq,value) ],
  ['isChinese',(value,regex)=> callback(regex||chinese,value) ],
  ['isEnglish',(value,regex)=> callback(regex||english,value) ],
  ['isUnnormal',(value,regex)=> callback(regex||unnormal,value) ],
  ['isPassword',(value,regex)=> callback(regex||password,value) ],
  ['isZipCode',(value,regex)=> callback(regex||zip,value) ],
  ['isIpAddress',(value,regex)=> callback(regex||ip,value) ],
  ['isDate',(value,regex)=> callback(regex||date,value) ],
])

const regexUtil = (key,value,regex = '')=> {
  if(!key){
    throw Error('please input test mode')
  }
  if(!value){
    throw Error('please input test value')
  }
  const _action = action.get(key)
  if(_action && typeof _action === 'function'){
    return _action(value,regex)
  }else{
    throw Error(`not found ${key} function`)
  }
}

export {
  idCard,
  hkCard,
  aoMenCard,
  taiWanCard,
  email,
  phone,
  mobile,
  mobileAndTel,
  intOrFloat,
  integer,
  number,
  currency,
  qq,
  chinese,
  english,
  unnormal,
  password,
  zip,
  ip,
  date,
}
export default regexUtil