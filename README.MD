<!--
 * @Author: 289608944@qq.com
 * @Date: 2020-03-11 14:51:36
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2020-03-11 18:32:57
 * @Description: In User Settings Edit
 -->
## `regex-util`
> regex-util

### Setup
```bash
  # clone the repository
  λ git clone https://github.com/jiangdexiao/regex-tool.git
  # usege
  λ npm install regex-util -S
  # example
    import regexUtil, { idCard } from 'regex-util'


  
  idCard 是直接导出表达式
  方法调用 
  regexUtil(方法名,匹配的值,可选自定义的正则表达式)
  const regex = regexUtil('isIdCard','2433114555')
  头部名称 | 说明
  -- | --
  Cache-Control | 控制缓存行为
  Pragma | http1.0的字段，作用和Cache-Control大体相同

  | 表达式名称 | 描述 | 对应方法名   |
  | ----------|------|---------   
  | idCard | 身份证号 | isIdCard    |
  | hkCard | 香港身份证 | isHKCard  |
  | aoMenCard | 澳门身份证 | isOMenCard |
  | taiWanCard | 台湾身份证 | isTaiWanCard |
  | email | 邮箱 | isEmail|
  | phone | 固话 | isPhone|
  | mobile | 手机 | isMobile|
  | mobileAndTel | 固话和手机 | isMobileAndTel|
  | intOrFloat | 浮点数 | isIntOrFloat|
  | integer | 整数，可负数 | isInteger|
  | number | 正整数 | isNumber|
  | currency | 货币 | isCurrency|
  | qq | qq号码 | isQQ|
  | chinese | 中文 | isChinese|
  | english | 英文 | isEnglish|
  | unnormal | 验证是否包含空格和非法字符 | isUnnormal|
  | password | 密码 |isPassword|
  | zip | 邮政编码 |isZipCode|
  | ip | IP地址|isIpAddress|
  | date | 日期格式 | isDate|

 ```  


