<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\EventModel;

class Events extends Controller {
  protected object $events;

  public function __construct($param) {
    $this->events = new EventModel();

    parent::__construct($param);
  }

  public function getEvents() {
    return $this->events->getAll();
  }
}
