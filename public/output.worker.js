var input, selectedRules, selectedProcess, output;

function getRegex() {
    var regex = "";

    for (var i = 0; i < selectedRules.length; i++) {
        var rule = selectedRules[i];

        switch (rule.type) {
            case "find":
                if (rule.caseSensitive) {
                    regex = regex + rule.value;
                } else {
                    regex = regex + rule.value.split('').map(function(c){return '['+c.toLowerCase()+c.toUpperCase()+']'}).join('');
                }
                break;
            case "anyof":
                if (rule.caseSensitive) {
                    regex = regex + "[" + rule.value + "]";
                } else {
                    regex = regex + "[" + rule.value.toLowerCase() + rule.value.toUpperCase() + "]";
                }
                break;
        };
    };

    return regex;
}

self.onmessage = (e) => {
    var { inputData, ruleData, processData } = e.data;

    input = inputData !== undefined ? inputData : input;
    selectedRules = ruleData !== undefined ? ruleData : selectedRules;
    selectedProcess = processData !== undefined ? processData : selectedProcess;

    output = input;
    
    if (output && selectedRules) {
        if (selectedProcess !== undefined) {
            switch (selectedProcess.name) {
                case "Remove":
                    output = output.replace(new RegExp(getRegex(), "g"), "");
                    break;
                case "Leave only":
                    output = output.replace(new RegExp("(" + getRegex() + ")|(.)", "g"), "$1");
                    break;
                case "Replace":
                    output = output.replace(new RegExp(getRegex(), "g"), selectedProcess.value);
                    break;
                case "Insert before":
                    output = output.replace(new RegExp("(" + getRegex() + ")", "g"), selectedProcess.value + "$1");
                    break;
                case "Insert after":
                    output = output.replace(new RegExp("(" + getRegex() + ")", "g"), "$1" + selectedProcess.value);
                    break;
            };
        };
    }

    self.postMessage(output);
}