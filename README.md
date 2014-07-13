# nprogress-rails

This is basically a ruby gem for asset pipeline which includes the version
0.1.6 of the awesome [rstacruz][rstacruz]' [nprogress][lib] library.

- [**Original lib**][lib]
- [**Demo**][demo]


[rstacruz]: https://github.com/rstacruz
[lib]: https://github.com/rstacruz/nprogress
[demo]: http://ricostacruz.com/nprogress/

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

The `nprogress-turbolinks` is required only if you use turbolinks. Using pjax
rather than turbolinks? Simply require `nprogress-pjax` instead. Want it also
for simple jQuery AJAX calls? Just require `nprogress-ajax`. Otherwise,
you will have to deal with show/hide the progress by your own.

Also, into your `application.css.scss` file:

```scss
*= require nprogress
*= require nprogress-bootstrap
```

The `nprogress-bootstrap` is required if you use bootstrap and have a fixed
toolbar or anything else. tl;dr: if the console shows no erros, but the
progress doesn't appear, try this.

## Customization

You can use any of the configurations described in the [readme](https://github.com/rstacruz/nprogress#configuration)
with this lib. I just recommend you to do so ASAP, for example, just after
the `nprogress-rails` require:

```coffeescript
# this is the application.js.coffee file:

#= require jquery
#= require jquery_ujs
#= require turbolinks
#= require nprogress
#= require nprogress-turbolinks

NProgress.configure
  showSpinner: false
  ease: 'ease'
  speed: 500
```

Since the [v0.1.2.3 release](https://github.com/caarlos0/nprogress-rails/releases/tag/v0.1.2.3),
you can also change the color of the progressbar using SASS:

```scss
$nprogress-color: #f1f1f1;
@import 'nprogress';
@import 'nprogress-bootstrap';
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
