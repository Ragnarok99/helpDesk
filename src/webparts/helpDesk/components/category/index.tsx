import * as React from "react";
import {Link} from 'react-router-dom';

import { Button } from "reactstrap";

require("./styles.css");

const category = () => {
  return (
    <div className="category col-lg-12">
      <div className="clearfix">
        {/* buttons for options section */}

        <Link to='//category/1/announcements/newTicket' className="btn btn-primary" color="primary">
          New Topic
        </Link >
      </div>
      <hr className="hidden-xs" />
      <p className="hidden-xs">Announcements</p>

      <ul className="topic-list">
        <li className="row clearfix category-item ">
          <meta content="Announcements" />

          <div className="col-md-7 col-sm-9 col-xs-10 content">
            <div
              className="avatar pull-left"
              title=""
              data-original-title="Eda"
            >
              <a href="/user/eda" className="pull-left">
                <img
                  data-uid="5"
                  src="https://i.imgur.com/cMLBg5u.jpg"
                  className="user-img"
                />
              </a>
            </div>

            <h2 className="title">
            
              <Link to="/category/1/announcements/ticketName">
              problem windows server 2002 lts
              </Link>
              <br />

              <small className="hidden-xs">
                <span className="timeago" title="14 Sep 2017, 13:28">
                  14 Sep 2017, 13:28
                </span>{" "}
                • <a href="/user/eda">Eda</a>
              </small>
              <small className="visible-xs-inline">
                <span className="timeago" title="20 Oct 2017, 21:42">
                  2 days ago
                </span>
              </small>
            </h2>
          </div>

          <div className="col-md-1 hidden-sm hidden-xs stats">
            <span className="human-readable-number" title="9">
              9
            </span>
            <br />
            <small>Posts</small>
          </div>

          <div className="col-md-1 hidden-sm hidden-xs stats">
            <span className="human-readable-number" title="1381">
              1.4k
            </span>
            <br />
            <small>Views</small>
          </div>

          <div className="col-md-3 col-sm-3 teaser hidden-xs">
            <div className="card" style={{ borderColor: "#e57373" }}>
              <p>
                <a href="/user/alex-sunny">
                  <img
                    title=""
                    className="user-img"
                    src="https://graph.facebook.com/864340113729868/picture?type=large"
                    data-original-title="Alex Sunny"
                  />
                </a>
                <a
                  className="permalink"
                  href="/#"
                >
                  <span className="timeago" title="20 Oct 2017, 21:42">
                    2 days ago
                  </span>
                </a>
              </p>
              <div className="post-content">
                <p>
                  <a
                    className="plugin-mentions-a"
                    href="#"
                  >
                    @nsuchy
                  </a>{" "}
                  said in{" "}
                  <Link to="/category/1/announcements/ticketName">problem windows server 2002 lts</Link>:
                </p>
                <blockquote>
                  <p>so good</p>
                </blockquote>
              </div>
            </div>
          </div>
        </li>
        <li className="row clearfix category-item ">
          <meta content="Announcements" />

          <div className="col-md-7 col-sm-9 col-xs-10 content">
            <div
              className="avatar pull-left"
              title=""
              data-original-title="Eda"
            >
              <a href="/user/eda" className="pull-left">
                <img
                  data-uid="5"
                  src="https://i.imgur.com/cMLBg5u.jpg"
                  className="user-img"
                />
              </a>
            </div>

            <h2 className="title">
              <Link to="/category/1/announcements/ticketName">
              <span className="answered"><i className="fa fa-question-circle"></i> Solved</span> problem windows server 2002 lts
              </Link>
              <br />

              <small className="hidden-xs">
                <span className="timeago" title="14 Sep 2017, 13:28">
                  14 Sep 2017, 13:28
                </span>{" "}
                • <a href="/user/eda">Eda</a>
              </small>
              <small className="visible-xs-inline">
                <span className="timeago" title="20 Oct 2017, 21:42">
                  2 days ago
                </span>
              </small>
            </h2>
          </div>

          <div className="col-md-1 hidden-sm hidden-xs stats">
            <span className="human-readable-number" title="9">
              9
            </span>
            <br />
            <small>Posts</small>
          </div>

          <div className="col-md-1 hidden-sm hidden-xs stats">
            <span className="human-readable-number" title="1381">
              1.4k
            </span>
            <br />
            <small>Views</small>
          </div>

          <div className="col-md-3 col-sm-3 teaser hidden-xs">
            <div className="card" style={{ borderColor: "#e57373" }}>
              <p>
                <a href="/user/alex-sunny">
                  <img
                    title=""
                    className="user-img"
                    src="https://graph.facebook.com/864340113729868/picture?type=large"
                    data-original-title="Alex Sunny"
                  />
                </a>
                <a
                  className="permalink"
                  href="/#"
                >
                  <span className="timeago" title="20 Oct 2017, 21:42">
                    2 days ago
                  </span>
                </a>
              </p>
              <div className="post-content">
                <p>
                  <a
                    className="plugin-mentions-a"
                    href="#"
                  >
                    @nsuchy
                  </a>{" "}
                  said in{" "}
                  <a href="/post/63085">problem windows server 2002 lts!</a>:
                </p>
                <blockquote>
                  <p>so good</p>
                </blockquote>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default category;
