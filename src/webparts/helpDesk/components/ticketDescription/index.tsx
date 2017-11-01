import * as React from "react";
require("./styles.css");

const ticket = () => {
  return (
    <div className="topic col-lg-12">
      <h1 className="hidden-xs">
        <span className="unanswered">
          <i className="fa fa-question-circle" /> Unsolved
        </span>

        <span className="topic-title">
          Problem windows server 2002 LTS
        </span>
      </h1>
      <hr />

      <ul className="posts">
      <li className="">
      <a /> 

      <meta content="2017-10-30T15:46:14.563Z" />
      <meta content="" />

      <div className="clearfix post-header">
        <div className="icon pull-left">
          <a href="/user/arnoldZuleta">
            <div
              className="user-icon"
              style={{ backgroundColor: "#009688" }}
            >
              A
            </div>

            <i className="fa fa-circle status offline" />
          </a>
        </div>

        <small className="pull-left">
          <strong>
            <a className='user-name' href="/user/arnoldZuleta">Arnold zuleta</a>
          </strong>

          <span className="timeago" >
          a day ago
        </span>

        </small> 
      </div>

      <br />

      <div className="content">
        <p>I have the following error at startup.</p>
        <pre className="markdown-highlight">
          <code className="hljs javascript">
            at Module.require (<span className="hljs-built_in">
              module
            </span>.js:<span className="hljs-number">497</span>:<span className="hljs-number">17</span>)
            at <span className="hljs-built_in">require</span> (internal/<span className="hljs-built_in">module</span>.js:<span className="hljs-number">20</span>:<span className="hljs-number">19</span>)
            at <span className="hljs-built_in">
              Object
            </span>.&lt;anonymous&gt; (<span className="hljs-regexp">/root/</span>nodebb/src/admin/search.js:<span className="hljs-number">6</span>:<span className="hljs-number">20</span>)
            at Module._compile (<span className="hljs-built_in">
              module
            </span>.js:<span className="hljs-number">570</span>:<span className="hljs-number">32</span>)
            at <span className="hljs-built_in">
              Object
            </span>.Module._extensions..js (<span className="hljs-built_in">module</span>.js:<span className="hljs-number">579</span>:<span className="hljs-number">10</span>)
            at Module.load (<span className="hljs-built_in">
              module
            </span>.js:<span className="hljs-number">487</span>:<span className="hljs-number">32</span>)
          </code>
        </pre>
        <p>
          30/10 16:39:56 [12219] - info: [app] Shutdown (SIGTERM/SIGINT)
          Initialised.<br />
          30/10 16:39:56 [12219] - info: [app] Database connection closed.<br
          />
          30/10 16:39:56 [12219] - info: [app] Web server closed to
          connections.<br />
          3 restarts in 10 seconds, most likely an error on startup.
          Halting.
        </p>
        <p>Can somebody help me ?</p>
      </div>

      <hr />

      <div className="post-bar">
        <div className="clearfix">
          <div className="tags pull-left" />

          <div />

          <div className="topic-main-buttons pull-right">
            <div className="stats hidden-xs">
              <span className="human-readable-number" title="13">
                13
              </span>
              <br />
              <small>Posts</small>
            </div>
            <div className="stats hidden-xs">
              <span className="human-readable-number" title="152">
                152
              </span>
              <br />
              <small>Views</small>
            </div>

  

            <div className="pull-right">&nbsp;</div>
          </div>
        </div>
        <hr />
      </div>
    </li>
        {/* END POST */}

        <li className="">
          <a /> 

          <meta content="2017-10-30T15:46:14.563Z" />
          <meta content="" />

          <div className="clearfix post-header">
            <div className="icon pull-left">
              <a href="/user/catmanGonzales">
              <img  src="https://i.imgur.com/ewMLHNO.jpg" />

                <i className="fa fa-circle status offline" />
              </a>
            </div>

            <small className="pull-left">
              <strong>
                <a className='user-name' href="/user/catmanGonzales">catman Gonzales</a>
              </strong>

              <span className="timeago" >
              a day ago
            </span>

            </small> 
          </div>

          <br />

          <div className="content">
          <p>That is not the entire log, take a look at the file <code>logs/output.log</code> to see the entire error message.</p>
          </div>

          <hr />

          <div className="post-bar">
            <div className="clearfix">
              <div className="tags pull-left" />

              <div />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ticket;
