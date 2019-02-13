import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

function Preview(props) {
  const { submitFiles } = props
  let result = ''

  if(submitFiles.length !== 0) {
    for(var i = 0; i < submitFiles.length; i++) {
      result += "(" + (i + 1) + ") " + submitFiles[i].name + ","
    }
  }
  
  return result
}

export class FileManager extends React.Component {
  state = {
    files: [],
    fileUrls: [],
    submitFiles: [],
  }

  saveFiles(file) {
    let fileReader = new FileReader()
    let fileUrl

    fileReader.readAsDataURL(file)
    
    fileReader.onloadend = () => {
      fileUrl = fileReader.result

      this.state.files.push(file)
      this.state.fileUrls.push(fileUrl)
    }
  }

  handleSubmit = () => {
    const files = this.state.files
    for(var i = 0; i < files.length; i++) {
      console.log("Submit File #" + (i + 1) + ": " + files[i].name)    
    }

    this.setState({
      submitFiles: files
    })
  }

  handleChange = (e) => {
    var files = e.target.files

    // 파일 리스트인 files는 length 속성을 지니고 있으며 item()을 통해서 파일 객체를 반환함
    for(var i = 0; i < files.length; i++) {
      console.log("File #" + (i + 1) + ": ")
      console.log(files[i])
    
      this.saveFiles(files.item(i))
    }

    console.log("fileUrls:")
    console.log(this.state.fileUrls)
  }

  render() {
    return(
      <div>
        <h1>React File Manager Exercise</h1>
          <hr />
          <h3>Submit Files</h3>
          <form className='fileSubmit'>
            <input type='file' onChange={this.handleChange} multiple required/>
            <button type='button' onClick={this.handleSubmit}>Submit</button>
          </form>
        <div>
            <h3>List of Files</h3>
            <div className='fileList'>
              <Preview 
                submitFiles={this.state.submitFiles}
              />
            </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<FileManager />, document.getElementById("root"));
