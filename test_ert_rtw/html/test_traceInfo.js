function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "test"};
	this.sidHashMap["test"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "test:191"};
	this.sidHashMap["test:191"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/C28x Hardware Interrupt"] = {sid: "test:260"};
	this.sidHashMap["test:260"] = {rtwname: "<Root>/C28x Hardware Interrupt"};
	this.rtwnameHashMap["<Root>/Subsystem"] = {sid: "test:191"};
	this.sidHashMap["test:191"] = {rtwname: "<Root>/Subsystem"};
	this.rtwnameHashMap["<S1>/function"] = {sid: "test:190"};
	this.sidHashMap["test:190"] = {rtwname: "<S1>/function"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "test:257"};
	this.sidHashMap["test:257"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Constant1"] = {sid: "test:258"};
	this.sidHashMap["test:258"] = {rtwname: "<S1>/Constant1"};
	this.rtwnameHashMap["<S1>/Constant2"] = {sid: "test:259"};
	this.sidHashMap["test:259"] = {rtwname: "<S1>/Constant2"};
	this.rtwnameHashMap["<S1>/Constant3"] = {sid: "test:261"};
	this.sidHashMap["test:261"] = {rtwname: "<S1>/Constant3"};
	this.rtwnameHashMap["<S1>/ePWM1"] = {sid: "test:254"};
	this.sidHashMap["test:254"] = {rtwname: "<S1>/ePWM1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
