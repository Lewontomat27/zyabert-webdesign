<?php
if(!empty($_POST['website'])) {
    die("Spam erkannt.");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $anrede = htmlspecialchars($_POST["anrede"]);
    $vorname = htmlspecialchars($_POST["vorname"]);
    $nachname = htmlspecialchars($_POST["nachname"]);
    $unternehmen = htmlspecialchars($_POST["unternehmen"]);
    $email = htmlspecialchars($_POST["email"]);
    $telefon = htmlspecialchars($_POST["telefon"]);
    $anfrage = htmlspecialchars($_POST["anfrage"]);

    $empfaenger = "lewonti2007@gmail.com";
    $betreff = "Neue Anfrage über das Kontaktformular";

    $nachricht = "
Neue Kontaktanfrage:

Anrede: $anrede
Vorname: $vorname
Nachname: $nachname
Unternehmen: $unternehmen
E-Mail: $email
Telefon: $telefon

Nachricht:
$anfrage
";

    $header = "From: kontakt@deine-domain.de";
    $header .= "\r\nReply-To: $email";

    if(mail($empfaenger, $betreff, $nachricht, $header)) {
        echo "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.";
    } else {
        echo "Beim Senden der Nachricht ist ein Fehler aufgetreten.";
    }

}
?>