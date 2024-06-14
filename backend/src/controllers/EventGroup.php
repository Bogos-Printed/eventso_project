<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\GroupModel;

class EventGroup extends Controller {
  protected object $group;

  public function __construct($param) {
    $this->group = new GroupModel();

    parent::__construct($param);
  }

  public function postEventGroup() {
    $this->group->addEventGroup(intval($this->params['event_id']));
    return $this->group->getLast();
  }

  public function deleteGroup() {
    return $this->group->delete(intval($this->params['event_id']));
  }
}
