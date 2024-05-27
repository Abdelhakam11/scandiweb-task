<?php

namespace Commons\Helper;

use Exception;
use PDO;
use PDOException;
use PDOStatement;

class DataBaseConnection
{

    private string $host = 'localhost';

    private string $port= '3306';
    private string $dbname = 'scandiweb';
    private string $username = 'root';
    private string $password = '';
    private PDO $pdo;

    /**
     * @throws Exception If connection fails.
     */
    public function __construct()
    {
        try {
            $dsn="mysql:host={$this->host};port={$this->port};dbname={$this->dbname};charset=utf8";
            $this->pdo = new PDO($dsn, $this->username, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            throw new Exception("Connection failed: " . $e->getMessage());
        }
    }

    /**
     * @param string $sql The SQL query string.
     * @param array $params The parameters to bind to the query (optional).
     * @return PDOStatement The prepared statement object.
     * @throws Exception If query execution fails.
     */
    public function query(string $sql, array $params = []): PDOStatement
    {
        try {
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {
            throw new Exception("Query failed: " . $e->getMessage());
        }
    }

    /**
     * @param string $sql The SQL query string.
     * @param array $params The parameters to bind to the query (optional).
     * @return array An array containing all rows fetched.
     * @throws Exception If query execution fails.
     */
    public function fetchAll(string $sql, array $params = []): array
    {
        $stmt = $this->query($sql, $params);
        return $stmt->fetchAll();
    }
}
