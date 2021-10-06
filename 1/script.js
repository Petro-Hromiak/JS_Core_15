

$(window).on(`load`, (function () {
    $(`.black`).animate({
        height: `312px`

    }, 60000, `linear`, function () { $('.minute').text('1') })

    $(`.black`).animate({
        height: `0px`,
    }, 60000, `linear`, function () { $('.minute').text('0') })
}))
