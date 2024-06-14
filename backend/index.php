<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;
use App\Controllers\Event;
use App\Controllers\Events;
use App\Controllers\Auth;
use App\Controllers\DashboardEvents;
use App\Controllers\EventGroup;
use App\Controllers\Group;
use App\Controllers\Register;
use App\Controllers\Template;
use App\Controllers\Joined;

new Router([
  'user/:id' => User::class,
  'user/add/' => User::class,
  'joined/:user_id' => Joined::class,
  'event/:id' => Event::class,
  'event/add/' => Event::class,
  'events' => Events::class,
  'dashboard/:user_id' => DashboardEvents::class,
  'group/:event_id' => EventGroup::class,
  'models' => Template::class,
  'participants/:group_id' => Group::class,
  'auth/' => Auth::class,
  'auth/:id_session' => Auth::class,
  'register' => Register::class
]);
