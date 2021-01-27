<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chunky Drummer V1</title>
    <link rel = "stylesheet" type = "text/css" href = "style.css" />
</head>
<body>
  <input type="number" placeholder='Enter Steps' id='stepam'>
  <button onclick="createSequenceGUI()">Create Sequence</button>
  <p>
  <?php
    require_once 'loadSounds.php';
  ?>

  <input type="number" placeholder='Enter Steps per second' id='sps'>
  <button id="play">Play</button>
  <script src="index.js">

  </script>
</body>
</html>