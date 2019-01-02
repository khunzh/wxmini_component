Component({
  options: {
    addGlobalClass: true,
  },
  externalClasses: ["input-external-class", "before-input-external-class"],
  behaviors: ['wx://form-field'],
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: 'String'
    },
    type: {
      type: 'String',
      value: 'text'
    },
    password: {
      type: 'Boolean',
      value: false
    },
    placeholder: {
      type: 'String',
    },
    placeholderStyle: {
      type: 'String',
    },
    placeholderClass: {
      type: 'String'
    },
    disabled: {
      type: 'Boolean',
      value: false
    },
    maxlength: {
      type: 'Number',
      value: 140
    },
    cursorSpacing: {
      type: ['Number', 'String'],
      value: 0
    },

    focus: {
      type: Boolean,
      value: false,
      observer: 'focusObserver'
    },
    confirmType: {
      type: 'String',
      value: 'done'
    },
    confirmHold: {
      type: Boolean,
      value: false
    },
    cursor: {
      type: 'Number'
    },
    selectionStart: {
      type: 'Number',
      value: -1
    },
    selectionEnd: {
      type: 'Number',
      value: -1
    },
    adjustPosition: {
      type: 'Boolean',
      value: true
    },
    beforeInput: {
      type: String,
      value: ''
    },
    moneyType: { // input的额外类型, 主要用于价格的输入
      type: Boolean,
      value: false
    },
    decimalPlaces: { // 小数点后位数, 使用moneyType时使用
      type: String,
      value: 2
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hideClearBtn: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    focusObserver(newVal, oldVal) {
      if (!newVal || this.data.value === '') {
        this._hideClearBtn(true);
      } else {
        this._hideClearBtn(false);
      }
    },
    _input(e) {
      let value = e.detail.value;
      if (value !== '') {
        if (this.data.hideClearBtn) {
          this._hideClearBtn(false);
        }
      } else {
        this._hideClearBtn(true);
      }
      // 小数点后两位验证
      if (this.data.moneyType) {
        const reg = new RegExp(`^(\\d*\\.\\d{0,${this.data.decimalPlaces}})[\\.\\d]*$`);
        value = value.replace(reg, '$1');
      }
      this.triggerEvent('input', {
        value: value
      });
      return value;
    },
    _focus(e) {
      const event = {
        value: e.detail.value
      };
      this.triggerEvent('focus', event);
      if (!this.data.focus) {
        this.setData({
          focus: true
        });
      }
    },
    _blur(e) {
      const event = {
        value: e.detail.value
      };
      this.triggerEvent('blur', event);
      if (this.data.focus) {
        this._setFocus(false)
      }
    },
    _confirm(e) {
      this.triggerEvent('confirm', {
        value: e.detail.value
      });
      this._hideClearBtn(true);
    },

    /**
     * 清除按钮
     */
    _clear() {
      this.setData({
        value: '',
        focus: true
      }, () => {
        this.triggerEvent('clear', {
          value: this.data.value
        });
      })
    },
    _setFocus(focus) {
      this.setData({
        focus: focus
      })
    },
    _hideClearBtn(hidden) {
      this.setData({
        hideClearBtn: hidden
      })
    }
  }
})