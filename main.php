<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // -----------------------------
    // 1. RECEIVE & SANITIZE INPUTS
    // -----------------------------
    $full_name         = trim($_POST['full_name'] ?? '');
    $last_name         = trim($_POST['last_name'] ?? '');
    $email             = trim($_POST['email'] ?? '');
    $call_date         = trim($_POST['call_date'] ?? '');
    $country_code      = trim($_POST['country_code'] ?? '');
    $phone             = trim($_POST['phone'] ?? '');
    $goal              = trim($_POST['goal'] ?? '');
    $investment_ready  = trim($_POST['investment_ready'] ?? '');
    $commitment        = trim($_POST['commitment'] ?? '');
    $experience        = trim($_POST['experience'] ?? '');

    // -----------------------------
    // 2. VALIDATIONS
    // -----------------------------
    if (
        $full_name === '' ||
        $last_name === '' ||
        $email === '' ||
        $call_date === '' ||
        $phone === '' ||
        $investment_ready === ''
    ) {
        exit("Missing required fields");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        exit("Invalid email address");
    }

    // Phone validation
    if ($country_code === "+91" && !preg_match("/^[0-9]{10}$/", $phone)) {
        exit("Invalid Indian phone number");
    }

    if ($country_code !== "+91" && !preg_match("/^[0-9]{7,15}$/", $phone)) {
        exit("Invalid phone number");
    }

    // -----------------------------
    // 3. EMAIL CONTENT
    // -----------------------------
    date_default_timezone_set("Asia/Kolkata");
    $submittedAt = date("d-m-Y h:i A");

    $to = "sriethiraj@getnos.io";
    $subject = "Quantum Algo – New Bootcamp Application";

    $message  = "New Application Received\n\n";
    $message .= "Full Name: $full_name $last_name\n";
    $message .= "Email: $email\n";
    $message .= "Call Date: $call_date\n";
    $message .= "Phone: $country_code $phone\n\n";

    $message .= "Goal: $goal\n";
    $message .= "Investment Ready: $investment_ready\n";
    $message .= "Commitment Level: $commitment\n";
    $message .= "Trading Experience: $experience\n\n";

    $message .= "Submitted On: $submittedAt\n";

    $headers  = "From: hello@getnos.io\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // -----------------------------
    // 4. SEND EMAIL
    // -----------------------------
    if (mail($to, $subject, $message, $headers)) {

        // -----------------------------
        // 5. REDIRECT LOGIC (CRITICAL)
        // -----------------------------
        if ($investment_ready === "No, end this application") {
            header("Location: sorry.html");
        } else {
            header("Location: thankyou.html");
        }
        exit();

    } 
}
?>
