# puppet-padlink

## 简介

puppet-padlink 是一个基于 Wechaty 的微信机器人框架，目前支持 Windows 和 Linux 平台。

## 系统要求

- Windows 10 或更高版本（推荐使用win）
- Linux 系统（建议使用 Ubuntu 24.04）
- Node.js 12 或更高版本
- Redis 服务器

## 快速开始

### 1. 安装包

```bash
npm install wechaty-puppet-padlink
```

### 2. 安装 Redis（默认6379端口）

#### Windows 安装步骤

1. 下载 Redis for Windows：

   - 访问 [Redis Windows 下载页面](https://github.com/microsoftarchive/redis/releases)
   - 下载最新的 `.msi` 安装包

2. 安装步骤：

   - 双击下载的 `.msi` 文件
   - 按照安装向导完成安装
   - 安装程序会自动将 Redis 添加为 Windows 服务

3. 启动 Redis：
   - 打开服务管理器（services.msc）
   - 找到 "Redis" 服务
   - 右键选择"启动"

#### Linux 安装步骤

1. 安装 Redis：

   ```bash
   sudo apt update
   sudo apt install redis-server
   ```

2. 启动 Redis 服务：

   ```bash
   sudo systemctl start redis-server
   ```

3. 设置开机自启：
   ```bash
   sudo systemctl enable redis-server
   ```

### 3. 下载并启动二进制文件

#### 第一步：下载二进制文件

1. 访问 [GitHub Releases](https://github.com/padlink/wechaty-puppet-padlink/releases)
2. 下载对应平台的压缩包：
   - Windows: `padlink-win-v1.0.0.zip`
   - Linux: `padlink-linux-v1.0.0.zip`

#### 第二步：解压文件

将下载的压缩包解压到项目根目录或者其他地方文件夹， 文件结构如下：

```
your-project/
├── bin/
│   ├── padlink-win/
│   │   └── win.exe          # Windows 可执行文件
│   └── padlink-linux/
│       └── linux            # Linux 可执行文件
├── package.json
└── ...
```

#### 第三步：启动二进制文件

##### Windows

1. 双击 `bin/padlink-win/win.exe`
2. 如果启动成功，您会看到类似以下的输出：

   ```
   启动成功
   ```

##### Linux

```bash
chmod +x bin/padlink-linux/linux
./bin/padlink-linux/linux
```

启动完之后即可使用padlink傀儡

### 4. 使用示例

#### [demo传送门](https://wechaty.js.org/docs/)

## 获取 Token

如需获取专属 token，请联系下方客服：

- **飞书扫码联系：**

 <img src="./docs/feishu-qrcode.jpg" width="200px">

- 或发送邮件至：padlink001@gmail.com

> **注意：** token 是使用本服务的唯一凭证，请妥善保管，勿泄露给他人。

---

## 接口文档

- [BOT](#bot)
  - [创建BOT](#创建BOT)
  - [启动并登录BOT](#启动并登录BOT)
  - [主动登出BOT](#主动登出BOT)
- [Message](#message)
  - [发送文字](#发送文字)
  - [发送文字，群聊 @ 某人](#发送文字群聊--某人)
  - [发送联系人卡片](#发送联系人卡片)
  - [发送图片](#发送图片)
  - [发送语音](#发送语音)
  - [发送视频](#发送视频)
  - [发送文件](#发送文件)
  - [发送链接](#发送链接)
  - [发送小程序卡片](#发送小程序卡片)
  - [发送表情（动图）](#发送表情动图)
  - [撤回消息](#撤回消息)
  - [接收消息](#接收消息)
- [Contact](#contact)
  - [获取所有联系人列表](#获取所有联系人列表)
  - [判断联系人是否为好友](#判断联系人是否为好友)
  - [获取/设置BOT自己的昵称](#获取设置BOT自己的昵称)
  - [获取BOT自己的二维码](#获取BOT自己的二维码)
  - [设置BOT自己的签名](#设置BOT自己的签名)
  - [获取/设置他人昵称](#获取设置他人昵称)
  - [获取自己/其他人的头像](#获取自己其他人的头像)
  - [删除联系人](#删除联系人)
  - [通过好友申请](#通过好友申请)
  - [添加联系人](#添加联系人)
  - [通过手机号搜索联系人，并添加好友](#通过手机号搜索联系人并添加好友)
  - [通过微信号搜索联系人，并添加好友](#通过微信号搜索联系人并添加好友)
- [Room](#room)
  - [获取群聊列表](#获取群聊列表)
  - [创建群聊](#创建群聊)
  - [获取群聊成员](#获取群聊成员)
  - [添加群聊成员](#添加群聊成员)
  - [剔除群聊成员](#剔除群聊成员)
  - [获取群聊头像](#获取群聊头像)
  - [获取群聊二维码](#获取群聊二维码)
  - [获取/设置群聊名称](#获取设置群聊名称)
  - [获取/设置群公告](#获取设置群公告)
  - [退出群聊](#退出群聊)
  - [通过群邀请（加入他人的群聊）](#通过群邀请加入他人的群聊)
  - [有人加入群聊通知](#有人加入群聊通知)
  - [有人退出群聊通知](#有人退出群聊通知)
  - [群聊名称发生变化通知](#群聊名称发生变化通知)
- [Tag](#tag)
  - [为用户添加标签](#为用户添加标签)
  - [删除用户标签](#删除用户标签)
  - [删除标签](#删除标签)
  - [获取用户标签](#获取用户标签)

## BOT

### 创建BOT

```js
const { WechatyBuilder } = require("wechaty");
const { PuppetPadlink } = require("wechaty-puppet-padlink");
const PUPPET = require("wechaty-puppet");
const puppet = new PuppetPadlink({
  token: "你的token", //如：puppet_padplnk_1234567890
});
const bot = WechatyBuilder.build({ puppet });
bot.start();
```

### 登录BOT

```js
const qrcodeTerminal = require("qrcode-terminal");

// 扫描二维码事件
bot.on("scan", async (qrcode, status) => {
  switch (status) {
    case 2:
      qrcodeTerminal.generate(qrcode, { small: true }, (output) => {
        console.log("请扫描二维码登录：\n", output);
      });
      break;
    case 3:
      console.log("已扫描，请在手机上确认登录");
      break;
    case 4:
      console.log("已确认登录");
      break;
    default:
      console.log(`扫描状态：${status}`);
  }
});

// 登录成功通知
bot.on("login", () => {
  console.log("机器人登录成功");
});
```

- 事件参考：[`WechatyEventName`](https://wechaty.js.org/docs/api/wechaty#wechatyeventname)。以及每个事件对应的回调数据类型：[`WechatyEventFunction`](https://wechaty.js.org/docs/api/wechaty/#wechatyeventfunction)

### 主动登出BOT

```js
await bot.logout();
```

## Message

### 接收消息

```js
//接受消息回调
bot.on("message", async (msg) => {
  console.log("接受消息", msg);
});
```

### 发送文字

```js
//消息通知回调
bot.on("message", async (msg) => {
  // 如在群里或者对机器发送：测试文本
  if (msg.text() == "测试文本") {
    await msg.say("文本");
  }
});
```

### 发送文字，群聊 @ 某人

```js
bot.on("message", async (msg) => {
  // 仅对群消息有效,（如在群里发送：测试）
  if (msg.room()) {
    if (msg.text() == "测试") {
      msg.room()?.say("我是padlink", msg.talker());
    }
  }
});
```

### 发送图片

```js
const { FileBox } = require("file-box");
bot.on("message", async (msg) => {
  // 如在群里或者对机器发送：测试图片
  if (msg.text() == "测试图片") {
    const fileBox = FileBox.fromUrl(
      "http://conimg.yp.yeyimg.com/2025/06/12/5846d6ef-7bff-4d2b-b4a7-4e8d430f341e.jpeg"
    );
    await msg.say(fileBox);
  }
});
```

### 发送语音

```js
// 语音文件为 silk 格式。silk 是 skype 开源的一款语音编解码器，被微信的语音文件所采用。
// 注意：文件后缀必须是 `sil`！

const { FileBox } = require("file-box");
bot.on("message", async (msg) => {
  // 如在群里或者对机器发送：测试语音
  if (msg.text() == "测试语音") {
    const voiceLength = 1000; // 需要提供语音长度，单位为毫秒
    const fileBox = FileBox.fromUrl(
      "http://conimg.yp.yeyimg.com/2025/06/12/43660edf-0998-4405-8184-90bf6bfe6b55.sil"
    );
    fileBox.mimeType = "audio/silk";
    fileBox.metadata = {
      voiceLength,
    };
    await msg.say(fileBox);
  }
});
```

- silk 转码工具：[`silk-v3-decoder`](https://github.com/kn007/silk-v3-decoder)

### 发送视频

```js
const { FileBox } = require("file-box");
bot.on("message", async (msg) => {
  // 如在群里或者对机器发送：测试视频
  if (msg.text() == "测试视频") {
    const fileBox = FileBox.fromUrl("https://---------.mp4"); //填你的视频地址
    await msg.say(fileBox);
  }
});
```

### 发送链接

```js
bot.on("message", async (msg) => {
  // 如在群里或者对机器发送：测试链接
  if (msg.text() == "测试链接") {
    const thumbnail =
      "http://conimg.yp.yeyimg.com/2023/08/14/e5c4085a-993d-467d-a4b5-437fc00569e3.png";
    let url = `https://www.baidu.com/`;
    const title = "百度";
    const artists = "";
    const urlLink = new bot.UrlLink({
      title,
      description: artists,
      url,
      thumbnailUrl: thumbnail,
    });
    msg.say(urlLink);
  }
});
```

### 发送小程序卡片

```js
bot.on("message", async (msg) => {
  // 如在群里或者对机器发送：测试小程序
  if (msg.text() == "测试小程序") {
    // 小程序信息
    const miniProgram = new bot.MiniProgram({
      appid: "wxde8a",
      description: "美团丨外卖美食买菜酒店电影购物",
      iconUrl: "http://mmbiz.qpic.cn/sz_mmbiz",
      pagePath: "index/pages/mt/mt.html",
      shareId: "0_wxde8a...........",
      thumbKey: "f8df........",
      thumbUrl: "3057020100044b304902010002047c0346d.........",
      title: "吃喝玩乐 尽在美团",
      username: "gh_@app........",
    });
    msg.say(miniProgram);
  }
});
```

### 发送表情（动图）

这些参数就是收到的表情消息中的数据。

```js
const { FileBox } = require("file-box");
bot.on("message", async (msg) => {
  // 如在群里或者对机器发送：测试表情
  if (msg.text() == "测试表情") {
    const fileBox = FileBox.fromUrl(
      "https://guessCar/carPhoto/GMC_89.jpg",
      `message-emotion.jpg`
    );
    fileBox.mimeType = "application/unknown";
    const metadata = {
      payload: {
        gameext: undefined,
        type: 2,
        width: 540,
        height: 540,
        md5: "28b9871de90d70c7de11d8a2717fa50d",
        len: 409409,
      },
      type: "emoticon",
    };
    fileBox.metadata = metadata;
    try {
      await msg.say(fileBox);
    } catch (error) {
      console.log(error);
    }
  }
});
```

### 撤回消息

```js
//仅对机器人自己发的有效
await msg.recall();
```

## Contact

### 获取所有联系人列表

```js
// 所有联系人列表中，包含了聊天室中哪些不认识联系人
const allContactList = await bot.Contact.findAll();

// 获取你添加过的好友。和微信一样，不知道对方是否删除了你
const friendList = allContactList.filter((contact) => contact.friend());
```

### 判断联系人是否为好友

```js
const isFriend = contact.friend();
```

### 获取/设置BOT自己的昵称

```js
const self = bot.currentUser;

// 获取
const oldName = self.name();

// 设置
const toName: string = "NEW NICK NAME";
await self.name(toName);
```

### 获取BOT自己的二维码

```js
const self = bot.currentUser;
const qrStr = await self.qrcode();
// 再用二维码生成工具将 qrStr 生成为二维码即可
```

### 设置BOT自己的签名

```js
const self = bot.currentUser;
await self.signature("NEW SIGNATURE");
```

### 获取/设置他人昵称

```js
const contact = (await bot.Contact.find({ id: "wxid_xxx" }))!;

// 获取
const oldAlias = await contact.alias();

// 设置
await contact.alias("新的备注");
```

### 获取自己/其他人的头像

```js
// 自己
const selfContact = bot.currentUser;
const selfAvatarFileBox = await selfContact.avatar();

// 他人
const contact = (await bot.Contact.find({ id: "wxid_xxx" }))!;
const otherAvatarFileBox = await contact.avatar();
```

### 删除联系人

```js
const puppet = bot.puppet;
await puppet.contactDelete(deleteUserName);

// contact 对象仍然可以得到，但是 friend 变为了 false
const contact = await bot.Contact.find({ id: deleteUserName });
expect(contact!.friend()).toBeFalsy();
```

### 通过好友申请

```js
bot.on("friendship", async (friendship) => {
  if (friendship.type() === FriendshipType.Receive) {
    await friendship.accept();
  }
});
```

### 添加联系人

```js
// 这种方式的前提是：必须已经知道了对方的 id
const contact = await bot.Contact.find({ id: "wxid_" });
await bot.Friendship.add(contact!, hello);
```

### 通过手机号搜索联系人，并添加好友

```js
const contact = await bot.Friendship.search({ phone: "135xxx" });
await bot.Friendship.add(contact!, "朋友，你好");
```

### 通过微信号搜索联系人，并添加好友

```js
const contact = await bot.Friendship.search({ weixin: "wx" });
await bot.Friendship.add(contact!, "朋友，你好");
```

## Room

### 获取群聊列表

```js
const allRooms = await bot.Room.findAll();
```

### 创建群聊

```js
// 至少两个其他好友
const memberIdList = ["wxid_xxx", "wxid_yyy"];

const contactList = [];
for (const userId of memberIdList) {
  const contact = await bot.Contact.find({ id: userId });
  contactList.push(contact!);
}

const roomName = "room.....";
const newRoom = await bot.Room.create(contactList, roomName);

await newRoom.ready();
await newRoom.say("Hello World!");
```

### 获取群聊成员

```js
const memberList = await room.memberAll();
```

### 添加群聊成员

```js
const room = (await bot.Room.find({ id: "xxx@chatroom" }))!;
const contact = await bot.Contact.find({ id: "wxid_" });
await room!.add(contact!);

// 稍微等待一下
await new Promise((resolve) => setTimeout(resolve, 1000));

// newMemberList 就包含新添加的成员了
const newMemberList = await room.memberAll();
```

### 剔除群聊成员

```js
const room = (await bot.Room.find({ id: "xxx@chatroom" }))!;
const contact = await bot.Contact.find({ id: "wxid_" });
await room.del(contact!);

// 稍微等待一下
await new Promise((resolve) => setTimeout(resolve, 1000));

// newMemberList 就不包含被删除的联系人
const newMemberList = await room.memberAll();
```

### 获取群聊头像

```js
const avatarFileBox = await room!.avatar();
```

### 获取群聊二维码

二维码需要 bot 保持在线至少24小时后才能获取，否则会出现"生成的群二维码已经失效"的错误

```js
const qrString = await room.qrCode();
// 用二维码生成工具，将 qrString 生成为二维码即可
```

### 获取/设置群聊名称

```js
// 获取
const oldTopic = await room.topic();

// 设置
await room.topic("新的群聊名称");
```

### 获取/设置群公告

```js
// 获取
const announcement = await room.announce();

// 设置
await room.announce("新的群公告");
```

### 退出群聊

```js
await room.quit();
```

### 通过群邀请（加入他人的群聊）

```js
bot.on("room-invite", async (roomInvite) => {
  await roomInvite.accept();
});
```

### 有人加入群聊通知

```js
bot.on(
  "room-join",
  async (room, inviteeList, inviter: Contact, date) => {
    log.info(
      `on room join: ${room.toString()}, inviteeList: ${inviteeList.map((i) => i.id)}, inviter: ${
        inviter.id
      }, ${date}`
    );
  }
);
```

### 有人退出群聊通知

只有自己是群主或管理员的群才能收到退出群聊通知。

```js
bot.on("room-leave", async (room, leaverList, removert, date) => {
  log.info(
    `on room leave: ${room.toString()}, leaverList: ${leaverList.map((l) => l.id)}, remover: ${
      remover?.id
    } ${date}`
  );
});
```

### 群聊名称发生变化通知

```js
bot.on("room-topic", async (room, newTopic, oldTopic, changer, date) => {
  log.info(
    `on room topic: ${room.toString()}, ${newTopic}, ${oldTopic}, ${changer.toString()}, ${date}`
  );
});
```

## Tag

### 为用户添加标签

```js
const tag = await bot.Tag.get("标签名称");
const contact = await bot.Contact.find({ id: "wxid_xxx" });
await tag.add(contact!);
```

### 删除用户标签

```js
const tag = await bot.Tag.get("标签名称");
const contact = await bot.Contact.find({ id: "wxid_xxx" });
await tag.remove(contact!);
```

### 删除标签

```js
const tag = await bot.Tag.get("标签名称");
await bot.Tag.delete(tag);
```

### 获取用户标签

```js
const contact = await bot.Contact.find({ id: "wxid_xxx" });
const tags = await contact!.tags();
```

## 相关资源

- [快速启动demo](https://wechaty.js.org/docs/)
- [Redis 官方文档](https://redis.io/documentation)
- [Redis Windows 版本](https://github.com/microsoftarchive/redis/releases)
- [Redis Linux 安装指南](https://redis.io/topics/quickstart)
- [Wechaty 文档](https://wechaty.js.org/docs/)

## 注意事项

1. 确保 Redis 服务正常运行（6379端口）
2. 保持二进制文件所在目录的访问权限

## 故障排除

1. 如果遇到 Redis 相关错误，请确保 Redis 服务器已安装并运行
2. 如果遇到二进制文件错误，请尝试重新重启
3. 如果使用过程中遇到权限问题：
   - Windows: 以管理员身份运行命令提示符
   - Linux: 使用 sudo 运行安装命令
