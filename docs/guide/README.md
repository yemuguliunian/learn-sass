---
title: 快速入门
---

## 使用变量

```sass``` 使用$符号来标识变量

<style lang="scss">
$font-size: 20px;
.demo {
    .title {
        $color: red;
        color: $color;
        font-size: $font-size;
    }
}
$highlight-color: #F90;
$highlight-border: 1px solid $highlight-color;
.selected {
    border: $highlight-border;
}
</style>

### 变量命名

```scss
$font-size: 20px;
.title {
    $color: red;
    color: $color;
    font-size: $font-size;
}
```

`$color`这个变量定义在了`title`的`{ }`，所以它只能在`title`规则块内使用。这意味着是你可以在样式表的其他地方定义和使用`$color`变量，不会对这里造成影响。

```html
<div class="title">变量命名</div>
```

结果

<div class="demo">
    <h1 class="title">变量</h1>
</div>

### 变量引用

```scss
$highlight-color: #F90;
$highlight-border: 1px solid $highlight-color;
.selected {
    border: $highlight-border;
}
```

```html
<button class="selected">变量引用</button>
```

结果

<div class="demo">
    <button class="selected">变量引用</button>
</div>

## 嵌套 CSS 规则

```scss
#content {
    article {
        h1 { color: #333 }
        p { margin-bottom: 1.4em }
    }
  aside { background-color: #EEE }
}
```

#编译后#

```css
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
```

### 父选择器的标识符&

```scss
article a {
    color: blue;
    &:hover { color: red }
}
```

#编译后#

```css
article a { color: blue }
article a:hover { color: red }
```

### 群组选择器的嵌套

```scss
.container {
    h1, h2, h3 {margin-bottom: .8em}
}
```

#编译后#

```css
.container h1, .container h2, .container h3 { margin-bottom: .8em }
```

```scss
nav, aside {
    a {color: blue}
}
```

#编译后#

```css
nav a, aside a {color: blue}
```

### 子组合选择器和同层组合选择器：>、+和~

**子组合选择器 >, 选择一个元素的直接子元素**

<style lang="scss">
.demo-1 section { margin: 5px 0 }
.demo-1 > section { border: 1px solid #ccc }
</style>

```scss
.demo-1 section { margin: 5px 0 }
.demo-1 > section { border: 1px solid #ccc }
```

```html
<div class="demo">
    <article class="demo-1">
        <section>第一层级-1</section>
        <div>
            <section>第二层级-1</section>
        </div>
    </article>
</div>
```

<div class="demo">
    <article class="demo-1">
        <section>第一层级-1</section>
        <div>
            <section>第二层级-1</section>
        </div>
        <section>第一层级-2</section>
    </article>
</div>

上例中，第一个选择器会选择`article`下的所有命中`section`选择器的元素。第二个选择器只会选择`article`下紧跟着的子元素中命中`section`选择器的元素。

**同层相邻组合选择器+**

用同层相邻组合选择器+选择`header`元素后紧跟的`p`元素：

<style lang="scss">
.demo-2 + p {
    font-size: 1.1em; 
}
</style>

```scss
.demo-2 + p {
    font-size: 1.1em; 
}
```

```html
<header class="demo-2"> 
    <p>子元素-p</p>
</header>
<p>同层元素-p-1</p>
<div></div>
<p>同层元素-p-2</p>
```

<div class="demo">
    <header class="demo-2"> 
        <p>子元素-p</p>
    </header>
    <p>同层元素-p-1</p>
    <div></div>
    <p>同层元素-p-2</p>
</div>

**同层相邻组合选择器~**

你也可以用同层全体组合选择器~，选择所有跟在`header`后的同层`p`元素，不管它们之间隔了多少其他元素：

<style lang="scss">
.demo-3 ~ p {
    font-size: 1.1em; 
}
</style>

```scss
.demo-3 ~ p {
    font-size: 1.1em; 
}
```

```html
<header class="demo-3"> 
    <p>子元素-p</p>
</header>
<p>同层元素-p-1</p>
<div></div>
<p>同层元素-p-2</p>
```

<div class="demo">
    <header class="demo-3"> 
        <p>子元素-p</p>
    </header>
    <p>同层元素-p-1</p>
    <div></div>
    <p>同层元素-p-2</p>
</div>

### 嵌套属性

在sass中，除了CSS选择器，属性也可以进行嵌套。

```scss
nav {
    border: 1px solid #ccc {
        left: 0px;
        right: 0px;
    }
}
```

这比下边这种同等样式的写法要好：

```css
nav {
    border: 1px solid #ccc;
    border-left: 0px;
    border-right: 0px;
}
```

## 导入SASS文件

### 使用SASS部分文件

那些专门为@import命令而编写的sass文件，并不需要生成对应的独立css文件，这样的sass文件称为局部文件。对此，sass有一个特殊的约定来命名这些文件。

此约定即，sass局部文件的文件名以下划线开头。这样，sass就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入。当你`@import`一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入`themes/_night-sky.scss`这个局部文件里的变量，你只需在样式表中写`@import "themes/night-sky"`;。

### 默认变量值

一般情况下，你反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值。举例说明：

```scss
$link-color: blue;
$link-color: red;
a {
    color: $link-color;
}
```

在上边的例子中，超链接的`color`会被设置为`red`。

假如你写了一个可被他人通过@import导入的sass库文件，你可能希望导入者可以定制修改sass库文件中的某些值。使用sass的!default标签可以实现这个目的。它很像css属性中!important标签的对立面，不同的是!default用于变量，含义是：如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。

<style lang="scss">
$fancybox-width: 400px !default;
.fancybox {
    height: 100px;
    width: $fancybox-width;
    background-color: #bfbfbf;
}
</style>

```scss
$fancybox-width: 400px !default;
.fancybox {
    width: $fancybox-width;
}
```

<div class="demo">
    <div class="fancybox"></div>
</div>

### 嵌套导入

跟原生的css不同，sass允许@import命令写在css规则内。这种导入方式下，生成对应的css文件时，局部文件会被直接插入到css规则内导入它的地方。举例说明，有一个名为_blue-theme.scss的局部文件

## 混合器

定义一个非常简单的混合器，目的是添加跨浏览器的圆角边框。

```scss
@mixin rounded-corners {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
```

然后就可以在你的样式表中通过@include来使用这个混合器，放在你希望的任何地方。@include调用会把混合器中的所有样式提取出来放在@include被调用的地方。如果像下边这样写：

```scss
notice {
    background-color: green;
    border: 2px solid #00aa00;
    @include rounded-corners;
}

//sass最终生成：
```

```css
.notice {
    background-color: green;
    border: 2px solid #00aa00;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
```

### 混合器传参

混合器并不一定总得生成相同的样式。可以通过在`@include`混合器时给混合器传参，来定制混合器生成的精确样式。当`@include`混合器时，参数其实就是可以赋值给`css`属性值的变量。如果你写过`JavaScript`，这种方式跟`JavaScript`的`function`很像：

```scss
@mixin link-colors($normal, $hover, $visited) {
    color: $normal;
    &:hover { color: $hover; }
    &:visited { color: $visited; }
}
```
当混合器被`@include`时，你可以把它当作一个`css`函数来传参。如果你像下边这样写：

```scss
a {
    @include link-colors(blue, red, green);
}

//Sass最终生成的是：

a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }
```

当你`@include`混合器时，有时候可能会很难区分每个参数是什么意思，参数之间是一个什么样的顺序。为了解决这个问题，`sass`允许通过语法`$name: value`的形式指定每个参数的值。这种形式的传参，参数顺序就不必再在乎了，只需要保证没有漏掉参数即可：

```scss
a {
    @include link-colors(
        $normal: blue,
        $visited: green,
        $hover: red
    );
}
```

### 默认参数值

参数默认值使用`$name: default-value`的声明形式，默认值可以是任何有效的`css`属性值，甚至是其他参数的引用，如下代码：

```scss
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

如果像下边这样调用：`@include link-colors(red)` `$hover`和`$visited`也会被自动赋值为`red`。

## 选择器继承

选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式。这个通过`@extend`语法实现，如下代码:

```scss
//通过选择器继承继承样式
.error {
    border: 1px solid red;
    background-color: #fdd;
}
.seriousError {
    @extend .error;
    border-width: 3px;
}
```

在上边的代码中，`.seriousError`将会继承样式表中任何位置处为`.error`定义的所有样式。

`.seriousError`不仅会继承`.error`自身的所有样式，任何跟`.error`有关的组合选择器样式也会被`.seriousError`以组合选择器的形式继承，如下代码:

```scss
// .seriousError从.error继承样式
.error a{  // 应用到.seriousError a
    color: red;
    font-weight: 100;
}
h1.error { // 应用到hl.seriousError
    font-size: 1.2rem;
}
```

<style lang="scss">
#example-extend-1 {
    .error {
        border: 1px solid red;
        background-color: #fdd;
    }
    .seriousError {
        @extend .error;
        border-width: 3px;
    } 
    .error a{  // 应用到.seriousError a
        color: red;
        font-weight: 100;
    }
    h1.error { // 应用到hl.seriousError
        font-size: 1.2rem;
    }
}
</style>

```html
<h1>
    <div class="seriousError">
        <a>seriousError-a</a>
    </div>
</h1>  
```

<div class="demo" id="example-extend-1">
    <h1>
        <div class="seriousError">
            <a>seriousError-a</a>
        </div>
    </h1>   
</div>