<?php
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:swiper/Configuration/PageTSconfig/NewContentElementWizard.ts">'
);
$GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['formDataGroup']['tcaDatabaseRecord'][\SWIPER\Swiper\Form\FormDataProvider\TcaColPosItem::class] = [
    'depends' => [
        \TYPO3\CMS\Backend\Form\FormDataProvider\TcaSelectItems::class,
    ],
];
// Add backend preview hook
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['swiper'] = 
    SWIPER\Swiper\Hooks\PageLayoutViewDrawItem::class;
