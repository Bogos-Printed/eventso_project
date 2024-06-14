<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\GroupModel;

class Joined extends Controller {
  protected object $group;

  public function __construct($param) {
    $this->group = new GroupModel();

    parent::__construct($param);
  }

  // public function postGroup() {
  //   $this->group->add($this->body);

  //   return $this->group->getLast();
  // }

  public function deleteJoined() {
    return $this->group->delete(intval($this->params['id']));
  }

  public function getJoined() {
    return $this->group->getUserGroupEvent(intval($this->params['user_id']));
  }
}
