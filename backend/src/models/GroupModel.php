<?php

namespace App\Models;

use \PDO;
use stdClass;

class GroupModel extends SqlConnect {
    public function add(array $data) {
      $query = "
        INSERT INTO user_group (group_id, user_id)
        VALUES (:group_id, :user_id)
      ";

      $req = $this->db->prepare($query);
      $req->execute($data);
    }

    public function delete(int $id) {
      $req = $this->db->prepare("DELETE FROM user_group WHERE user_id = :user_id");
      $req->execute(["user_id" => $id]);
    }

    public function get(int $id) {
      $req = $this->db->prepare("SELECT * FROM user_group WHERE group_id = :group_id");
      $req->execute(["group_id" => $id]);

      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getAll() {
      $req = $this->db->prepare("SELECT * FROM  user_group"); 
      $req->execute();
  
      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function addEventGroup(int $eventId) {
      $query = "INSERT INTO event_group (event_id)
        VALUES (:event_id)";
      $req = $this->db->prepare($query);
      $req->execute(["event_id" => $eventId]);
    }

    public function getGroupUser(int $group_id) {
      $req = $this->db->prepare(
        "SELECT ug.group_id, ug.user_id, u.firstname, 
        u.lastname, u.email 
        FROM user_group as ug
        INNER JOIN user as u 
        ON ug.user_id = u.id 
        WHERE group_id = :group_id");
      $req->execute(["group_id" => $group_id]);
  
      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getLast() {
      $req = $this->db->prepare("SELECT * FROM event_group ORDER BY id DESC LIMIT 1");
      $req->execute();
  
      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getUserGroupEvent(int $id) {
      $req = $this->db->prepare(
        "SELECT eg.event_id 
        FROM event_group AS eg
        LEFT JOIN user_group AS ug
        ON eg.id = ug.group_id
        WHERE ug.user_id = :user_id");
      $req->execute(["user_id" => $id]);

      return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
    }
}
