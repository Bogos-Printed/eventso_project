<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\TemplateModel;

class Template extends Controller {
  protected object $template;

  public function __construct($param) {
    $this->template = new TemplateModel();

    parent::__construct($param);
  }

  public function getTemplate() {
    return $this->template->getAll();
  }
}
