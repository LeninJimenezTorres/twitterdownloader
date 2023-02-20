import { DownloadButton } from "../atoms/Button";

function Success(props) {
    return (
        <div className="results-in">
            <div className="results-in-sub">
                <div className="results-img">
                    <img
                        src={props.data.thumbnail}
                        alt="..."
                    />
                    <div className="results-options">
                        <div className="results-options-in">
                            <h3 className="tweet-name">
                                <h4>Download:</h4>
                                <a
                                    href={`https://twitter.com/${props.data.username}`}
                                    className="text-decoration-none"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p>{props.data.name}</p>
                                </a>
                            </h3>
                            <hr />
                            <div className="card-text">
                                <div className="buttons">
                                    {props.data.videos.map((e, i) => {
                                        return <DownloadButton key={i} target={e.url} text={e.size} />;
                                        console.log('Ok')
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="results-video">
                    <iframe id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="auto"
                        height="auto"
                        src={props.data.videos[0].url}>
                    </iframe>
                </div>
                
            </div>
        </div>
    );
}

function Processing() {
  return (
    <div className="d-flex justify-content-center mt-5 animate__animated animate__fadeIn">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

function Failed(props) {
  return (
    <div className="text-center mt-4 animate__animated animate__fadeIn">
      <h3>{props.message}</h3>
    </div>
  );
}

export { Success, Processing, Failed };
