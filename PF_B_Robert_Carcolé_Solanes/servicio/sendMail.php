<?php
// API sendinblue.com:  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

if (isset($_POST['subject']) && isset($_POST['body'])) {
    $subject = $_POST['subject'];
    $body = $_POST['body'];
    
    

require_once(__DIR__ . '/vendor/autoload.php');

$credentials = SendinBlue\Client\Configuration::getDefaultConfiguration()->setApiKey('api-key', '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');
$apiInstance = new SendinBlue\Client\Api\TransactionalEmailsApi(new GuzzleHttp\Client(),$credentials);

$sendSmtpEmail = new \SendinBlue\Client\Model\SendSmtpEmail([
     'subject' => $subject,
     'sender' => ['name' => 'Sendinblue', 'email' => 'rcarcoles@gmail.com'],
     'replyTo' => ['name' => 'Sendinblue', 'email' => 'rcarcoles@gmail.com'],
     'to' => [[ 'name' => 'Max Mustermann', 'email' => 'gsanox@gmail.com']],
     'htmlContent' => $body,
     'params' => ['bodyMessage' => 'made just for you!']
]);

try {
    $result = $apiInstance->sendTransacEmail($sendSmtpEmail);
    print_r($result);
} catch (Exception $e) {
    echo $e->getMessage(),PHP_EOL;
}
}