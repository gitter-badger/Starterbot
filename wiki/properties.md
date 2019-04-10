# Command Properties

```js
name: 'eval',
usage: 'eval <code>',
desc: 'evaluates javascript code',
owneronly: true,
```

## name

> String (Property Required)

```js
name: 'eval', // $eval will trigger the command
```

## usage

> String (Property Required)

```js
usage: 'eval <code>', // $eval 1 + 1
```

## desc

> String (Property Required)

```js
desc: 'evaluates javascript code', // $help eval returns: 'evaluates javascript code'
```

## owneronly

> Boolean (Property Optional)

```js
owneronly : true, // Stops users from using owner command
```