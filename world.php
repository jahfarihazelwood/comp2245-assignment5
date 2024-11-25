<?php
$host = 'localhost';
$username = 'lab5_user';
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

$country = isset($_GET['country']) ? $_GET['country'] : '';
$stmt = $conn->prepare("SELECT name, continent, independence_year, head_of_state FROM countries WHERE name LIKE :country");
$stmt->execute(['country' => "%$country%"]);
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (count($results) > 0) {
    echo "<table border='1'>";
    echo "<thead>";
    echo "<tr><th>Country Name</th><th>Continent</th><th>Independence Year</th><th>Head of State</th></tr>";
    echo "</thead>";
    echo "<tbody>";
    foreach ($results as $row) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($row['name']) . "</td>";
        echo "<td>" . htmlspecialchars($row['continent']) . "</td>";
        echo "<td>" . htmlspecialchars($row['independence_year'] ?: 'N/A') . "</td>";
        echo "<td>" . htmlspecialchars($row['head_of_state']) . "</td>";
        echo "</tr>";
    }
    echo "</tbody>";
    echo "</table>";
} else {
    echo "<p>No countries found matching your search.</p>";
}
