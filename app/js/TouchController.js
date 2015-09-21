exports.touched = function(req, res) {
  var key = Number(req.params.number);

  switch (key) {

    // Column 1
    case 00:
    case 01:
    case 02:
    case 03:
    case 04:
    case 05:
    case 06:
    case 07:
      global.GameController.checkFruitsPosition(key);
      break;

    case 08:
    case 09:
    case 10:
    case 11:
      global.GameController.startSong();
      break;

    default:
      console.log('No key definition for ' + key);
  }

  res.send('OK');
};
