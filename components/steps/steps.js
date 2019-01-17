Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 步骤列表, 结构如[{time: '2019-01-01', status: '派送中', desc: '张某正在派送...'}]
    list: {
      type: Array,
      value: []
    },
    color: { // 当前位置圆点指示演示, 是最新的步骤时
      type: String,
      value: 'red'
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

  }
})
