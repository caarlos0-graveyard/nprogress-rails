# nprogress-rails [![Gem Version](https://badge.fury.io/rb/nprogress-rails.svg)](http://badge.fury.io/rb/nprogress-rails) [![Dependency Status](https://gemnasium.com/caarlos0/nprogress-rails.svg)](https://gemnasium.com/caarlos0/nprogress-rails)  [![Stories in Ready](https://badge.waffle.io/caarlos0/nprogress-rails.png?label=ready&title=Ready)](https://waffle.io/caarlos0/nprogress-rails) 

This is basically a ruby gem for asset pipeline which includes the version
0.2.0 of the awesome [rstacruz][rstacruz]' [nprogress][lib] library.

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

You basically have to add the requires to the `application.js` file:

```javascript
//= require nprogress
//= require nprogress-turbolinks
```

The `nprogress-turbolinks` is required only if you use turbolinks. Using pjax
rather than turbolinks? Simply require `nprogress-pjax` instead. Want it also
for simple jQuery AJAX calls? Just require `nprogress-ajax`. Otherwise,
you will have to deal with show/hide the progress by your own.

Also, into your `application.css.scss` file:

```scss
*= require nprogress
*= require nprogress-bootstrap
*= require nprogress-turbolinks5
```

The `nprogress-bootstrap` is required if you use bootstrap and have a fixed
toolbar or anything else. tl;dr: if the console shows no errors, but the
progress doesn't appear, try this.

The `nprogress-turbolinks5` is required if you use turbolinks 5 and does not
want the default turbolinks progress to show up.

### Angular.js support

You can try the Angular.js support with something like this (again,
in `application.js` file):

```javascript
//= require nprogress
//= require nprogress-angular

angular.module('myApp', [ 'nprogress-rails' ]);
```

This should make all requests made with `$http` show/hide the NProgress bar.

## Customization

You can use any of the configurations described in the [readme](https://github.com/rstacruz/nprogress#configuration)
with this lib. I just recommend you to do so ASAP, for example, just after
the `nprogress-rails` require:

```javascript
//= require nprogress

NProgress.configure({
  showSpinner: false,
  ease: 'ease',
  speed: 500
});
```

Since the [v0.1.2.3 release](https://github.com/caarlos0/nprogress-rails/releases/tag/v0.1.2.3),
you can also change the color of the progressbar using SASS:

```scss
$nprogress-color: #f1f1f1;
$nprogress-height: 10px;
$nprogress-zindex: 10100;

@import 'nprogress';
@import 'nprogress-bootstrap';
```

## Ajax - jQuery or Prototype
`nprogress-ajax` automatically triggers the NProgress bar when an Ajax
request is started (the 'ajaxStart' event), and finishes it when the Ajax
request completes (the 'ajaxStop' event). This works for any Ajax events
triggered using jQuery.

If you're using Prototype, you can include the `nprogress-ajax-prototype`
javascript file instead, which works for Ajax requests started from Prototype
(the 'onCreate' and 'onComplete' events, to be exact).

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
