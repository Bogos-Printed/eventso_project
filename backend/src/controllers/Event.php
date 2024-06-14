<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\EventModel;

class Event extends Controller {
  protected object $event;

  public function __construct($param) {
    $this->event = new EventModel();

    parent::__construct($param);
  }

  public function postEvent() {
    $this->setCorsHeaders();
    $this->event->add($this->body);
    header('HTTP/1.0 200 OK');
    return $this->event->getLast();
  }

  public function deleteEvent() {
    return $this->event->delete(intval($this->params['id']));
  }

  public function getEvent() {
    return $this->event->get(intval($this->params['id']));
  }

  public function putEvent() {
    $id = intval($this->params['id']);
    $this->setCorsHeaders();
    $this->event->put($id, $this->body);
    header('HTTP/1.0 200 OK');
    return $this->event->get($id);
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

  public function optionsEvent() {
    $this->setCorsHeaders();
    header('HTTP/1.0 200 OK');
  }
}
