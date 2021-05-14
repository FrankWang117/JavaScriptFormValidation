## JavaScript 表单验证  
这篇文章主要学习如何使用 JavaScript 原生 `form` 进行表单验证。  

### 创建相关文件
在 VSCode 中创建 `index.html`、`main.js`、`styles.css` 三个文件：

// 图片位置  form-1

### 初始化相关文件  
为 `html` 文件添加相关的结构，使用 `Live Server` 插件启动：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <section class="container">
        <div class="header">
            <h2>创建账户</h2>
        </div>
    </section>
    <script src="./main.js"></script>
</body>
</html>
```

可以看到引入了 [font-awesome](https://fontawesome.com/) 用于图表便捷展示。

// form-2

### 增加表单元素

增加表单控件以及相应的提交按钮等：

```html
<form id="form" class="form">
  <div class="form-control">
    <label for="username">用户名</label>
    <input type="text" id="username" placeholder="输入用户名" />
    <i class="fas fa-check-circle"></i>
    <i class="fas fa-exclamation-circle"></i>
    <small>错误信息</small>
  </div>
  <div class="form-control">
    <label for="email">邮箱地址</label>
    <input type="text" id="email" placeholder="输入邮箱" />
    <i class="fas fa-check-circle"></i>
    <i class="fas fa-exclamation-circle"></i>
    <small>错误信息</small>
  </div>
  <div class="form-control">
    <label for="password">密码</label>
    <input type="password" id="password" placeholder="输入密码" />
    <i class="fas fa-check-circle"></i>
    <i class="fas fa-exclamation-circle"></i>
    <small>错误信息</small>
  </div>
  <div class="form-control">
    <label for="confirm-password">确认密码</label>
    <input type="password" id="confirm-password" placeholder="确认密码" />
    <i class="fas fa-check-circle"></i>
    <i class="fas fa-exclamation-circle"></i>
    <small>错误信息</small>
  </div>
  <button>提交</button>
</form>
```

// form-3

### 设置布局样式

设置表单的布局样式，好看一点：

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
    box-sizing: border-box;
}

body {
    background-color: #ffc600;
    font-family: 'Poppins', sans-serif;
    display: grid;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
}

.container {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,.3);
    overflow: hidden;
    width: 400px;
    max-width: 100%;
}

.header {
    border-bottom: 1px solid #f0f0f0;
    background-color: #4b88fb;
    color: #fff;
    padding: 20px 40px;
}

.header h2 {
    margin: 0;
}

.form {
    padding: 30px 40px;
}

.form button {
    background-color: #4b88fb;
    border: 2px solid #4b88fb;
    border-radius: 4px;
    color: #fff;
    display: block;
    font-family: inherit;
    font-size: 16px;
    padding: 10px;
    margin-top: 20px;
    width: 100%;
}

.form-control {
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: relative;
}

.form-control label {
    display: inline-block;
    margin-bottom: 5px;
}

.form-control input {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    font-family: inherit;
    font-size: 14px;
    padding: 10px;
    width: 100%;
}

.form-control input:focus {
    outline: 0;
    border-color: #777;
}


```

现在我们的表单样式变为了：

// form-4

现在我们测试一下验证成功和验证失败的情况下的样式（临时验证样式）：

为 `form-control` 分别添加 `success` 或 `error` 类：

```html
  <div class="form-control success">
    <label for="username">用户名</label>
    <input type="text" id="username" placeholder="输入用户名" />
    <i class="fas fa-check-circle"></i>
    <i class="fas fa-exclamation-circle"></i>
    <small>错误信息</small>
  </div>
  <div class="form-control error">
    <label for="email">邮箱地址</label>
    <input type="text" id="email" placeholder="输入邮箱" />
    <i class="fas fa-check-circle"></i>
    <i class="fas fa-exclamation-circle"></i>
    <small>错误信息</small>
  </div>
```

样式文件中添加相应的样式：

```css
.form-control.success input {
    border-color: #2ecc71;
}

.form-control.error input {
    border-color: #e74c3c;
}
```

可以看到：

// form-5



样式符合预期，删除掉 `from-control` 中的 `success` 以及 `error` 类。

### 验证逻辑