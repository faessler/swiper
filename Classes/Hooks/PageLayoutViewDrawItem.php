<?php
namespace SWIPER\Swiper\Hooks;

use TYPO3\CMS\Backend\Form\Exception;
use TYPO3\CMS\Backend\Form\FormDataCompiler;
use TYPO3\CMS\Backend\Form\FormDataGroup\TcaDatabaseRecord;
use TYPO3\CMS\Backend\View\PageLayoutView;
use TYPO3\CMS\Backend\View\PageLayoutViewDrawItemHookInterface;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Object\ObjectManager;
use TYPO3\CMS\Fluid\View\StandaloneView;

class PageLayoutViewDrawItem implements PageLayoutViewDrawItemHookInterface
{
    /**
     * @var array
     */
    protected $supportedContentTypes = array (
  0 => 'swiper_swiper',
);

    /**
     * @var string
     */
    protected $rootPath = 'EXT:swiper/Resources/Private/Backend/';

    /**
     * Preprocesses the preview rendering of a content element.
     *
     * @param PageLayoutView $parentObject
     * @param bool $drawItem
     * @param string $headerContent
     * @param string $itemContent
     * @param array $row
     */
    public function preProcess(PageLayoutView &$parentObject, &$drawItem, &$headerContent, &$itemContent, array &$row)
    {
        if (!in_array($row['CType'], $this->supportedContentTypes, true)) {
            return;
        }

        $contentType = explode('_', $row['CType'], 2);
        $templateKey = GeneralUtility::underscoredToUpperCamelCase($contentType[1]);
        $templatePath = $this->getTemplatePath($templateKey);
        if (!file_exists($templatePath)) {
            return;
        }

        $objectManager = GeneralUtility::makeInstance(ObjectManager::class);
        $view = $objectManager->get(StandaloneView::class);
        $view->setTemplatePathAndFilename($templatePath);
        $view->setLayoutRootPaths([$this->rootPath . 'Layouts/']);
        $view->setPartialRootPaths([$this->rootPath . 'Partials/']);
        
        $formDataGroup = GeneralUtility::makeInstance(TcaDatabaseRecord::class);
        $formDataCompiler = GeneralUtility::makeInstance(FormDataCompiler::class, $formDataGroup);
        $formDataCompilerInput = [
            'command' => 'edit',
            'tableName' => 'tt_content',
            'vanillaUid' => (int)$row['uid'],
        ];
        try {
            $result = $formDataCompiler->compile($formDataCompilerInput);
            $processedRow = $this->getProcessedData($result['databaseRow'], $result['processedTca']['columns']);
    
            $view->assignMultiple(
                [
                    'row' => $row,
                    'processedRow' => $processedRow,
                ]
            );
    
            $itemContent = $view->render();
        } catch (Exception $exception) {
            $message = $GLOBALS['BE_USER']->errorMsg;
            if (empty($message)) {
                $message = $exception->getMessage() . ' ' . $exception->getCode();
            }

            $itemContent = $message;
        }
        
        $drawItem = false;
    }

    /**
     * This function is needed for testing purpose
     *
     * @param string $templateKey
     * @return string
     */
    protected function getTemplatePath($templateKey)
    {
        return GeneralUtility::getFileAbsFileName($this->rootPath . 'Templates/Content/' . $templateKey . '.html');
    }

    /**
     * @param array $databaseRow
     * @param array $processedTcaColumns
     * @return array
     */
    protected function getProcessedData(array $databaseRow, array $processedTcaColumns)
    {
        $processedRow = $databaseRow;
        foreach ($processedTcaColumns as $field => $config) {
            if (!isset($config['children'])) {
                continue;
            }
            $processedRow[$field] = [];
            foreach ($config['children'] as $child) {
                if (!$child['isInlineChildExpanded']) {
                    $formDataGroup = GeneralUtility::makeInstance(TcaDatabaseRecord::class);
                    $formDataCompiler = GeneralUtility::makeInstance(FormDataCompiler::class, $formDataGroup);
                    $formDataCompilerInput = [
                        'command' => 'edit',
                        'tableName' => $child['tableName'],
                        'vanillaUid' => $child['vanillaUid'],
                    ];
                    $child = $formDataCompiler->compile($formDataCompilerInput);
                }
                $processedRow[$field][] = $this->getProcessedData($child['databaseRow'], $child['processedTca']['columns']);
            }
        }

        return $processedRow;
    }
}
