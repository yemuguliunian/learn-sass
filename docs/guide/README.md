---
title: 快速入门
---

## 使用变量

```sass``` 使用$符号来标识变量

<style lang="scss">
$font-size: 20px;
.title {
    $color: red;
    color: $color;
    font-size: $font-size;
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