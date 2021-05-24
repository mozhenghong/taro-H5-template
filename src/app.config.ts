export default {
  pages: [
    'pages/index/index',
    'pages/test/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#568AFF',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#555555",
    selectedColor: "#568AFF",
    borderStyle: "black",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "assets/register.png",
        selectedIconPath: "assets/registerActive.png",
        text: "预约挂号",
      },
      {
        pagePath: "pages/test/index",
        iconPath: "assets/record.png",
        selectedIconPath: "assets/recordActive.png",
        text: "挂号记录",
      },
    ],
  },
}
