<?php

declare(strict_types=1);

use Phel\Config\PhelConfig;

return PhelConfig::forProject(mainNamespace: 'app.boot')
    ->withMainPhpPath('out/main.php')
    ->withIgnoreWhenBuilding(['local.phel'])
    ->withExportFromDirectories(['src/core']);
