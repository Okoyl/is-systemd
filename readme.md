## is-systemd
is-systemd is a tiny module in nodejs which returns true if the current nodejs app was launched from systemd.
It works by checking if the parent pid (process id) equals to 1.


Running as a systemd service:
```javascript
const isSystemd = require('is-systemd');
// true
```

Any other mode:
```javascript
const isSystemd = require('is-systemd');
// false
```
