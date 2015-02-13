var SoundcloudDialog = {
    init: function () {
    },
    insert: function () {
        var sciframe = document.forms[0].sciframe.value;
        var scdata = '';

        scdata = sciframe;
        var html = '<div class="soundcloud soundcloud-track">' + scdata + '</div>';
        top.tinymce.activeEditor.insertContent(html);
        this.close();
    },
    close: function () {
        top.tinymce.activeEditor.windowManager.close();
    }
};
