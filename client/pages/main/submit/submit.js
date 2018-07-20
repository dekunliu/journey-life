Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputTitle: '',
    inputContent: ''
  },

  submit: function () {
    console.log('title:'+this.data.inputTitle+' content:'+this.data.inputContent);
  },

  bindTitleInput: function (event) {
    this.setData({
      inputTitle: event.detail.value
    })
  },

  bindContentTextarea: function (event) {
    this.setData({
      inputContent: event.detail.value
    })
  }
})