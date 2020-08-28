var input, selectedRules, selectedProcesses, output;

function getRegex() {
    var regex = "";

    for (var i = 0; i < selectedRules.length; i++) {
        var rule = selectedRules[i];

        switch (rule.type) {
            case "find":
                regex = regex + rule.value;
                break;
            case "anyof":
                regex = regex + "[" + rule.value + "]";
                break;
        };
    };

    return regex;
}

self.onmessage = (e) => {
    var { inputData, ruleData, processData } = e.data;

    input = inputData !== undefined ? inputData : input;
    selectedRules = ruleData !== undefined ? ruleData : selectedRules;
    selectedProcesses = processData !== undefined ? processData : selectedProcesses;

    output = input;
    
    if (output && selectedRules) {
        if (selectedProcesses && selectedProcesses.length) {
            switch (selectedProcesses[0].name) {
                case "remove":
                    output = output.replace(new RegExp(getRegex(), "g"), "");
                    break;
                case "leave-only":
                    output = output.replace(new RegExp("(" + getRegex() + ")|(.)", "g"), "$1");
                    break;
                case "replace":
                    output = output.replace(new RegExp(getRegex(), "g"), selectedProcesses[0].value);
                    break;
            };
        };
    }

    self.postMessage(output);
}