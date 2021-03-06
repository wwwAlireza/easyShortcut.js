# :keyboard:easyShortcut.js
### A JavaScript Library To Create Custom Keyboard Shortcuts -  [_See sample_ →](https://wwwalireza.github.io/easyShortcut.js/example/example.html)
Advantages: <br>
- Simplicity in making custom shortcuts
- Clean coding (no need to define many ifs and else anymore)
- Being object oriented
# How to use
### Install
First you need to download the file, and link the original file in the src folder to your html document <br>
```js
npm install easyshortcut
```
```html
<script src="easyShortcut.min.js"></script>
```
### Use
Then we create a new object (shortcut) for each shortcut <br>
```js
new shortcut({
  ctrl: false, //deafult
  alt: false, //deafult
  shift: false, //deafult
  meta: false, //deafult
  key: "A",
  fn: ()=>{
    alert("Hello World")
  }
})
```
> In the example above, if the user presses the "A" key, "Hello World" will be alerted <br>

### Options
**■ _Important keys_ :** <br>
Important keys include the following keys :
- ctrl
- alt
- shift
- meta
> The value of each is (false) by default <br>

**■ _key_** <br>
key is the key that does the job by combining important keys <br>

**■ _fn_** <br>
Its value must be a function. This function is executed when a shortcut is used <br>

## An example
For example, we want to move to the Google page when the shortcut ( ***Ctrl + Shift + G*** ) is executed :
```js
new shortcut({
  ctrl: true,
  shift: true,
  key: "G",
  fn: () => {
    window.open("https://google.com")
  }
})
```
Or we have a function ( **closeAllTabs** ) and we want it to run when the shortcut ( ***alt + c*** ) is used :
```js
new shortcut({
  alt: true,
  key: "c",
  fn: closeAllTabs
})
```
## Helper Function
If you want to create a shortcut but do not know how to enter the key value, by calling the function ( ***showKeyInfo()*** ), every time you press it, <br>
the corresponding key will be displayed in the console (log)
```js
showKeyInfo()
```
### Coverage
```text
---------------------|---------|----------|---------|---------|-------------------------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------|---------|----------|---------|---------|-------------------------------------
All files            |   20.28 |      100 |       0 |   20.28 |
 easyShortcut.min.js |   20.28 |      100 |       0 |   20.28 | ...,186-190,193-197,200-205,208-211
---------------------|---------|----------|---------|---------|-------------------------------------

```



