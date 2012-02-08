
function calendar_blocks(day) {
    var hours = 10;
    for (h = 0; h < 10; h++ ) {
        var one_hour = $('<div class="onehour"><h1>'+h+'</h1></div>');
        one_hour.css('top',(h*60)+"px");
        one_hour.css('left',(d*256)+"px");
        var div = $('<div class="chip">'+h+'</div>');
        one_hour.append(div);
        $('#container').append(one_hour);
        
    }
}

function addChip(day,start,len) {
    var party = $('<div class="chip">Party</div>');
    party.css({top:(start*60)+"px",
        left:(day*256+1)+"px",
        height:(len-2)+"px",
        width: 64+"px",
        backgroundColor: '#FFC',
        border: '1px solid #CC9'
        });
    $('#container').append(party);
        
}
$(document).ready(function() {
    $('#jqtest').html("<p>jQuery Ran!</p>").css('background-color','#0F0');
    for (d=0; d < 3; d++)
        calendar_blocks(d);
    addChip(1,4,80);    
});