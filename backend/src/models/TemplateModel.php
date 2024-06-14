<?php

namespace App\Models;

use \PDO;
use stdClass;

class TemplateModel extends SqlConnect {
  public function getAll() {
    $req = $this->db->prepare("SELECT * FROM models ORDER BY id ASC");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
  }
}
