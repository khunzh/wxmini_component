Component({
  externalClasses: ['fake-input-wrap-external-class', 'fake-input-external-class'],
  behaviors: ['wx://form-field'],
  /**
   * 组件的属性列表
   */
  properties: {
    value:{
      type: String,
      value: ''
    },
    maxlength:{
      type: String,
      value: Number('6'),
      observer: '_maxlengthObserver'
    },
    focus:{
      type: Boolean,
      value: false
    },
    defaultClass: { // 是否使用默认样式,不使用的话可以通过externalClasses传入
      type: Boolean,
      value: true
    },
    type:{ // 是否明文
      type: String,
      value: 'plaintext' // password是黑点的形式
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _maxlengthObserver(newVal){
      this.setData({
        maxlength: Number(newVal)
      })
    },
    _input(e){
      const value = e.detail.value;
      const len = value.length;
      this.setData({
        value
      })
      if(len >= this.data.maxlength){
        this.triggerEvent('done',{value: value})
      }
    },
    _focus(e){
      const value = e.detail.value;
      this.triggerEvent('focus', { value: value })
    },
    _blur(e){
      const value = e.detail.value;
      this.triggerEvent('blur', { value: value })
    }
  }
})
