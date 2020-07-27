import { observable, action } from 'mobx'

class InputStore {
    @observable file?: File

    @observable content?: string

    @action setFile(file: File) {
        this.file = file
        const fr = new FileReader()
        fr.onload = (e) => {
            this.content = e.target.result as string
        }
        fr.readAsText(this.file)
    }

    @action setContent(content: string) {
        this.content = content
    }
}

export default new InputStore()