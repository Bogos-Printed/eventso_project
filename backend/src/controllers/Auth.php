<?php
//checks the user
// using session_start()

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\AuthModel;

class Auth extends Controller {
  protected object $auth;

  public function __construct($param) {
    $this->auth = new AuthModel();

    parent::__construct($param);
  }

  public function postAuth() {
    $this->optionsAuth();
    header('HTTP/1.0 200 OK');
    return $this->auth->add($this->body);
    // return $this->auth->getLast();
  }

  public function getAuth() {
    return $this->auth->get($this->params['id_session']);
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

  public function optionsAuth() {
    $this->setCorsHeaders();
    header('HTTP/1.0 200 OK');
  }
}
