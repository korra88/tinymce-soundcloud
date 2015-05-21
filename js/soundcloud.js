//Langs. To add or adjust the lang files are in the lang dir
var data = {
    "scegliTraccia": parent.tinymce.util.I18n.translate('Scegli traccia'),
    "menuCondivisione": parent.tinymce.util.I18n.translate('menu condivisione'),
    "cliccaEmbed": parent.tinymce.util.I18n.translate('clicca Embed'),
    "incollaCodice": parent.tinymce.util.I18n.translate('Incolla codice'),
    "incollaQui": parent.tinymce.util.I18n.translate('Incolla qui'),
    "inserisci": parent.tinymce.util.I18n.translate('inserisci'),
    "chiudi": parent.tinymce.util.I18n.translate('chiudi'),
    "share": parent.tinymce.util.I18n.translate('share copia'),
    "anteprima": parent.tinymce.util.I18n.translate('anteprima'),
};  
function soundcloudDialog() {
    $(function () {        
        $('#insert').click(function () {
            I_Insert();
            I_Close();
            return false;
        });
        $('#cancel').click(function () {
            I_Close();
            return false;
        });
        $('#inpURL').keyup(function () {
           selectAudio(true);
        });        
    });
}

function selectAudio(mini) {
    if(mini !== undefined) {
        $('#preview').html(get_video_iframe(true));
    }else {
        $('#preview').html(get_video_iframe());
    }
}

function I_InsertHTML(sHTML) {
    if (getVideoId($('#inpURL').val()) == '') {
        return false;
    }
    parent.tinymce.activeEditor.insertContent(sHTML);
}

function I_Close() {
    parent.tinymce.activeEditor.windowManager.close();
}

function get_video_iframe(mini) {
    var width = 670;
    var sEmbedUrl = 'https://w.soundcloud.com/player/?url=' + getVideoId($('#inpURL').val()) + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true';
    if(mini !== undefined) {
        width = 600;
    }
    var sHTML = '<iframe class="soundcloud" width="' + width + '" height="200" src="' + sEmbedUrl + '" frameborder="0" allowfullscreen></iframe>';
    return sHTML;
}
function I_Insert() {    
    I_InsertHTML(get_video_iframe());
}

function getVideoId(url) {
    return url.replace(/^.*((v\/)|(embed\/)|(watch\?))\??v?=?([^\&\?]*).*/, '$5');
}

//Use jQuery's get method to retrieve the contents of our template file, then render the template.
$.get('template/form.html', function (template) {
    filled = Mustache.render(template, data);
    $('#template-container').append(filled);
    
    soundcloudDialog();
});
