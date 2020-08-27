var input, selectedRules, selectedProcesses, output;

self.onmessage = (e) => {
    var { inputData, ruleData, processData } = e.data;

    input = inputData !== undefined ? inputData : input;
    selectedRules = ruleData !== undefined ? ruleData : selectedRules;
    selectedProcesses = processData !== undefined ? processData : selectedProcesses;

    output = input
    
    if (output && selectedRules) {
        for (var i = 0; i < selectedRules.length; i++) {
            if (selectedRules[i].name === "Find") {
                if (selectedProcesses && selectedProcesses.length) {
                    switch (selectedProcesses[0].name) {
                        case "remove":
                            output = output.replace(new RegExp(selectedRules[i].value, "g"), "");
                            break;
                        case "leave-only":
                            output = output.replace(new RegExp("(" + selectedRules[i].value + ")|(.)", "g"), "$1");
                            break;
                        case "replace":
                            output = output.replace(new RegExp(selectedRules[i].value, "g"), selectedProcesses[i].value);
                            break;
                    };
                };
            };
        };
    }

    self.postMessage(output);
}