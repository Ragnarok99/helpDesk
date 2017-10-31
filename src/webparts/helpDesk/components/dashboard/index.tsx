import * as React from "react";
import {Link} from 'react-router-dom';

import Slider from "react-slick";
require("./styles.css");

const Dashboard = () => {

  return (
      <div className="container">
        
        <div className="row">
          <div className="col-lg-9 col-sm-12">
            <h1 className="categories-title">Categories</h1>
            <ul className="categories">
              <li className="row clearfix">
                <meta content="Announcements" />

                <div className="content col-xs-12 col-md-7 col-sm-9">
                  <div
                    className="icon pull-left"
                    style={{ backgroundColor: "#e57373", color: "#fff" }}
                  >
                    <i className="fa fa-fw fa-bullhorn" />
                  </div>

                  <h2 className="title">
                    <Link to="/category/1/announcements">Announcements</Link>
                    <br />

                    <span className="description">
                      <p>Check here for announcements about NodeBB</p>
                    </span>
                  </h2>
                  <span className="visible-xs pull-right">
                    <a className="permalink" href="/post/63762">
                      <small className="timeago" title="20 Oct 2017, 21:42">
                        a day ago
                      </small>
                    </a>
                  </span>
                </div>

                <div className="col-md-1 hidden-sm hidden-xs stats">
                  <span className=" human-readable-number" title="46">
                    46
                  </span>
                  <br />
                  <small>Topics</small>
                </div>
                <div className="col-md-1 hidden-sm hidden-xs stats">
                  <span className=" human-readable-number" title="734">
                    734
                  </span>
                  <br />
                  <small>Posts</small>
                </div>

                <div className="col-md-3 col-sm-3 teaser hidden-xs">
                  <div className="card" style={{ borderColor: "#e57373" }}>
                    <div>
                      <p>
                        <a href="/user/alex-sunny">
                          <img
                            className="user-img"
                            title=""
                            alt="Alex Sunny"
                            src="https://graph.facebook.com/864340113729868/picture?type=large"
                            data-original-title="Alex Sunny"
                          />
                        </a>
                        <a
                          className="permalink"
                          href="/topic/11227/nodebb-v1-6-0-has-been-released/9"
                        >
                          <small className="timeago" title="20 Oct 2017, 21:42">
                            a day ago
                          </small>
                        </a>
                      </p>
                      <div className="post-content">
                        <p>
                          <a
                            className="plugin-mentions-a"
                            href="https://community.nodebb.org/uid/12497"
                          >
                            @nsuchy
                          </a>{" "}
                          said in{" "}
                          <a href="/post/63085">
                            NodeBB v1.6.0 has been released!
                          </a>:
                        </p>
                        <blockquote>
                          <p>so good</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );

}

export default Dashboard;
