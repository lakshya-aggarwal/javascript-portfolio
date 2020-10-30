# Javascript projects
Repository of Javascript projects.


## [Webpack-demo][https://github.com/lakshya-aggarwal/manufac/tree/main/webpack-demo]

This project uses Maven for building. Common commands:

From the root directory, run ``mvn -PautoInstallPackage clean install`` to build the bundle and content package and install to a CQ instance.

From the bundle directory, run ``mvn -PautoInstallBundle clean install`` to build *just* the bundle and install to a CQ instance.

## Using with AEM Developer Tools for Eclipse

To use this project with the AEM Developer Tools for Eclipse, import the generated Maven projects via the Import:Maven:Existing Maven Projects wizard. Then enable the Content Package facet on the _content_ project by right-clicking on the project, then select Configure, then Convert to Content Package... In the resulting dialog, select _src/main/content_ as the Content Sync Root.

## Using with VLT

To use vlt with this project, first build and install the package to your local CQ instance as described above. Then cd to `content/src/main/content/jcr_root` and run

    vlt --credentials admin:admin checkout -f ../META-INF/vault/filter.xml --force http://localhost:4502/crx

Once the working copy is created, you can use the normal ``vlt up`` and ``vlt ci`` commands.

## Specifying CRX Host/Port

The CRX host and port can be specified on the command line with:
mvn -Dcrx.host=otherhost -Dcrx.port=5502 <goals>



<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>webpack.js.org</h1>

  [![Build Status][build-status]][build-status-url]
  [![Standard Version][release]][release-url]
  [![chat on gitter][chat]][chat-url]

  Guides, documentation, and all things webpack.
</div>


## Content Progress

Now that we've covered much of the backlog of _missing documentation_, we are
starting to heavily review each section of the site's content to sort and
structure it appropriately. The following issues should provide a pretty good
idea of where things are, and where they are going:

- [Guides - Review and Simplify][guides-url]
- [Concepts - Review and Organize][concepts-url]

We haven't created issues for the other sections yet, but they will be coming
soon. For dev-related work please see [General - Updates & Fixes][general-url].

## Translation

To help translate this documentation please jump to the [translation branch][translate-url].

## Versioning

Since webpack 4 we have created a subdomain-based archive for older states of documentation
matching older webpack version. webpack 4's documentation is available at
[https://v4.webpack.js.org/](https://v4.webpack.js.org/) and is deployed from [`gh-pages` branch of v4.webpack.js.org repository](https://github.com/webpack/v4.webpack.js.org/tree/gh-pages)

There are various known issues that need fixing ([#3366](https://github.com/webpack/webpack.js.org/issues/3366)).

## Contributing

Read through the [writer's guide][writer-guide-url] if you're interested in editing the
content on this site. See the [contributors page][contributing-url] to learn how to set up and
start working on the site locally.

## License

The content is available under the [Creative Commons BY 4.0][license-url] license.

## Special Thanks

_BrowserStack_ has graciously allowed us to do cross-browser and cross-os
testing of the site at no cost...

[![BrowserStackLogo][browserstack]][browserstack-url]

_Vercel_ has given us a Pro account.

[![VercelLogo][vercel]][vercel-url]

[webpack5-milestone-url]: https://github.com/webpack/webpack.js.org/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22webpack+5%22
[build-status]: https://secure.travis-ci.org/webpack/webpack.js.org.svg
[build-status-url]: http://travis-ci.org/webpack/webpack.js.org
[browserstack]: ./browserstack-logo.png
[vercel]: ./src/assets/powered-by-vercel.svg
[browserstack-url]: http://browserstack.com/
[vercel-url]: https://vercel.com/?utm_source=webpackdocs
[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
[concepts-url]: https://github.com/webpack/webpack.js.org/issues/1386
[contributing-url]: https://github.com/webpack/webpack.js.org/blob/master/.github/CONTRIBUTING.md
[general-url]: https://github.com/webpack/webpack.js.org/issues/1525
[guides-url]: https://github.com/webpack/webpack.js.org/issues/1258
[license-url]: https://creativecommons.org/licenses/by/4.0/
[release]: https://img.shields.io/badge/release-standard%20version-brightgreen.svg
[release-url]: https://github.com/conventional-changelog/standard-version
[translate-url]: https://github.com/webpack/webpack.js.org/tree/translation
[writer-guide-url]: https://webpack.js.org/contribute/writers-guide
