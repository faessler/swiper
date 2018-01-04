// ************************************* //
// CONSTANT EDITOR
// ************************************* //

// SUB CATEGORIES
# customsubcategory=100=Files
# customsubcategory=110=Includes (CSS & JS)
# customsubcategory=120=Default Values


// CONSTANTS
plugin.tx_swiper {
    // Files
    # cat=swiper/100; type=string; label=Path to template root (FE)
    view.templateRootPath =

    # cat=swiper/100; type=string; label=Path to template partials (FE)
    view.partialRootPath =

    # cat=swiper/100; type=string; label=Path to template layouts (FE)
    view.layoutRootPath =


    // Includes (JS & CSS)
    # cat=swiper/110/001; type=boolean; label=jQuery Library: Include jQuery (3.2.1) from Swiper Slider extension.
    includeJQuery = 0

    # cat=swiper/110/002; type=boolean; label=Swiper JS based on jQuery: Include Swiper slider JavaScript with jQuery. If enabled the Swiper slider JavaScript which is based on jQuery will be loaded (pro: lighter / contra: jQuery library needed).
    useSwiperWithJQuery = 0

    # cat=swiper/110/003; type=boolean; label=Swiper JS: Include the default Swiper JavaScript from the Swiper Slider extension.
    includeSwiperJs = 1

    # cat=swiper/110/004; type=boolean; label=Swiper CSS: Include the default Swiper CSS from the Swiper Slider extension.
    includeSwiperCss = 1


    // Default Values
    # cat=swiper/120/001; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_initialslide
    tx_swiper_initialslide = 0

    # cat=swiper/120/002; type=options[horizontal,vertical]; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_direction
    tx_swiper_direction = horizontal

    # cat=swiper/120/003; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_speed
    tx_swiper_speed = 300

    # cat=swiper/120/004; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_setwrappersize
    tx_swiper_setwrappersize = 0

    # cat=swiper/120/005; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_virtualtranslate
    tx_swiper_virtualtranslate = 0

    # cat=swiper/120/006; type=string; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_width
    tx_swiper_width =

    # cat=swiper/120/007; type=string; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_height
    tx_swiper_height =

    # cat=swiper/120/008; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_autoheight
    tx_swiper_autoheight = 0

    # cat=swiper/120/009; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_roundlengths
    tx_swiper_roundlengths = 0

    # cat=swiper/120/010; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_nested
    tx_swiper_nested = 0

    # cat=swiper/120/011; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_uniquenavelements
    tx_swiper_uniquenavelements = 1

    # cat=swiper/120/012; type=options[slide,fade,cube,coverflow,flip]; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_effect
    tx_swiper_effect = slide

    # cat=swiper/120/013; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_runcallbacksoninit
    tx_swiper_runcallbacksoninit = 1

    # cat=swiper/120/014; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_spacebetween
    tx_swiper_spacebetween = 0

    # cat=swiper/120/015; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_slidesperviewauto
    tx_swiper_slidesperviewauto = 0

    # cat=swiper/120/016; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_slidesperview
    tx_swiper_slidesperview = 1

    # cat=swiper/120/017; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_slidespercolumn
    tx_swiper_slidespercolumn = 1

    # cat=swiper/120/018; type=options[column,row]; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_slidespercolumnfill
    tx_swiper_slidespercolumnfill = column

    # cat=swiper/120/019; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_slidespergroup
    tx_swiper_slidespergroup = 1

    # cat=swiper/120/020; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_centeredslides
    tx_swiper_centeredslides = 0

    # cat=swiper/120/021; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_slidesoffsetbefore
    tx_swiper_slidesoffsetbefore = 0

    # cat=swiper/120/022; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_slidesoffsetafter
    tx_swiper_slidesoffsetafter = 0

    # cat=swiper/120/023; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_normalizeslideindex
    tx_swiper_normalizeslideindex = 1

    # cat=swiper/120/024; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_grabcursor
    tx_swiper_grabcursor = 0

    # cat=swiper/120/025; type=options[container,wrapper]; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_toucheventstarget
    tx_swiper_toucheventstarget = container

    # cat=swiper/120/026; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_touchratio
    tx_swiper_touchratio = 1

    # cat=swiper/120/027; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_touchangle
    tx_swiper_touchangle = 45

    # cat=swiper/120/028; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_simulatetouch
    tx_swiper_simulatetouch = 1

    # cat=swiper/120/029; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_shortswipes
    tx_swiper_shortswipes = 1

    # cat=swiper/120/030; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_longswipes
    tx_swiper_longswipes = 1

    # cat=swiper/120/031; type=string; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_longswipesratio
    tx_swiper_longswipesratio = 0.5

    # cat=swiper/120/032; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_longswipesms
    tx_swiper_longswipesms = 300

    # cat=swiper/120/033; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_followfinger
    tx_swiper_followfinger = 1

    # cat=swiper/120/034; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_allowtouchmove
    tx_swiper_allowtouchmove = 1

    # cat=swiper/120/035; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_threshold
    tx_swiper_threshold = 0

    # cat=swiper/120/036; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_touchmovestoppropagation
    tx_swiper_touchmovestoppropagation = 1

    # cat=swiper/120/037; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_iosedgeswipedetection
    tx_swiper_iosedgeswipedetection = 0

    # cat=swiper/120/038; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_iosedgeswipethreshold
    tx_swiper_iosedgeswipethreshold = 20

    # cat=swiper/120/039; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_touchreleaseonedges
    tx_swiper_touchreleaseonedges = 0

    # cat=swiper/120/040; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_passivelisteners
    tx_swiper_passivelisteners = 1

    # cat=swiper/120/041; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_resistance
    tx_swiper_resistance = 1

    # cat=swiper/120/042; type=string; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_resistanceratio
    tx_swiper_resistanceratio = 0.85

    # cat=swiper/120/043; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_allowslideprev
    tx_swiper_allowslideprev = 1

    # cat=swiper/120/044; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_allowslidenext
    tx_swiper_allowslidenext = 1

    # cat=swiper/120/045; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_noswiping
    tx_swiper_noswiping = 1

    # cat=swiper/120/046; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_preventclicks
    tx_swiper_preventclicks = 1

    # cat=swiper/120/047; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_preventclickspropagation
    tx_swiper_preventclickspropagation = 1

    # cat=swiper/120/048; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_slidetoclickedslide
    tx_swiper_slidetoclickedslide = 0

    # cat=swiper/120/049; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_freemode
    tx_swiper_freemode = 0

    # cat=swiper/120/050; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_freemodemomentum
    tx_swiper_freemodemomentum = 1

    # cat=swiper/120/051; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_freemodemomentumratio
    tx_swiper_freemodemomentumratio = 1

    # cat=swiper/120/052; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_freemodemomentumvelocityratio
    tx_swiper_freemodemomentumvelocityratio = 1

    # cat=swiper/120/053; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_freemodemomentumbounce
    tx_swiper_freemodemomentumbounce = 1

    # cat=swiper/120/054; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_freemodemomentumbounceratio
    tx_swiper_freemodemomentumbounceratio = 1

    # cat=swiper/120/055; type=string; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_freemodeminimumvelocity
    tx_swiper_freemodeminimumvelocity = 0.02

    # cat=swiper/120/056; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_freemodesticky
    tx_swiper_freemodesticky = 0

    # cat=swiper/120/057; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_watchslidesprogress
    tx_swiper_watchslidesprogress = 0

    # cat=swiper/120/058; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_watchslidesvisibility
    tx_swiper_watchslidesvisibility = 0

    # cat=swiper/120/059; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_preloadimages
    tx_swiper_preloadimages = 1

    # cat=swiper/120/060; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_updateonimagesready
    tx_swiper_updateonimagesready = 1

    # cat=swiper/120/061; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_loop
    tx_swiper_loop = 0

    # cat=swiper/120/062; type=int; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_loopadditionalslides
    tx_swiper_loopadditionalslides = 0

    # cat=swiper/120/063; type=string; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_loopedslides
    tx_swiper_loopedslides =

    # cat=swiper/120/064; type=boolean; label=LLL:EXT:swiper/Resources/Private/Language/locallang_db.xlf:tt_content.tx_swiper_loopfillgroupwithblank
    tx_swiper_loopfillgroupwithblank = 0
}
