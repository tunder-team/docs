---
title: Installation
description: Quidem magni aut exercitationem maxime rerum eos.
---

Follow the instructions on this page to create a new project with Tunder Framework

---

## Requirements
- The [Dart SDK](https://dart.dev/get-dart) is all you need to have installed in your environment in order to start creating a Tunder project.


## Install Tunder CLI

[Tunder CLI](https://pub.dev/packages/tunder_cli) is a package with a sole purpose of helping developers to create Tunder projects. To install the CLI run the following command:

```shell
dart pub global activate tunder_cli
```

Now you can create a new Tunder project with the `create` command, like so:

```shell
tunder create my_first_tunder_app
```

That's it! Now you can just enjoy building your app.

## How to run?

To run your tunder app you can just use VSCode to run your app in `bin/main.dart` file or run it manually with this command:

```shell
dart run bin/main.dart
```

### Hot Reload
Tunder apps comes with hot reload out of the box thanks to [Shelf Hotreload](https://pub.dev/packages/shelf_hotreload) package. If you're running your app via command line please add the flag `--vm-enable-service` to enable it:

```shell
dart run bin/main.dart --vm-enable-service
```

{% callout title="Tip: create an alias to run your apps" %}
You can create a bash/zsh alias to the `bin/main.dart` file which is the default entry point for dart apps. You can create something like: `alias run="dart run bin/main.dart"` and then you can simply use it for all your Tunder apps. :wink:
{% /callout %}
