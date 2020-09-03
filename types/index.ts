export type Rule = {
    id: string,
    type: string,
    name: string,
    value?: string,
    editableValue: boolean,
    caseSensitive?: boolean
}

export type Process = {
    name: string,
    value: string
}