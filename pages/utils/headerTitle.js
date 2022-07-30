const data = '<div class="bionic-reader bionic-reader-538f9651-f83b-4370-b787-503a79629fcc origin " style="" >' +
'<div class="bionic-reader-content">' +
    '<div class="bionic-reader-container">' + 
       '<b class="b bionic">Bion</b>ic <b class="b bionic">Translat</b>or' +
            '<!-- <div class="br-foot-node">'+
                '<p style="margin: 32px 0 32px 70px; font-weight: 700; font-size: 26px; line-height: 1.6em;">' +
                   ' —' +
                '</p>' +
                '<p>' +
                    'Bionic Reading<sup>®</sup><br>' +
                    'A higher dimension of reading.<br>' +
                    '<a href="https://bionic-reading.com">bionic-reading.com</a>' +
                '</p>' +
               ' <br/>' +
                '<br/>' +
                '<p>' +
                    
                '</p>' +
            '</div> -->' +
   ' </div>' +
'</div>' + 
'</div>'

function createMarkup() {
    return {__html: data}
}

export default createMarkup;