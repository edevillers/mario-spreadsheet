var SS = SpreadsheetApp.getActive();

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Misc')
      .addItem('Insert an 8 bit Mario', 'insert_mario')
      .addToUi();
}

function insert_mario() {
  var backgrounds = [['#ffffff', '#ffffff', '#ffffff', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']
                    ,['#ffffff', '#ffffff', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ffffff', '#ffffff']
                    ,['#ffffff', '#ffffff', '#783f04', '#783f04', '#783f04', '#f1c232', '#f1c232', '#000000', '#f1c232', '#ffffff', '#ffffff', '#ffffff', '#ffffff']
                    ,['#ffffff', '#783f04', '#f1c232', '#783f04', '#783f04', '#f1c232', '#f1c232', '#000000', '#f1c232', '#f1c232', '#f1c232', '#ffffff', '#ffffff']
                    ,['#ffffff', '#783f04', '#f1c232', '#783f04', '#783f04', '#f1c232', '#f1c232', '#f1c232', '#783f04', '#f1c232', '#f1c232', '#f1c232', '#ffffff']
                    ,['#ffffff', '#783f04', '#783f04', '#f1c232', '#f1c232', '#f1c232', '#f1c232', '#783f04', '#783f04', '#783f04', '#783f04', '#ffffff', '#ffffff']
                    ,['#ffffff', '#ffffff', '#ffffff', '#f1c232', '#f1c232', '#f1c232', '#f1c232', '#f1c232', '#f1c232', '#f1c232', '#ffffff', '#ffffff', '#ffffff']
                    ,['#ffffff', '#ffffff', '#ff0000', '#ff0000', '#0000cd', '#ff0000', '#ff0000', '#ff0000', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']
                    ,['#ffffff', '#ff0000', '#ff0000', '#ff0000', '#0000cd', '#ff0000', '#ff0000', '#0000cd', '#ff0000', '#ff0000', '#ff0000', '#ffffff', '#ffffff']
                    ,['#ff0000', '#ff0000', '#ff0000', '#ff0000', '#0000cd', '#0000cd', '#0000cd', '#0000cd', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ffffff']
                    ,['#f1c232', '#f1c232', '#ff0000', '#0000cd', '#ffff00', '#0000cd', '#0000cd', '#ffff00', '#0000cd', '#ff0000', '#f1c232', '#f1c232', '#ffffff']
                    ,['#f1c232', '#f1c232', '#f1c232', '#0000cd', '#0000cd', '#0000cd', '#0000cd', '#0000cd', '#0000cd', '#f1c232', '#f1c232', '#f1c232', '#ffffff']
                    ,['#f1c232', '#f1c232', '#0000cd', '#0000cd', '#0000cd', '#0000cd', '#0000cd', '#0000cd', '#0000cd', '#0000cd', '#f1c232', '#f1c232', '#ffffff']
                    ,['#ffffff', '#ffffff', '#0000cd', '#0000cd', '#0000cd', '#ffffff', '#ffffff', '#0000cd', '#0000cd', '#0000cd', '#ffffff', '#ffffff', '#ffffff']
                    ,['#ffffff', '#783f04', '#783f04', '#783f04', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#783f04', '#783f04', '#783f04', '#ffffff', '#ffffff']
                    ,['#783f04', '#783f04', '#783f04', '#783f04', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#783f04', '#783f04', '#783f04', '#783f04', '#ffffff']];
  var current_cell = SS.getActiveCell();
  var sheet = SS.getActiveSheet();
  var range_dest = current_cell.offset(0, 0, backgrounds.length, backgrounds[0].length);
  range_dest.setBackgrounds(backgrounds);
  sheet.setColumnWidths(current_cell.getColumn(), backgrounds[0].length, 21);
}
