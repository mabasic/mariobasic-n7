<?php

declare(strict_types=1);

$phelMode = getenv('PHEL_MODE');

file_put_contents("php://stdout", "\nPhel mode: $phelMode\n");

$projectRootDir  = __DIR__ . '/../';

if ($phelMode === 'slow') {
    // Compiles Phel code to PHP on each request and then runs it (Slow).
    require $projectRootDir . 'vendor/autoload.php';
    Phel\Phel::run($projectRootDir, 'app\\boot');

    return;
}

// Runs previously compiled PHP code (Fast).
require_once $projectRootDir . "vendor/autoload.php";
require_once $projectRootDir . "out/app/boot.php";
