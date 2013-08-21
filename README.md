# nprogress-rails

This is basically a ruby gem for asset pipeline which includes the version
0.1.0 of the awesome rstacruz' [nprogress](https://github.com/rstacruz/nprogress)
library.

## Installation

Add this line to your application's Gemfile:

    gem 'nprogress-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install nprogress-rails

## Usage

You basically have to add the requires.

In your `application.js.coffee` (or just JS):

```coffeescript
#= require nprogress
#= require nprogress-turbolinks
```

The `nprogress-turbolinks` is required only if you use turbolinks. Otherwise,
you will have to deal with show/hide the progress by your own.

Also, into your `application.css.scss` file:

```scss
*= require nprogress
*= require nprogress-bootstrap
```

The `nprogress-bootstrap` is required if you use bootstrap and have a fixed
toolbar or anything else. tl;dr: if the console shows no erros, but the
progress doesn't appear, try this.


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
