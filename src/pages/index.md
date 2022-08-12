---
title: Getting started
pageTitle: Tunder
description: The Dart Framework For App Creators
---

Learn how to get started with Tunder Framework in just a few minutes. {% .lead %}

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/docs/installation" description="Step-by-step guides to setting up your system and installing the library." /%}

{% quick-link title="Architecture guide" icon="presets" href="/" description="Learn how the internals work and contribute." /%}

{% quick-link title="Plugins" icon="plugins" href="/" description="Extend the library with third-party plugins or write your own." /%}

{% quick-link title="API reference" icon="theming" href="/" description="Learn to easily customize and modify your app's visual design to fit your brand." /%}

{% /quick-links %}


## Why Tunder?

Tunder is a framework for creating server side apps that are easy to use and easy to maintain. It was heavily inspired by
some famous frameworks like [Laravel](https://laravel.com/) for PHP, [Ruby on Rails](https://rubyonrails.org/) for Ruby
and [Adonisjs](https://adonisjs.com/) for Node.js. So Tunder was created to be the referenced framework for Dart language.

---

## Tunder at a Glance

Keep reading this page if you want to take a look at a brief summary of how to use Tunder as your backend framework for dart
language.

### Route System

Tunder has it's own route system implemented from scratch using the core `dart:io` library. Here is how you can define
your routes:

```dart
web() {
  Route.get('/', () => 'Hello World');
  // or
  Route.get('/', HomeController, 'index');
}
```

Tunder will automatically create an instance of the `HomeController` class and inject all dependencies needed into it.

{% callout title="Why do we use dart:mirrors?" %}
There is a known issue with mirrors library from the Dart team that we are aware of. However we are still using mirrors because
we need reflection system in Dart, and for now, mirrors is the only option to use reflection without generators.
We don't use generators because they don't provide a good Developer Experience (DX) and overtime increases build time
to your app which is something that we're avoiding at most. Read this issue on Github for further details and examples
about using mirrors, it's pros and cons etc.
{% /callout %}

### Controllers

Controllers is one important peace of a MVC framework like Tunder. Here is how a controller looks like:

```dart
import 'package:tunder/http.dart';

class HomeController extends Controller {
  index() {
    var date = 3.days.ago; // did you know that you can use dates like this? Looks like rails right? ;D

    return 'Hello World! Three days ago was: ${date}';
  }
}
```

### Database Migrations

Tunder provides a database migration system out of the box and here is sample migratino for the users table:

```dart
import 'package:tunder/database.dart';

class Migration_2022_08_08_143401 extends Migration {
  final id = '2022_08_08_143401';
  final name = 'Create users table';

  up() async {
    await Schema.create('users', (table) {
      table
        ..id()
        ..string('name').notNullable()
        ..string('email').notNullable().unique()
        ..string('password').nullable()
        ..json('settings').notNullable().defaultValue('{}')
        ..softDeletes()
        ..timestamps();
    });
  }

  down() async {
    await Schema.drop('users');
  }
}

```

### Database Queries

Let's retrieve the users table you could create in a new controller for users:

```dart
import 'package:tunder/database.dart';
import 'package:tunder/http.dart';

class UsersController extends Controller {
  index() async {
    final query = Query('users')
      ..where('created_at').between(3.days.ago, DateTime.now())
      ..where('email').endsWith('@domain.com');

    return query.paginate();
  }
}
```

This will return a json string in the following format:

```json
{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@domain.com",
      "created_at": "...",
      "udpated_at": "...",
      "deleted_at": null
    }
    ...
  ],
  "meta": {
    "currentPage": 1,
    "perPage": 10,
    "total": 15,
    "from": 1,
    "to": 10,
    "lastPage": 2,
  }
}
```

### Middlewares

The middleware system is super simple and works out of the box with the Routing sysmtem. Actually, the routing system
was designed with Middlewares in mind. So here is an example of a Middleware class:

```dart
import 'dart:async';

import 'package:tunder/http.dart';

class ExampleMiddleware extends Middleware {
  @override
  FutureOr<Response> handle(Request request, next) async {
    // do something before the request is handled
    Response response = await next(request);
    // do something after the request is handled with the response
    return response;
  }
}
```

Now, here's how you can use your new middleware in your routes definitions:

```dart
web() {
  Route.middleware(ExampleMiddleware).group(() {
    Route.get('users', UsersController, 'index').name('users.index');
    Route.post('users', UsersController, 'store').name('users.store');
    ...
  });
}
```


---

## More

This is just the basics of the Framework. There's a lot more things to come with Tunder that you will definitely love.
Stay tunned with our channel and community

### How to Submit a Bug

This framework is actively under development and sometimes you might face some bugs. If that's the case please feel free
to start a discussion on [Github Discussions](https://github.com/tunder-team/tunder/discussions/). We have a "Bug" discussion
category where you can submit your bug there.

### Join Our Discord Community

We have an official Discord Community server to discuss everything related to the framework and to help each other be
app creators with this amazing programming language Dart. Feel free to join and leave us at your pleasure. Click on
this [link to join our Discord channel](https://discord.gg/WMGEb87syE).

### Show Some Love?

There're few ways to show your love and appreciation for this project:

1. Share this page with everybody!
2. Give a Star in [Github repository](https://github.com/tunder-team/tunder)
3. Join the community on [Discord](https://discord.gg/WMGEb87syE)
4. Become a [sponsor](https://github.com/marcotas) of the framework on [Github](https://github.com/marcotas)

I'm already your fan if you read this line. ❤️ 😉
