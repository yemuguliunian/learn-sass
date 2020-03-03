---
title: sass 与 less 区别
---

就官方文档来说，`sass`优于`less`

- [sass中文网](https://www.sass.hk/)
- [less中文网](http://lesscss.cn/)

## 相同点

`Sass`和`Less`都属于`CSS`预处理器，语法上有很多共性，都支持以下特性，但在具体用法上有些差异

- 变量
- 嵌套
- 混合(mixins)，传参
- 运算
- 作用域
- ...

## 不同点

### 环境差异    

`Sass`的安装需要安装`Ruby`环境，`Less`基于`JavaScript`

### 使用变量

#### 变量标识符的差异

```less
@font-size: 20px;
```

```scss
$font-size: 20px;
```

#### 变量插值的差异

```scss
$direction: left;
.box {
    padding-#{$direction}: 20px;                             
}
```

```less
@direction: left;
.box {
    padding-@{direction}: 20px;
}
```