<?php

namespace App\Models;

use Exception;
use \PDO;
use PDOException;
use stdClass;

class AuthModel extends SqlConnect {
  public function add(array $data) {
    try {
      // $email = isset($data['email']) ?  $data['email'] : null;
      // $password = isset($data['password']) ? $data['password'] : null;
      if (empty($data['email']) || empty($data['password'])) {
        return [
          'code' => '400',
          'message' => 'Email and password are required'
        ];
      }

      $query = "SELECT * FROM user WHERE email = :email";

      $req = $this->db->prepare($query);
      $req->execute([
        "email"=> $data['email']
      ]);
      
      $res = $req->fetch(PDO::FETCH_ASSOC);
      if (!password_verify($data['password'], $res['password'])) {
        return [
          'code' => '401',
          'message' => 'Not authorized'
        ];
      }
      return [
        'code' => '200',
        'message' => 'Session OK',
        'PHP_SESSID' => $res['id_session']
      ];
    } catch (Exception $e) {
      throw new Exception($e);
    }
    // var_dump($req);
    // $user = $req->fetch(PDO::FETCH_ASSOC);
  }

  public function get(string $id_session) {
    $req = $this->db->prepare("SELECT * FROM user WHERE id_session = :id_session");
    $req->execute(["id_session" => $id_session]);
    $response =  $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    unset($response['password']);
    return $response;
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM user ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }
}
