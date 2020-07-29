import { observer } from 'mobx-react'
import OutputStore from '../../stores/OutputStore'
import styled from 'styled-components'
import { IOTextArea, IOContainer } from '../common/styledComponents'

const DownloadBtn = styled.button`
  display: block;
`

const OutputArea = observer(() => {
  return (
    <IOContainer placeholder="Processed text will be shown here">
      <IOTextArea value={OutputStore.content} placeholder="Processed output will be shown here" />
      <DownloadBtn>Download File</DownloadBtn>
    </IOContainer>
  );
});

export default OutputArea