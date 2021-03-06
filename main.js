$(function () {
  console.log('hello')

  var startCode = '0-0-0-0'
  var imgCode = window.location.hash.substr(1)

  console.log(imgCode)

  var srcBackground = 'https://i.imgur.com/' + imgCode.split('-')[0] + '.png'
  var srcA = 'https://i.imgur.com/' + imgCode.split('-')[1] + '.png'
  var srcB = 'https://i.imgur.com/' + imgCode.split('-')[2] + '.png'
  var srcC = 'https://i.imgur.com/' + imgCode.split('-')[3] + '.png'

  var heightA = startCode.split('-')[0];
  var heightBA = startCode.split('-')[1];
  var heightBB = startCode.split('-')[2];
  var heightC = startCode.split('-')[3];

  var makeImage = function (id, src) {
    return $(new Image()).attr('id', id).attr('src', src)
  }

  var start = function () {
    var backgroundA = makeImage('backgroundA', srcBackground)
    var backgroundB = makeImage('backgroundB', srcBackground)
    var objA = makeImage('objA', srcA)
    var objBA = makeImage('objBA', srcB)
    var objBB = makeImage('objBB', srcB)
    var objC = makeImage('objC', srcC)

    $('#layout').append(backgroundA, objBA, objA, backgroundB, objBB, objC)

    backgroundA.css('top', 100).css('left', 200)
    backgroundB.css('top', 100).css('left', 1000)

    objA.css('top', 511).css('left', 288).css('transform', 'translate(-60%, -52%)').css('height', heightA)
    objBA.css('top', 533).css('left', 303).css('transform', 'translate(-58%, -16%)').css('height', heightBA)
    objBB.css('top', 533).css('left', 1103).css('transform', 'translate(-58%, -16%)').css('height', heightBB)
    objC.css('top', 510).css('left', 1091).css('transform', 'translate(-79%, -78%)').css('height', heightC)
  }

  var adjust = function () {
    var a = $('#inputA').val()
    var ba = $('#inputBA').val()
    var bb = $('#inputBB').val()
    var c = $('#inputC').val()

    $('#objA').css('height', a)
    $('#objBA').css('height', ba)
    $('#objBB').css('height', bb)
    $('#objC').css('height', c)

    $('#current').text('Current Code: ' + a + '-' + ba + '-' + bb + '-' + c)
  }

  var fromCode = function() {
    var code = $('#code').val().split('-')

    $('#inputA').val(code[0])
    $('#inputBA').val(code[1])
    $('#inputBB').val(code[2])
    $('#inputC').val(code[3])

    adjust()
  }

  $('#inputA').val(heightA).on('change', adjust)
  $('#inputBA').val(heightBA).on('change', adjust)
  $('#inputBB').val(heightBB).on('change', adjust)
  $('#inputC').val(heightC).on('change', adjust)

  $('#useCode').on('click', fromCode)

  adjust()

  start()
})
