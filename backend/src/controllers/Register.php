<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\RegisterModel;

class Register extends Controller {
  protected object $user;

  public function __construct($param) {
    $this->user = new RegisterModel();

    parent::__construct($param);
  }

  public function postRegister() {
    // $this->setCorsHeaders();
    $this->optionsRegister();
    $this->user->add($this->body);
    header('HTTP/1.0 200 OK');
    return $this->user->getLast();
  }

  public function getRegister() {
    return $this->user->get(intval($this->params['id']));
  }

  protected function header() {
    $this->setCorsHeaders();
  }

  protected function ifMethodExist() {
    $method = $this->reqMethod.''.$this->className;

    if (method_exists($this, $method)) {
      echo json_encode($this->$method());
      return;
    }

    header('HTTP/1.0 404 Not Found');
    echo json_encode([
      'code' => '404',
      'message' => 'Not Found'
    ]);
  }
  protected function setCorsHeaders() {
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json; charset=utf-8');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
  }

  public function optionsRegister() {
    $this->setCorsHeaders();
    header('HTTP/1.0 200 OK');
  }
}
