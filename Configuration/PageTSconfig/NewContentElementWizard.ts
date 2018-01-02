mod.wizards.newContentElement.wizardItems.common {
    elements {
            swiper {
                iconIdentifier = tx_swiper_swiper
                title = LLL:EXT:swiper/Resources/Private/Language/locallang_db_new_content_el.xlf:wizards.newContentElement.swiper_title
                description = LLL:EXT:swiper/Resources/Private/Language/locallang_db_new_content_el.xlf:wizards.newContentElement.swiper_description
                tt_content_defValues {
                    CType = swiper_swiper
                }
            }
    }
    show := addToList(swiper)
}
