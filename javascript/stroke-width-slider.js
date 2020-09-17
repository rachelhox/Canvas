$('#stroke-width-btn').click(() => {
    $('#stroke-width').toggle(); // 600
})

let strokeWidth = $('#stroke-width').val();
console.log(strokeWidth);

$('#stroke-width').change(() => {
    strokeWidth = $('#stroke-width').val();
    console.log(strokeWidth);
})