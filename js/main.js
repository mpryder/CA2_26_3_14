window._skel_config = {
    prefix: 'css/style',
    preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

$(document).ready(function() {
    $("#addBn").click(function() {
        var a = $("#input1").val();
        var b = $("#input2").val();


        if (((a.length == 0) && b.length == 0)) {
           alert("Please enter a number");
       }
        $("#answer").val(Cal.add(a,b));

    });
    $("#subBn").click(function() {
        var c = $("#input1").val();
        var d = $("#input2").val();
        if ((c.length == 0) && (d.length == 0)) {
            alert("Please enter a number");
        }

        $("#answer").val(Cal.sub(c,d));

    });
    $("#multiplyBn").click(function() {
        var e = $("#input1").val();
        var f = $("#input2").val();

        if (((e.length == 0) && f.length == 0)) {
            alert("Please enter a number");
        }

        $("#answer").val(Cal.multiply(e,f));

    });
    $("#divideBn").click(function() {
        var g = $("#input1").val();
        var h = $("#input2").val();

        if (((g.length == 0) && h.length == 0)) {
            alert("Please enter a number");
        }
        if((g == 0) || (h === 0)){
            alert("Cannot divide by 0");
        }

        $("#answer").val(Cal.divide(g,h));

    });
    $("#resetBn").click(function() {
        $("#input1").val('');
        $("#input2").val('');
        $("#answer").val('');
    });

});