# time.gs

> non-builtin time operations

This is a (date)time library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/faretek1/inflator).

## Credits

- Time zone detector adapted from @Bambozzle: https://scratch.mit.edu/projects/662899804/

## Installation

Make sure you have inflator installed

`inflate install https://github.com/FAReTek1/time`

add time to your `inflator.toml` config:
```toml
[dependencies]
# ...
time = "https://github.com/FAReTek1/time"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/FAReTek1/time`
2. `cd time`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
