<?php

declare(strict_types=1);

return [
    'src-dirs' => ['src'],
    'test-dirs' => ['tests'],

    # TODO: Will be made redundant in the next version of Phel. Remove then.
    'vendor-dir' => 'vendor',
    'export' => [
        'directories' => ['src/modules'],
        'namespace-prefix' => 'PhelGenerated',
        'target-directory' => 'src/PhelGenerated',
    ],
];