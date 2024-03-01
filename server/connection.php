<?php
class DBConnection
{
    private $MYSQLHOST = 'viaduct.proxy.rlwy.net';
    private $MYSQLDATABASE = 'railway';
    private $MYSQLUSER = 'root';
    private $MYSQLPASSWORD = 'GF3c2EE2AdfA6De2ce41ge3f4FHaB5-b';
    public function connect()
    {
        try {
            $conn = new PDO('mysql:host=' . $this->MYSQLHOST . ';dbname=' . $this->MYSQLDATABASE, $this->MYSQLUSER, $this->MYSQLPASSWORD);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}
