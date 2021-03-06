function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "SPWM"};
	this.sidHashMap["SPWM"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "SPWM:3"};
	this.sidHashMap["SPWM:3"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/C28x Hardware Interrupt"] = {sid: "SPWM:1"};
	this.sidHashMap["SPWM:1"] = {rtwname: "<Root>/C28x Hardware Interrupt"};
	this.rtwnameHashMap["<Root>/Subsystem"] = {sid: "SPWM:3"};
	this.sidHashMap["SPWM:3"] = {rtwname: "<Root>/Subsystem"};
	this.rtwnameHashMap["<S1>/function"] = {sid: "SPWM:2"};
	this.sidHashMap["SPWM:2"] = {rtwname: "<S1>/function"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "SPWM:63"};
	this.sidHashMap["SPWM:63"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "SPWM:62"};
	this.sidHashMap["SPWM:62"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Delay"] = {sid: "SPWM:64"};
	this.sidHashMap["SPWM:64"] = {rtwname: "<S1>/Delay"};
	this.rtwnameHashMap["<S1>/Scope"] = {sid: "SPWM:68"};
	this.sidHashMap["SPWM:68"] = {rtwname: "<S1>/Scope"};
	this.rtwnameHashMap["<S1>/Sine Wave Function"] = {sid: "SPWM:71"};
	this.sidHashMap["SPWM:71"] = {rtwname: "<S1>/Sine Wave Function"};
	this.rtwnameHashMap["<S1>/ePWM"] = {sid: "SPWM:4"};
	this.sidHashMap["SPWM:4"] = {rtwname: "<S1>/ePWM"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
