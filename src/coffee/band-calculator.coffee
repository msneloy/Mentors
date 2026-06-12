###
  IELTS Band Calculator Logic
###

roundIeltsBand = (value) -> Math.round(value * 2) / 2

calculateIeltsBand = ->
  listening = parseFloat(document.getElementById("band-listening").value) or 0
  reading = parseFloat(document.getElementById("band-reading").value) or 0
  writing = parseFloat(document.getElementById("band-writing").value) or 0
  speaking = parseFloat(document.getElementById("band-speaking").value) or 0
  
  average = (listening + reading + writing + speaking) / 4
  band = roundIeltsBand average
  
  message = if band >= 8
    "Excellent result — you are ready for most top universities."
  else if band >= 6.5
    "Strong performance — focus on fine-tuning your weaker modules."
  else
    "Keep practicing. Focus on the module(s) where your score is lowest."

  document.getElementById("band-result-value").textContent = band.toFixed(1)
  document.getElementById("band-result-message").textContent = message

document.addEventListener "DOMContentLoaded", ->
  inputs = document.querySelectorAll ".band-input"
  button = document.getElementById "calculate-band"

  if button
    button.addEventListener "click", calculateIeltsBand

  inputs.forEach (input) ->
    input.addEventListener "input", calculateIeltsBand

  calculateIeltsBand()
