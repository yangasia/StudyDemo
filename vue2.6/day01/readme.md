# Vue构造函数

## 导出Vue时
执行了一下函数
```javascript
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```

### initMixin() 干了什么

1. 只给 Vue 添加原型方法 _init 在 Vue 的构造函数中会调用
2. _init 函数在初始化 Vue 势力时会被调用 主要干了以下几件事
> 定义了局部变量 vm 指向 this
>
> 通过自增变量 uid 记录当前实例的 _uid;
> 
> uid 定义在 init.js 文件中，保证唯一性
> 
> 给 Vue 实列设置 _isVue 属性
>
> 合并选项，有是否异步组件的区别 添加 $options 属性为选项（如何合并现象）？
>
> initProxy 方法使用 Proxy 代理一下实列的所有属性（没有有用的操作）添加了这个属性 _renderProxy 并赋值给他 Proxy 的对象 主要是检查语法错误
>
> 给实列添加 _self 属性指向实列 
>
> initLifecycle() 添加生命周期相关属性
>
> initEvents() 添加事件相关的属性

*通过 window.performance API 测试性能*


```javaScript
function initMixin (Vue: Class<Component>) {

  //给Vue 添加原型方法_init 在Vue的构造函数中会调用
  Vue.prototype._init = function (options?: Object) {init
    const vm: Component = this
    // a uid
    vm._uid = uid++

    let startTag, endTag
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`
      endTag = `vue-perf-end:${vm._uid}`
      mark(startTag)
    }

    // a flag to avoid this being observed
    vm._isVue = true
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
```