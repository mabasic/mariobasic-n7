<?php

return [
    'src-dirs' => ['src'],
    'test-dirs' => ['tests'],
    'out-dir' => 'out'
];

// NOTE: Phel 0.10+ does not work.

// declare(strict_types=1);

// use Phel\Config\PhelConfig;
// use Phel\Config\PhelOutConfig;

// return (new PhelConfig())
//     ->setSrcDirs(['src'])
//     ->setTestDirs(['tests'])
//     ->setOut(
//         (new PhelOutConfig())
//             ->setDestDir('out')
//             ->setMainPhelNamespace('app\boot')
//             ->setMainPhpFilename('index')
//     )
//     ->setFormatDirs(['src', 'tests'])
//     ->setIgnoreWhenBuilding(['local.phel'])
//     ->setKeepGeneratedTempFiles(false);