$("#uploadDivContainer").SPControlUpload({
    listName: "Shared Documents",
    onPageChange: function (ev) {

        // If we're done with the upload, then continue to show the
        // overlay, and fade out the area that contained the upload control.
        if (ev.state == 3 && ev.isUploadDone) {
            ev.hideOverlay = false;
            $('<div style="padding: 1em; width: 80%; margin: 3em auto;" class="ui-state-highlight">Upload Successful!!!</div>')
                .appendTo(uiUploadWidget.empty())
                .fadeOut(4000, function () {
                    $(this).remove();
                });

            // Reload files into viewing area.
            refreshFileList();

            // If file was uploaded, but we have required fields to fill out,
            // then adjust page to only show that...
        } else if (ev.state == 3) {

            ev.page.find("form")
                .children(":visible")
                .css("display", "none")
                .addClass("ptWasVisible")
                .end()
                .find("input[title='Name']")
                .closest("div[id^='WebPart']")
                .appendTo(ev.page.find("form"));
        }

    }//end: onPageChange()
});