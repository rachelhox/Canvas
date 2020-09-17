var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : [[79,235,52],[235,213,52],"N","N","N"]
}

var http = new XMLHttpRequest();

document.getElementById('get-api').addEventListener('click', () => {
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var palette = JSON.parse(http.responseText).result;
            console.log(palette)
            let firstColourR = palette[0][0];
            let firstColourG = palette[0][1];
            let firstColourB = palette[0][2];
            // console.log(firstColourR);
            $('#colour-1').css('background-color', `rgb(${firstColourR}, ${firstColourG}, ${firstColourB})`);
            
            let secondColourR = palette[1][0];
            let secondColourG = palette[1][1];
            let secondColourB = palette[1][2];
            // console.log(secondColourR);
            $('#colour-2').css('background-color', `rgb(${secondColourR}, ${secondColourG}, ${secondColourB})`);
            
            let thirdColourR = palette[2][0];
            let thirdColourG = palette[2][1];
            let thirdColourB = palette[2][2];
            // console.log(thirdColourR);
            $('#colour-3').css('background-color', `rgb(${thirdColourR}, ${thirdColourG}, ${thirdColourB})`);
            
            let fourthColourR = palette[3][0];
            let fourthColourG = palette[3][1];
            let fourthColourB = palette[3][2];
            // console.log(fourthColourR);
            $('#colour-4').css('background-color', `rgb(${fourthColourR}, ${fourthColourG}, ${fourthColourB})`);
    
            let fifthColourR = palette[4][0];
            let fifthColourG = palette[4][1];
            let fifthColourB = palette[4][2];
            // console.log(fifthColourR);
            $('#colour-5').css('background-color', `rgb(${fifthColourR}, ${fifthColourG}, ${fifthColourB})`);
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
    // console.log(data);


// [[42, 41, 48], [90, 83, 84], [191, 157, 175], [188, 138, 125], [215, 170, 66]]
// note that the input colors have changed as well, by a small amount

})
$('#colour-1').click(() => {
    curStroke = $('#colour-1').css('background-color');
})


