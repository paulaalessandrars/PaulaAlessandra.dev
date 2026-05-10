<?php
/**
 * Paula Alessandra — Portfolio v2
 * Contact form handler
 */

header('Content-Type: application/json; charset=utf-8');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido.']);
    exit;
}

// ── Sanitise inputs ──────────────────────────────────────────
$nome     = trim(strip_tags($_POST['nome']    ?? ''));
$email    = trim(strip_tags($_POST['email']   ?? ''));
$assunto  = trim(strip_tags($_POST['assunto'] ?? 'Contato via Portfólio'));
$mensagem = trim(strip_tags($_POST['mensagem'] ?? ''));

// ── Validate ─────────────────────────────────────────────────
$errors = [];

if (empty($nome))     $errors[] = 'Nome é obrigatório.';
if (empty($email))    $errors[] = 'E-mail é obrigatório.';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'E-mail inválido.';
if (empty($mensagem)) $errors[] = 'Mensagem é obrigatória.';
if (strlen($mensagem) < 10) $errors[] = 'Mensagem muito curta.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ── Simple IP-based rate limiting ─────────────────────────────
$throttle_file = sys_get_temp_dir() . '/contact_' . md5($_SERVER['REMOTE_ADDR'] ?? '') . '.txt';
$cooldown = 60; // seconds between submissions per IP

if (file_exists($throttle_file) && (time() - (int) file_get_contents($throttle_file)) < $cooldown) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Aguarde um momento antes de enviar novamente.']);
    exit;
}
file_put_contents($throttle_file, time());

// ── Build e-mail ──────────────────────────────────────────────
$to           = 'paulaalessandra_rodrigues@outlook.com';
$subject_line = mb_convert_encoding('[Portfólio] ' . mb_substr($assunto ?: 'Contato', 0, 80), 'UTF-8');

$body  = "Nova mensagem recebida pelo portfólio:\n\n";
$body .= "Nome:    {$nome}\n";
$body .= "E-mail:  {$email}\n";
$body .= "Assunto: {$assunto}\n";
$body .= str_repeat('-', 42) . "\n\n";
$body .= $mensagem . "\n\n";
$body .= str_repeat('-', 42) . "\n";
$body .= "Enviado em: " . date('d/m/Y H:i:s') . "\n";

$headers  = "From: noreply@paulaalessandra.dev\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . PHP_VERSION . "\r\n";

// ── Send ──────────────────────────────────────────────────────
if (mail($to, $subject_line, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Falha ao enviar. Entre em contato diretamente pelo e-mail ou WhatsApp.'
    ]);
}
