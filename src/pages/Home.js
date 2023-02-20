import { useState } from "react";
import InputText from "../components/atoms/InputText";
import {SubmitButton} from "../components/atoms/Button";

import {Success, Processing, Failed} from "../components/molecules/Results"
import logo from '../galery/1x/logo.png'

function Home() {
  let urlAuthor = 'https://github.com/LeninJimenezTorres';
  const [status, setStatus] = useState(null);
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});
  
  const handleInput = (e) => {
    setUrl(e);
    //console.log(e)
  };
  const handleKeyPress = (e) => {
    //console.log(e.charCode)
    if (e.charCode === 13) {
      process();
    }
  };
  const handleSubmit = () => {
    process();
  };
  const process = () => {
    //setStatus("processing");
    let tweet_id = url.match("[0-9]{10,20}");
    //console.log(tweet_id);
    fetch(`https://api.animemoe.us/twitter-video-downloader/v2/?id=${tweet_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success === "true") {
          setData(data.data);
          setStatus("success");
        } else {
          setData({ message: data.message });
          setStatus("failed");
        }
        console.log(data)
      })
      .catch((e) => {
        console.log(e)
        setData({ message: "Check Your Internet Connection" });
        setStatus("failed");
      });
  };
  return (
    <div className="home">
      <div className="background">
      </div>
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="twitter"/>          
          <h1 className="title">
            Twitter Video Downloader
          </h1>
        </div>
        <div className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href={urlAuthor}>Author</a></li>
            <li><a href="/donations">Donations</a></li>
          </ul>
        </div>
      </div>
      <div className="search">
        <div className="input">
          <InputText
            handleInput={handleInput}
            handleKeyPress={handleKeyPress}
          />
        </div>
        <div className="submit-button">
          <SubmitButton handleSubmit={handleSubmit}/>
        </div>
      </div>
      <div className="results">
        {status === "success" && <Success data={data} />}
        {status === "processing" && <Processing />}
        {status === "failed" && <Failed message={data.message} />}
      </div>
    </div>
  )
}

export default Home