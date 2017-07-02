Blockly.Blocks['start'] = {
    init: function() {
	this.setNextStatement(true);
	this.setColour(160);
	this.appendDummyInput()
	    .appendField("Start");
	this.setTooltip("Place this block at the start.")
	this.setHelpUrl("http://google.com");
    }
};

Blockly.Python['start'] = function(block) {
    var code = 'from pwm import *\n';
    return code;
};

Blockly.Blocks['forward'] = {
    init: function() {
	this.setNextStatement(true);
	this.setPreviousStatement(true);
	this.setColour(160);
	this.appendDummyInput()
	    .appendField("forward");
	this.setTooltip('Move forward.');
	this.setHelpUrl('http://google.com');
    }
};

Blockly.Python['forward'] = function(block) {
    var code = 'forward()\n';
    return code;
};

Blockly.Blocks['backward'] = {
    init: function() {
	this.setNextStatement(true);
	this.setPreviousStatement(true);
	this.setColour(160);
	this.appendDummyInput()
	    .appendField("backward");
	this.setTooltip('Move backward.');
	this.setHelpUrl('http://google.com');
    }
};

Blockly.Python['backward'] = function(block) {
    var code = 'backward()\n';
    return code;
};

Blockly.Blocks['left'] = {
    init: function() {
	this.setNextStatement(true);
	this.setPreviousStatement(true);
	this.setColour(160);
	this.appendDummyInput()
	    .appendField("left");
	this.setTooltip('Turn left.');
	this.setHelpUrl('http://google.com');
    }
};

Blockly.Python['left'] = function(block) {
    var code = 'left()\n';
    return code;
};

Blockly.Blocks['right'] = {
    init: function() {
	this.setNextStatement(true);
	this.setPreviousStatement(true);
	this.setColour(160);
	this.appendDummyInput()
	    .appendField("right");
	this.setTooltip('Turn right.');
	this.setHelpUrl('http://google.com');
    }
};

Blockly.Python['right'] = function(block) {
    var code = 'right()\n';
    return code;
};
Blockly.Python['stop'] = function(block) {
    var code = 'stop()\n';
    return code;
};

Blockly.Blocks['wait'] = {
    init: function() {
	this.appendDummyInput()
	    .appendField("wait")
	    .appendField(new Blockly.FieldNumber(0), "NAME")
	    .appendField("seconds");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(230);
	this.setTooltip('');
	this.setHelpUrl('');
    }
};

Blockly.Python['wait'] = function(block){
    var number_name = block.getFieldValue('NAME');
    var code = 'time.sleep(float('+number_name+'))\n'
    return code;
}
