### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择dist目录。

2、微信开发者工具-->项目-->关闭ES6转ES5。 <font color=red>重要：漏掉此项会运行报错。</font> 

3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。  <font color=red>重要：某些情况下漏掉此项也会运行报错。</font> 

4、微信开发者工具-->项目-->关闭代码压缩上传。  <font color=red>重要：开启后，会导致真机computed, props.sync 等等属性失效。</font> 


### 小程序CMS开发文档
	http://wepydemo.mydoc.io/?t=325746


### 技术交流请加QQ群
97460170

### 演示地址

打开微信扫一扫

<img src="https://static.oschina.net/uploads/img/201810/26145752_exnu.jpg" width="200" height="200"/> 

    


### 部分功能截图


<img src="https://static.oschina.net/uploads/img/201810/26150653_PP14.png" width="365" height="619" /> 	
<img src="https://static.oschina.net/uploads/img/201810/26150710_o2EP.png" width="365" height="619"/> 
<img src="https://static.oschina.net/uploads/img/201810/26150727_eJ8g.png" width="365" height="619"/> 		
<img src="https://static.oschina.net/uploads/img/201810/26150744_eFWe.png" width="365" height="619"/> 
<img src="https://static.oschina.net/uploads/img/201810/26150804_H8Wy.png" width="365" height="619"/>
























# weixin-app-cms

###一、捷微小程序CMS快速对接H5活动之家微商城
####1. 小程序项目代码下载
```
源码下载地址：https://gitee.com/jeecg/weixin-app-cms
```
#### 2. 小程序项目配置
##### （1）配置H5活动之家微网站id
```
登录H5活动之家（http://www.h5huodong.com）找到需要对接的微网站，没有微网站可以创建一个微网站，进入菜单【微网站】-【站点管理】创建自己的微网站。
```
![输入图片说明](https://static.oschina.net/uploads/img/201810/12190203_aqGU.png "在这里输入图片标题")

##### （2）站点创建后获取站点id

![输入图片说明](https://static.oschina.net/uploads/img/201810/12190222_pW2z.png "在这里输入图片标题")

##### （2） 微网站站点id配置到小程序项目中/dist/utils/wxRequest.js文件中

![输入图片说明](https://static.oschina.net/uploads/img/201810/12190439_hDqn.png "在这里输入图片标题")

####3. 发布小程序
```
小程序发布，需要通过微信开发者工具上传项目，上传者需扫码微信开发者工具，
该登录微信号必须是当前小程序的开发者。
1、发布前准备
  授权开发者权限
   小程序后台管理员授权微信用户为开发者
   【用户身份-成员管理】添加成员
```
![输入图片说明](https://static.oschina.net/uploads/img/201810/12165423_DkBh.png "在这里输入图片标题")
```
   服务器域名配置：
   小程序后台，进入【设置-开发设置】，服务器域名设置app.h5huodong.com
    改配置授权H5活动之家提供服务支持。
```
![输入图片说明](https://static.oschina.net/uploads/img/201810/12172743_EdRx.png "在这里输入图片标题")
```
2、下载微信开发者工具
下载地址：
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
下载后安装开发者工具
```
```
3、开发者工具导入项目
扫码登录，选择小程序项目开发者模式。
```
![输入图片说明](https://static.oschina.net/uploads/img/201810/12165657_QxgO.png "在这里输入图片标题")
![输入图片说明](https://static.oschina.net/uploads/img/201810/12165708_4NEq.png "在这里输入图片标题")
```
选择小程序代码工程目录（即选择下载的解压的小程序代码dist目录），填写小程序appid,填写一个项目名称，点击确定。
```
![输入图片说明](https://static.oschina.net/uploads/img/201810/12165903_gM2z.png "在这里输入图片标题")
```
进入开发页面后，点击编译，然后点击上传，上传小程序到服务器。
上传是填写版本号，项目备注。
版本号命名规则 例如：1.0.1
项目备注，备注项目名称，发布更新的功能
填写后点击上传，即可上传到服务器，可在小程序管理后台看到
```
![输入图片说明](https://static.oschina.net/uploads/img/201810/12190802_B0hU.png "在这里输入图片标题")
```
小程序管理后台【开发管理】，可以看到上传的开发版本
```
![输入图片说明](https://static.oschina.net/uploads/img/201810/12191326_PEow.png "在这里输入图片标题")
```
开发版本可以设置为体验版本，具有体验权限的人可以扫码访问，进行测试验证，测试商城数据等没有问题即可提交审核，发布上线。
备注：提交审核后，需等待微信官方审核，审核通过后才可发布上线
```
小程序对接完毕！！！
