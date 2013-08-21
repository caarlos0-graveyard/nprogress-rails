# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = "nprogress-rails"
  spec.version       = "0.1.0.1"
  spec.authors       = ["Carlos Alexandro Becker"]
  spec.email         = ["caarlos0@gmail.com"]
  spec.description   = %q{This is a gem for the rstacruz' nprogress implementation. It's based on version nprogress 0.1.0.}
  spec.summary       = %q{Slim progress bars for Ajax'y applications. Inspired by Google, YouTube, and Medium.}
  spec.homepage      = "http://carlosbecker.com/about"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end
