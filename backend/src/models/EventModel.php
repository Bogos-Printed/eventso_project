<?php

namespace App\Models;

use \PDO;
use stdClass;

class EventModel extends SqlConnect {
  public function add(array $data) {
    $query = "
      INSERT INTO events (user_id, image, title, description, location, date, category)
      VALUES (:userId, :image, :title, :description, :location, :date, :category)
    ";

    $req = $this->db->prepare($query);
    $req->execute($data);
  }

  public function put(int $id, array $body) {
    $query = "UPDATE events SET image = :image, title = :title, description = :description,
      location = :location, date = :date, category = :category 
      WHERE id = :id
    ";

    $req = $this->db->prepare($query);
    $req->execute([
      "image"=>$body['image'],
      "title"=>$body['title'],
      "description"=>$body['description'],
      "location"=>$body['location'],
      "date"=>$body['date'],
      "category"=>$body['category'],
      "id"=>$id
    ]);
  }

  public function delete(int $id) {
    $req = $this->db->prepare("DELETE FROM events WHERE id = :id");
    $req->execute(["id" => $id]);
  }

  public function get(int $id) {
    $req = $this->db->prepare("SELECT * FROM events WHERE id = :id");
    $req->execute(["id" => $id]);

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM events ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getAll() {
    $req = $this->db->prepare("SELECT * FROM events ORDER BY date ASC");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getFromUser(int $id) {
    $req = $this->db->prepare("SELECT * FROM events WHERE user_id = :user_id");
    $req->execute(["user_id" => $id]);

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
  }
}
