# **Discord to Discord**

Custom program to forward messages from Discord to Discord.

I assume no responsibility for locked Discord accounts that have used this file. Using this on a user account is prohibited by [Discord's TOS](https://discord.com/terms) and may lead to account lockout.


## • **Premium Features**

- [x] Sending messages (Content, Embeds & Files).
- [x] File to replace text content.
- [X] Disable or enable custom avatars/usernames.
- [X] Supports text/voice channels, forums and threads.
- [X] Servers sorted by folders.
- [X] Reply, Edited, Deleted, Pinned Messages.
- [X] File to replace Avatar/Username/Embed Content.
- [X] Support for multiple tokens.

All these features can be hired in my telegram channel: [t.me/xwxct](https://t.me/xwxct)


## • **Installation**

Necessary steps to make this script work.

### Download Nodejs

- Through this link you can [download](https://nodejs.org/en/download/current/) the latest version of **Nodejs** for **Windows** or **macOS**.

- Through this link you can [download](https://github.com/nodesource/distributions#using-ubuntu) the latest version of **Nodejs** for **Debian** or **Ubuntu**.

### Download packages

To install the necessary packages you will need to open a **terminal** in the **same folder** and run the command: **`npm install`**


## • **Configuration and Execution**

### Obtain your Discord Token

Run code (Discord Console - [Ctrl + Shift + I])

```js
window.webpackChunkdiscord_app.push([
    [Math.random()], {},
    req => {
        for (const m of Object.keys(req.c).map(x => req.c[x].exports).filter(x => x)) {
            if (m.default && m.default.getToken !== undefined) {
                return copy(m.default.getToken());
            }

            if (m.getToken !== undefined) {
                return copy(m.getToken());
            }
        }
    },
]);

console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

Credit: [hxr404](https://github.com/hxr404/Discord-Console-hacks)

### Discord Developers

To see the id of the discord channels you must activate the [developer mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) in your account.

### Configuration 

Once you have obtained this data you can follow the [example](/configuration/README.md) in the configuration folder of this repository.

### Execution

To execute the file you must open a **terminal** in the **same folder** and execute the command: **`node main.js`**