<?php
namespace SWIPER\Swiper\Form\FormDataProvider;

use TYPO3\CMS\Backend\Form\FormDataProviderInterface;
use TYPO3\CMS\Lang\LanguageService;

class TcaColPosItem implements FormDataProviderInterface
{
    /**
     * @var array
     */
    protected $supportedInlineFields = array (
  0 => 'tx_swiper_content',
);

    /**
     * @param array $result
     * @return array
     */
    public function addData(array $result)
    {
        if (!empty($result['databaseRow']['colPos']) 
            || '999' !== $result['processedTca']['columns']['colPos']['config']['default']
        ) {
            return $result;
        }

        $result['processedTca']['columns']['colPos']['config']['items'][0][0] = $this->getLanguageService()->sL('LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.colPos.nestedContentColPos');

        return $result;
    }

    /**
     * @return LanguageService
     */
    protected function getLanguageService()
    {
        return $GLOBALS['LANG'];
    }
}
