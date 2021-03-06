# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "taorain"
  spec.version       = "0.2.28"
  spec.authors       = ["St\xC3\xA9phane Mourey"]
  spec.email         = ["steph@stephanemourey.fr"]

  spec.summary       = %q{The theme to use for the subdomains of stephanemourey.fr.}
  spec.homepage      = "http://stephanemourey.fr"
  spec.license       = "AGPL-3.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.4"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
