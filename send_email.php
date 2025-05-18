<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $camera = $_POST['camera'] ?? '';
    $analog = $_POST['analog'] ?? '';
    $influencers = $_POST['influencers'] ?? '';

    $to = "mate.oszlanszki@gmail.com"
    $subject = "Új fotós űrlap beküldés";
    $message = "Név: $name\n";
    $message .= "Kamera: $camera\n";
    $message .= "Analóg fényképezőgép: $analog\n";
    $message .= "Kedvenc influenszerek: $influencers\n";

    $headers = "From: Webfejlesztes@beadando.hu";

    if (mail($to, $subject, $message, $headers)) {
        echo "Sikeres küldés!";
    } else {
        echo "Hiba történt a küldés során.";
    }
} else {
    echo "Hibás kérés.";
}
?>
