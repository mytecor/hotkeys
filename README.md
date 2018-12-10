# shortcuts
Simple lightweight JS keyboard shortcuts library

# Usage
```html
<script src="/js/shortcuts.js" type="text/javascript"></script>
<script>
  shortcuts.start()
</script>
```

### Add new shortcut
```js
shortcuts.add('alt+arrowleft', (shortcut) => {
  alert(shortcut)
})
```
