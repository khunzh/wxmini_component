## inputVerfication
类似于支付宝的支付密码输入框, 也可以用于某些验证码的输入
### 效果图

### properties
属性 | 说明 | 类型 | 默认 | 必须
---|---|---|---|---
value | 输入内容 | String | '' | 否
maxlength | 最多显示几个框 | String | '6' | 否
focus | 键盘弹出(real-input聚焦)) | Boolean | false | 是
defaultClass | 是否使用默认的框框样式 | Boolean | true | 否
type | 输入框类型 | String | 'plaintext' | 否

### externalClasses
样式类 | 说明
---|---
fake-input-wrap-external-class | 包裹框框的外部样式类
fake-input-external-class | 单个框框外部样式类

### triggerEvent

