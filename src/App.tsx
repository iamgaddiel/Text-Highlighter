import { useEffect, useReducer, useRef, useState } from 'react'
import './assets/css/base.css'
import { Button, ButtonGroup, Container } from '@mui/material'
import { ImportExport, UploadFile } from '@mui/icons-material'
import { setColorReducer } from './redux/reducers'


function App() {
  // useRefs
  const selectFileInputField = useRef<HTMLInputElement>(null)
  const colorPicker = useRef<HTMLInputElement>(null)
  const editor = useRef<HTMLDivElement>(null)

  // useStates
  // const [fileContent, setFileContent] = useState('')
  const initialColorState = ''

  // useReducer
  const [colorState, dispatch] = useReducer(setColorReducer, initialColorState)



  const importFile = () => {
    selectFileInputField.current!.click() // add click event to file input field
    selectFileInputField.current!.onchange = (e: any) => {
      e.preventDefault()

      const fileReader = new FileReader()
      fileReader.onload = async (e) => {
        const text = (e.target!.result)
        editor.current!.innerText = text!.toString() // set innerText of div to text file content
      }
      fileReader.readAsText(e.target.files[0])
    }
  }


  const getSelectedText = () => {
    const selectedText = document.getSelection()?.toString();
    console.log(selectedText); // log highlighted text
  }

  
  const exportAsJson = () => {
    //....
  }


  return (
    <>
      <header>
        <div>
          <input
            type="file"
            ref={selectFileInputField}
            style={{ display: 'none' }}
            accept='.txt'
          />
          <Button variant='contained' color='primary' onClick={importFile}>
            <ImportExport />
            Import
          </Button>
          <Button variant='contained' color='primary' onClick={exportAsJson}>
            <UploadFile />
            Export
          </Button>
        </div>
      </header>
      <Container>
        <main>
          <h1 className='text-center'>Text Editor</h1>
          <div contentEditable className='editor' ref={editor} onMouseUp={getSelectedText}></div>
        </main>
        <input type='color' ref={colorPicker} className='color-picker' />

      </Container>
    </>
  )
}


export default App