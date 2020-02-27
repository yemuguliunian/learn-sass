# 使用变量

```sass``` 使用$符号来标识变量

## 变量命名

```sass
$font-size: 20px;
.title {
    $color: red;
    color: $color;
    font-size: $font-size;
}
```

`$color`这个变量定义在了`title`的`{ }`，所以它只能在`title`规则块内使用。这意味着是你可以在样式表的其他地方定义和使用`$color`变量，不会对这里造成影响。

```html
<div class="title">变量</div>
```

结果

<div class="demo">
    <h1 class="title">变量</h1>
</div>

<style lang="scss">
$font-size: 20px;
.title {
    $color: red;
    color: $color;
    font-size: $font-size;
}
</style>