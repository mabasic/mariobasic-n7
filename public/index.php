<?php

declare(strict_types=1);

$projectRootDir  = __DIR__ . '/../';


/**
 * Compiles Phel code to PHP on each request and then runs it (Slow).
 */

// use Phel\Phel;

// require $projectRootDir . 'vendor/autoload.php';

// Phel::run($projectRootDir, 'app\\boot');


/**
 * Runs previously compiled PHP code (Fast).
 */

use Phel\Compiler\Analyzer\Environment\GlobalEnvironmentSingleton;

require_once $projectRootDir . "vendor/autoload.php";

GlobalEnvironmentSingleton::initialize(); // I try to ride of this line in a later release.

require_once $projectRootDir . "dist/app/boot.php";