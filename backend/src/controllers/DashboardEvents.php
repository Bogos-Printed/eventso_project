<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\EventModel;

class DashboardEvents extends Controller {
  protected object $events;

  public function __construct($param) {
    $this->events = new EventModel();

    parent::__construct($param);
  }

  public function getDashboardEvents() {
    return $this->events->getFromUser(intval($this->params['user_id']));
  }
}
