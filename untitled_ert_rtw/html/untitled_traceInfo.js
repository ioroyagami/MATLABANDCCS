function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "untitled"};
	this.sidHashMap["untitled"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "untitled:3"};
	this.sidHashMap["untitled:3"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/C28x Hardware Interrupt"] = {sid: "untitled:1"};
	this.sidHashMap["untitled:1"] = {rtwname: "<Root>/C28x Hardware Interrupt"};
	this.rtwnameHashMap["<Root>/Subsystem"] = {sid: "untitled:3"};
	this.sidHashMap["untitled:3"] = {rtwname: "<Root>/Subsystem"};
	this.rtwnameHashMap["<S1>/function"] = {sid: "untitled:2"};
	this.sidHashMap["untitled:2"] = {rtwname: "<S1>/function"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "untitled:63"};
	this.sidHashMap["untitled:63"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "untitled:62"};
	this.sidHashMap["untitled:62"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Delay"] = {sid: "untitled:64"};
	this.sidHashMap["untitled:64"] = {rtwname: "<S1>/Delay"};
	this.rtwnameHashMap["<S1>/Scope"] = {sid: "untitled:68"};
	this.sidHashMap["untitled:68"] = {rtwname: "<S1>/Scope"};
	this.rtwnameHashMap["<S1>/Sine Wave Function"] = {sid: "untitled:71"};
	this.sidHashMap["untitled:71"] = {rtwname: "<S1>/Sine Wave Function"};
	this.rtwnameHashMap["<S1>/ePWM"] = {sid: "untitled:4"};
	this.sidHashMap["untitled:4"] = {rtwname: "<S1>/ePWM"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();