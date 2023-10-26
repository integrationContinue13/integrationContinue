<?php
// Informations de connexion à la base de données
$host = '192.168.81.239'; // Adresse du serveur MySQL
$dbname = 'devworkshop'; // Nom de la base de données
$username = 'devworkshop'; // Nom d'utilisateur MySQL
$password = '2R0tOz253Zat'; // Mot de passe MySQL

try {
    // Connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Préparation de la requête SQL pour récupérer toutes les colonnes de la table "Catégories"
    $selectQuery = $pdo->prepare("SELECT * FROM Catégorie");
    $selectQuery->execute();

    // Affichage des colonnes de la table "Catégories"
    echo "<table border='1'>
            <tr>
                <th>nom_cat</th>
                <th>cat_picture</th>
            </tr>";

    while ($row = $selectQuery->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr>";
        echo "<td>" . $row['nom_cat'] . "</td>";
        echo "<td>" . $row['cat_picture'] . "</td>";
        echo "</tr>";
    }

    echo "</table>";
} catch (PDOException $e) {
    echo 'Erreur : ' . $e->getMessage();
}
?>
