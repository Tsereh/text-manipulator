export type Rule = {
    id: string,
    type: string,
    name: string,
    editableValue?: boolean,
    value?: string,
    caseSensitive?: boolean
}

export type Process = {
    name: string,
    editableValue?: boolean,
    value?: string
}