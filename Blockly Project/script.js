// CONFIG
var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox'),
     zoom:
         {controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true},
     trashcan: true});

// BLOCK DEFINITIONS
Blockly.Blocks['string_length'] = {
    init: function() {
      this.appendValueInput('VALUE')
          .setCheck('String')
          .appendField('length of');
      this.setOutput(true, 'Number');
      this.setColour(160);
      this.setTooltip('Returns number of letters in the provided text.');
      this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    }
  };
  Blockly.Blocks['display_square'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Display Square ");
      this.appendValueInput("Width")
          .setCheck("Number")
          .appendField("Width: ");
      this.appendValueInput("Height")
          .setCheck("Number")
          .appendField("Height:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['user_width'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("User Width");
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['user_height'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("User Height");
      this.setOutput(true, "Number");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['when_document_loaded'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("When Document Loaded?");
      this.appendStatementInput("When Document Loaded?")
          .setCheck(null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
