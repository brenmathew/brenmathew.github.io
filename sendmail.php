<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set email recipient
    $to = 'brenmathew10@gmail.com';
    // Set email subject
    $subject = 'Message from Contact Form';

    // Build email content
    $body = "Name: $fullname\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Set headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // If mail sent successfully, redirect back to the contact page with a success message
        header('Location: index.html?message=success');
    } else {
        // If mail sending failed, redirect back to the contact page with an error message
        header('Location: index.html?message=error');
    }
} else {
    // If accessed directly, redirect back to the contact page
    header('Location: index.html');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
    
}
?>
