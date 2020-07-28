
export const processButtonText = (processType: string) => {
    switch (processType) {
        case "remove":
            return "Remove occurrences"
        case "leave-only":
            return "Leave only occurrences"
        case "replace":
            return "Replace occurrences with"
    }
}
