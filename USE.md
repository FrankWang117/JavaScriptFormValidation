## JavaScript 表单验证  
这篇文章主要学习如何使用 JavaScript 原生 `form` 进行表单验证。  

### 创建相关文件
在 VSCode 中创建 `index.html`、`main.js`、`styles.css` 三个文件：

![form-1](https://raw.githubusercontent.com/FrankWang117/images/master/2021-05-17/form-1.png?token=AFFPCSD6XSM2K7MXWKBVG23AUHGSI) 

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

![form-2](https://raw.githubusercontent.com/FrankWang117/images/master/2021-05-17/form-2.png?token=AFFPCSHXWI6D3476Z25NNN3AUHGT4)

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

![form-3](https://raw.githubusercontent.com/FrankWang117/images/master/2021-05-17/form-3.png?token=AFFPCSBX32A5NM7TSUZ6VR3AUHGV4)

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

![form-4](https://raw.githubusercontent.com/FrankWang117/images/master/2021-05-17/form-4.png?token=AFFPCSEWKTOKZSIDHAB5PLTAUHGW6)

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

![form-5](https://raw.githubusercontent.com/FrankWang117/images/master/2021-05-17/form-5.png?token=AFFPCSASFZ2FMSXIT2KDZETAUHGXW)



样式符合预期，删除掉 `from-control` 中的 `success` 以及 `error` 类。  

我们再通过样式控制相应的 icon 在正确的时候显示：

```css

.form-control i {
    visibility: hidden;
    position: absolute;
    top: 40px;
    right: 10px;
}

.form-control.success i.fa-check-circle {
    color: #2ecc71;
    visibility: visible;
}

.form-control.error i.fa-exclamation-circle {
    color: #e74c3c;
    visibility: visible;
}

.form-control small {
    color: #e74c3c;
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
}

.form-control.error small {
    visibility: visible;
}
```

![form-6](https://raw.githubusercontent.com/FrankWang117/images/master/2021-05-17/form-6.png?token=AFFPCSGC6ULY7FN3HURKQV3AUHGYO)

### 验证逻辑

首先是验证用户名的输入，不能输入空白：

```javascript
const form = getElementById('form');
const username = getElementById('username');
const email = getElementById('email');
const password = getElementById('password');
const confirmPassword = getElementById('confirm-password')

form.addEventListener('submit', e => {
    e.preventDefault();

    const usernameValue = username.value.trim();
		
    if (usernameValue === '') {
        setErrorFor(username, '用户名不能为空')
    } else {
        setSuccessFor(username);
    }
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function getElementById(id) {
    return document.getElementById(id)
}
```

当在用户名为空的时候点击“提交”按钮，将会得到相应的错误：

![form-7](https://raw.githubusercontent.com/FrankWang117/images/master/2021-05-17/form-7.png?token=AFFPCSCYGZBFS6D7IUBMMGLAUHGZA) 

同样的，验证 email，不过邮箱的验证需要使用正则表达式(更多关于正则表达式可以[参考此处](https://ihateregex.io/))

```javascript
// ...
form.addEventListener('submit', e => {
    e.preventDefault();

    // ...
		const emailValue = email.value
    
    if (emailValue === '') {
        setErrorFor(email, '邮箱地址不能为空');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, '不正确的邮箱地址');
    } else {
        setSuccessFor(email)
    }
    //...
});

function isEmail(email) {
  return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)
}
```

现在，验证两个密码输入框：

```javascript
form.addEventListener('submit', e => {
    e.preventDefault();

    //...
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (passwordValue === '') {
        setErrorFor(password, '密码不能为空');
    } else {
        setSuccessFor(password)
    }

    if (confirmPasswordValue === '') {
        setErrorFor(confirmPassword, '确认密码不能为空')
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, '两次密码不匹配')
    } else {
        setSuccessFor(confirmPassword)
    }
  	//...
});
```

至此，总体验证一下，输入错误的表单信息：

![form-8](https://raw.githubusercontent.com/FrankWang117/images/master/2021-05-17/form-8.png?token=AFFPCSDR3RT67CCPRK6VQXLAUHG2C)

以及修改后的正确的表单信息

![form-9](https://raw.githubusercontent.com/FrankWang117/images/master/2021-05-17/form-9.png?token=AFFPCSF2IBRSINVGE73J3STAUHG2U)

## 总结

这次的表单验证只是简单的在点击“提交”按钮的时候再去验证，当然体验不会很好，实际生产中也很少使用这种方式，但是万变不离其宗，基本思路是相同的。