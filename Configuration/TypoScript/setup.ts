tt_content.swiper_swiper = FLUIDTEMPLATE
tt_content.swiper_swiper {
    layoutRootPaths.0 = EXT:swiper/Resources/Private/Layouts/
    layoutRootPaths.1 = {$plugin.tx_swiper.view.layoutRootPath}
    partialRootPaths.0 = EXT:swiper/Resources/Private/Partials/
    partialRootPaths.1 = {$plugin.tx_swiper.view.partialRootPath}
    templateRootPaths.0 = EXT:swiper/Resources/Private/Templates/Content/
    templateRootPaths.1 = {$plugin.tx_swiper.view.templateRootPath}
    templateName = Swiper

    dataProcessing.10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
    dataProcessing.10 {
        if.isTrue.field = tx_swiper_slide
        table = tx_swiper_slide
        pidInList.field = pid
        where = parentid=###uid### AND deleted=0 AND hidden=0
        orderBy = sorting
        markers {
            uid.field = uid
        }
        as = data_tx_swiper_slide
    }
    dataProcessing.10 {
            dataProcessing.10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
        dataProcessing.10 {
            if.isTrue.field = tx_swiper_image
            references {
                fieldName = tx_swiper_image
                table = tx_swiper_slide
            }
            as = data_tx_swiper_image
        }
        dataProcessing.20 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
        dataProcessing.20 {
            if.isTrue.field = tx_swiper_content
            table = tt_content
            pidInList.field = pid
            where = tx_swiper_content_parent=###uid### AND deleted=0 AND hidden=0
            orderBy = sorting
            markers {
                uid.field = uid
            }
            as = data_tx_swiper_content
        }
    }
}



page {
    includeCSSLibs {
        swiperSlider = EXT:swiper/Resources/Public/Css/swiper.min.css
        swiperSlider.if.isTrue = {$plugin.tx_swiper.includeSwiperCss}
    }
    includeJSFooterlibs {
        jQuery = https://code.jquery.com/jquery-3.2.1.min.js
        jQuery.external = 1
        jQuery.forceOnTop = 1
        jQuery.if.isTrue = {$plugin.tx_swiper.includeJQuery}

        swiperSlider = EXT:swiper/Resources/Public/JavaScript/swiper.min.js
        swiperSlider.if.isTrue = {$plugin.tx_swiper.includeSwiperJs}
    }
}
