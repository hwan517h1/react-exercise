import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

// function Preview(props) {
//   const fileUrlList = props.fileUrlList
//   var result

//   if(fileUrlList.length !== 0) {
//     for(var i = 0; i < fileUrlList.length; i++) {
//       result += "<img src='" + fileUrlList[i] + "'/>"
//     }
//   }

//   return result
// }

export class FileManager extends React.Component {
  state = {
    files: [],
    fileUrls: [],
  }

  saveFiles(file) {
    let fileReader = new FileReader()
    var fileUrl
    
    fileReader.onloadend = () => {
      fileUrl = fileReader.result
      console.log("fileUrl: " + fileUrl)

      this.state.files.push(file)
      this.state.fileUrls.push(fileUrl)
    }

    fileReader.readAsDataURL(file)
  }

  handleSubmit = (e) => {
    var files = this.state.files
    console.log(files)

    for(var i = 0; i < files.length; i++) {
      console.log("Submit File #" + (i + 1) + ": " + files[i])    
    }
  }

  handleChange = (e) => {
    var files = e.target.files

    // 파일 리스트인 files는 length 속성을 지니고 있으며 item()을 통해서 파일 객체를 반환함
    for(var i = 0; i < files.length; i++) {
      console.log("File #" + (i + 1) + ": " + files[i])
    
      this.saveFiles(files.item(i))
    }

    this.setState({
      files: this.state.files,
      fileUrls: this.state.fileUrls,
    })

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
              {/* <Preview 
                fileUrlList={this.state.fileUrls}
              /> */}
            </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<FileManager />, document.getElementById("root"));
