<?php

declare(strict_types=1);

use Phel\Phel;

$projectRootDir  = __DIR__ . '/../';

require $projectRootDir . 'vendor/autoload.php';

Phel::run($projectRootDir, 'app\\boot');