import { useEffect, useReducer, useRef, useState } from 'react'
import './assets/css/base.css'
import { Button, ButtonGroup, Container } from '@mui/material'
import { ImportExport, UploadFile } from '@mui/icons-material'
import { setColorReducer } from './redux/REDUCER'

function App() {
  const inputField = useRef<HTMLInputElement>(null)
  const colorPicker = useRef<HTMLInputElement>(null)
  const editor = useRef<HTMLDivElement>(null)
  const [state, dispatch] = useReducer(setColorReducer, '')


  const importFile = () => {
    inputField.current!.click()
    inputField.current!.onchange = (e: any) => {
      e.preventDefault()
      const fileReader = new FileReader()
      fileReader.onload = async (e) => {
        const text = (e.target!.result)
        editor.current!.innerText = text!.toString()
      }
      fileReader.readAsText(e.target.files[0])
    }
  }


  const exportAsJson = () => {
    //....
  }

  const getSelectedText = (element: any) => {
    


    // To write the selected text into the textarea
    // const startPosition = element.current!;
    // const endPosition = element.current!.InnerText.selectionEnd;
    // const selectedText = element.current?.value.substring(startPosition, endPosition)
    // const selectedText = element.current?.value.substring(startPosition, endPosition)
    // selectedText.style.background = 'green'
    // const newText = `<b>selectedText</b>`
    // element.current?.value.replace
    console.log(selectedText)
  }


  useEffect(() => {
    editor.current?.addEventListener('mouseup', () => {
      let sel = document.getSelection()?.toString()
      console.log(sel)
    })
  }, [])

  return (
    <>
      <header>
        <div>
          <input
            type="file"
            ref={inputField}
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
          <div contentEditable className='editor' ref={editor}></div>
          {/* <textarea
            c
            name=""
            id=""
            cols={30}
            rows={25}
            ></textarea> */}
        </main>
        <input type='color' ref={colorPicker} className='color-picker' />

      </Container>
    </>
  )
}


export default App