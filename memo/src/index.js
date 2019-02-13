import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function ButtonBox(props) { // 함수형 컴포넌트
  const initial = props.initial;

  if (!initial) {
    return (
      <button className="button" onClick={props.onClick}>
        {props.button}
      </button>
    );
  } else {
    return null;
  }
}

class Start extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick1 = this.handleClick1.bind(this); // bind()
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      initial: true,
      title: "고객 메모",
      button1: "저장하기",
      button2: "취소하기",
      content: null,
      info: 0 + "/200"
    };
  }

  handleClick1(e) {
    console.log("handleClick1");
    console.log(e);
    e.stopPropagation(); // stopPropagation() 이용

    const contentLength = this.refs.contentInput.value.length; // ref 이용

    this.setState({
      initial: false,
      info: contentLength + "/200"
    });
  }

  handleClick2() {
    console.log("handleClick2");

    const content = this.refs.contentInput.value;
    const contentLength = this.refs.contentInput.value.length;

    if (contentLength !== 0) {
      console.log(this.refs.contentInput.value);

      this.setState({
        button1: "메모 수정",
        button2: "메모 삭제",
        content: content,
        info: new Date().toLocaleString()
      });
    } else {
      this.setState({
        initial: true
      });
    }
  }

  handleClick3() {
    console.log("handleClick3");

    this.setState({
      initial: true,
      button1: "저장하기",
      button2: "취소하기",
      content: null,
      info: 0 + "/200"
    });

    this.refs.contentInput.value = "";
  }

  handleChange() {
    const contentLength = this.refs.contentInput.value.length;

    this.setState({
      info: contentLength + "/200"
    });
  }

  render() {
    const title = this.state.title;
    const initial = this.state.initial;
    const info = this.state.info;

    return (
      <div onClick={() => {console.log("div")}}>
        <h1>{title}</h1>
        <h5>{info}</h5>
        <input
          type="text"
          className="contentBox"
          ref="contentInput"
          placeholder="고객 메모를 입력해주세요."
          onChange={() => this.handleChange()}
          onFocus={(e) => this.handleClick1(e)} // stopPropagation() 이용
        />
        <div onClick={() => {console.log("footer")}}>
          <p />
          <ButtonBox
            initial={initial}
            button={this.state.button1}
            onClick={() => this.handleClick2()}
          />
          <ButtonBox
            initial={initial}
            button={this.state.button2}
            onClick={() => this.handleClick3()}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Start />, document.getElementById("root"));
