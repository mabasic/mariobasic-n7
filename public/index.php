<?php

declare(strict_types=1);

$projectRootDir  = __DIR__ . '/../';

// Compiles Phel code to PHP on each request and then runs it (Slow).
// require $projectRootDir . 'vendor/autoload.php';
// Phel\Phel::run($projectRootDir, 'app\\boot');

// Runs previously compiled PHP code (Fast).
require_once $projectRootDir . "vendor/autoload.php";
require_once $projectRootDir . "dist/app/boot.php";