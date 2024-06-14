<?php

namespace App\Models;

use \PDO;
use stdClass;

class RegisterModel extends SqlConnect {
  public function add(array $data) {
    session_start();
    $query = "
      INSERT INTO user (id_session, username, firstname, lastname, email, password)
      VALUES (:id_session, :username, :firstname, :lastname, :email, :password)
    ";

    $req = $this->db->prepare($query);
    $req->execute([
      'id_session' => session_id(),
      "username"=>$data['username'],
      "firstname"=>$data['firstname'],
      "lastname"=>$data['lastname'],
      "email"=>$data['email'],
      "password"=>password_hash($data['password'], PASSWORD_DEFAULT)
    ]);
  }

  public function put(int $id, array $body) {
    $query = "UPDATE user SET username = :username, firstname = :firstname, lastname = :lastname,
      email = :email, password = :password 
      WHERE id = :id
    ";

    $req = $this->db->prepare($query);
    $req->execute([
      "id"=>$body[$id],
      "id_session"=>$body['id_session'],
      "username"=>$body['username'],
      "firstname"=>$body['firstname'],
      "lastname"=>$body['lastname'],
      "email"=>$body['email'],
      "password"=>$body['password'],
    ]);
  }

  // public function delete(int $id) {
  //   $req = $this->db->prepare("DELETE FROM user WHERE id = :id");
  //   $req->execute(["id" => $id]);
  // }

  public function get(int $id) {
    $req = $this->db->prepare("SELECT * FROM user WHERE id = :id");
    $req->execute(["id" => $id]);

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM user ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getAll() {
    $req = $this->db->prepare("SELECT * FROM user ORDER BY id ASC");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
  }
}
