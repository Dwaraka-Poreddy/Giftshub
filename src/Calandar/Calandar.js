import React from "react";
import "./Calandar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Calandar({ fbimg }) {
  return (
    <div className="App">
      <div class="container-fluid" style={{ maxWidth: "1300px" }}>
        <div class="row">
          <div
            style={{
              backgroundImage: "url(" + fbimg + ")",
              backgroundColor: "rgba(255,255,255,0.3)",
              backgroundBlendMode: "lighten",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              // height: "530px",
            }}
            class=" col-lg-6 pic"
          >
            <table></table>
          </div>
          <div
            class=" col-lg-6"
            style={{
              backgroundImage: "url(" + fbimg + ")",
              backgroundColor: "rgba(255,255,255,0.3)",
              backgroundBlendMode: "lighten",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div class="row">
              <div class=" col-md-6">
                <div class="short-div ">
                  {" "}
                  <table>
                    <div id="month">
                      <center>
                        {" "}
                        <th class="month" colspan="7">
                          JANUARY
                        </th>
                      </center>
                    </div>
                    <div className="newWeeks">
                      <center
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>SUN</span>
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                        <span>SAT</span>
                      </center>
                    </div>
                    <center>
                      <div id="days">
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">31</span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days">1</span>
                            <span class="days">2</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">3</span>
                            <span class="days">4</span>
                            <span class="days">5</span>
                            <span class="days">6</span>
                            <span class="days">7</span>
                            <span class="days">8</span>
                            <span class="days">9</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">10</span>
                            <span class="days">11</span>
                            <span class="days">12</span>
                            <span class="days">13</span>
                            <span class="days">14</span>
                            <span class="days">15</span>
                            <span class="days">16</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">17</span>
                            <span class="days">18</span>
                            <span class="days">19</span>
                            <span class="days">20</span>
                            <span class="days">21</span>
                            <span class="days">22</span>
                            <span class="days">23</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">24</span>
                            <span class="days">25</span>
                            <span class="days">26</span>
                            <span class="days">27</span>
                            <span class="days">28</span>
                            <span class="days">29</span>
                            <span class="days">30</span>
                          </center>
                        </div>
                      </div>
                    </center>
                  </table>
                </div>
              </div>
              <div class=" col-md-6">
                <div class="short-div ">
                  {" "}
                  <table>
                    <div id="month">
                      <center>
                        {" "}
                        <th class="month" colspan="7">
                          February
                        </th>
                      </center>
                    </div>
                    <div className="newWeeks">
                      <center
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>SUN</span>
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                        <span>SAT</span>
                      </center>
                    </div>
                    <center>
                      <div id="days">
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">31</span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days">1</span>
                            <span class="days">2</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">3</span>
                            <span class="days">4</span>
                            <span class="days">5</span>
                            <span class="days">6</span>
                            <span class="days">7</span>
                            <span class="days">8</span>
                            <span class="days">9</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">10</span>
                            <span class="days">11</span>
                            <span class="days">12</span>
                            <span class="days">13</span>
                            <span class="days">14</span>
                            <span class="days">15</span>
                            <span class="days">16</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">17</span>
                            <span class="days">18</span>
                            <span class="days">19</span>
                            <span class="days">20</span>
                            <span class="days">21</span>
                            <span class="days">22</span>
                            <span class="days">23</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">24</span>
                            <span class="days">25</span>
                            <span class="days">26</span>
                            <span class="days">27</span>
                            <span class="days">28</span>
                            <span class="days">29</span>
                            <span class="days">30</span>
                          </center>
                        </div>
                      </div>
                    </center>
                  </table>
                </div>
              </div>
            </div>
            <div class="row">
              <div class=" col-md-6">
                <div class="short-div ">
                  {" "}
                  <table>
                    <div id="month">
                      <center>
                        {" "}
                        <th class="month" colspan="7">
                          March
                        </th>
                      </center>
                    </div>
                    <div className="newWeeks">
                      <center
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>SUN</span>
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                        <span>SAT</span>
                      </center>
                    </div>
                    <center>
                      <div id="days">
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">31</span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days">1</span>
                            <span class="days">2</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">3</span>
                            <span class="days">4</span>
                            <span class="days">5</span>
                            <span class="days">6</span>
                            <span class="days">7</span>
                            <span class="days">8</span>
                            <span class="days">9</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">10</span>
                            <span class="days">11</span>
                            <span class="days">12</span>
                            <span class="days">13</span>
                            <span class="days">14</span>
                            <span class="days">15</span>
                            <span class="days">16</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">17</span>
                            <span class="days">18</span>
                            <span class="days">19</span>
                            <span class="days">20</span>
                            <span class="days">21</span>
                            <span class="days">22</span>
                            <span class="days">23</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">24</span>
                            <span class="days">25</span>
                            <span class="days">26</span>
                            <span class="days">27</span>
                            <span class="days">28</span>
                            <span class="days">29</span>
                            <span class="days">30</span>
                          </center>
                        </div>
                      </div>
                    </center>
                  </table>
                </div>
              </div>
              <div class=" col-md-6">
                <div class="short-div ">
                  {" "}
                  <table>
                    <div id="month">
                      <center>
                        {" "}
                        <th class="month" colspan="7">
                          April
                        </th>
                      </center>
                    </div>
                    <div className="newWeeks">
                      <center
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>SUN</span>
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                        <span>SAT</span>
                      </center>
                    </div>
                    <center>
                      <div id="days">
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">31</span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days"></span>
                            <span class="days">1</span>
                            <span class="days">2</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">3</span>
                            <span class="days">4</span>
                            <span class="days">5</span>
                            <span class="days">6</span>
                            <span class="days">7</span>
                            <span class="days">8</span>
                            <span class="days">9</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">10</span>
                            <span class="days">11</span>
                            <span class="days">12</span>
                            <span class="days">13</span>
                            <span class="days">14</span>
                            <span class="days">15</span>
                            <span class="days">16</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">17</span>
                            <span class="days">18</span>
                            <span class="days">19</span>
                            <span class="days">20</span>
                            <span class="days">21</span>
                            <span class="days">22</span>
                            <span class="days">23</span>
                          </center>
                        </div>
                        <div>
                          <center
                            className="newWeek1"
                            style={{
                              width: "90%",
                              display: "flex",
                              margin: "auto",
                              justifyContent: "space-between",
                            }}
                          >
                            <span class="days">24</span>
                            <span class="days">25</span>
                            <span class="days">26</span>
                            <span class="days">27</span>
                            <span class="days">28</span>
                            <span class="days">29</span>
                            <span class="days">30</span>
                          </center>
                        </div>
                      </div>
                    </center>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div
              style={{
                margin: "auto",
                backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                backgroundColor: "rgba(255,255,255,0.3)",
                backgroundBlendMode: "lighten",
              }}
              class="short-div "
            >
              {" "}
              <table>
                <div id="month">
                  <center>
                    {" "}
                    <th class="month" colspan="7">
                      MAY
                    </th>
                  </center>
                </div>
                <div className="newWeeks">
                  <center
                    style={{
                      width: "90%",
                      display: "flex",
                      margin: "auto",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>SUN</span>
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                  </center>
                </div>
                <center>
                  <div id="days">
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">31</span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days">1</span>
                        <span class="days">2</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">3</span>
                        <span class="days">4</span>
                        <span class="days">5</span>
                        <span class="days">6</span>
                        <span class="days">7</span>
                        <span class="days">8</span>
                        <span class="days">9</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">10</span>
                        <span class="days">11</span>
                        <span class="days">12</span>
                        <span class="days">13</span>
                        <span class="days">14</span>
                        <span class="days">15</span>
                        <span class="days">16</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">17</span>
                        <span class="days">18</span>
                        <span class="days">19</span>
                        <span class="days">20</span>
                        <span class="days">21</span>
                        <span class="days">22</span>
                        <span class="days">23</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">24</span>
                        <span class="days">25</span>
                        <span class="days">26</span>
                        <span class="days">27</span>
                        <span class="days">28</span>
                        <span class="days">29</span>
                        <span class="days">30</span>
                      </center>
                    </div>
                  </div>
                </center>
              </table>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div
              style={{
                margin: "auto",
                backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                backgroundColor: "rgba(255,255,255,0.3)",
                backgroundBlendMode: "lighten",
              }}
              class="short-div "
            >
              {" "}
              <table>
                <div id="month">
                  <center>
                    {" "}
                    <th class="month" colspan="7">
                      JUNE
                    </th>
                  </center>
                </div>
                <div className="newWeeks">
                  <center
                    style={{
                      width: "90%",
                      display: "flex",
                      margin: "auto",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>SUN</span>
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                  </center>
                </div>
                <center>
                  <div id="days">
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">31</span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days">1</span>
                        <span class="days">2</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">3</span>
                        <span class="days">4</span>
                        <span class="days">5</span>
                        <span class="days">6</span>
                        <span class="days">7</span>
                        <span class="days">8</span>
                        <span class="days">9</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">10</span>
                        <span class="days">11</span>
                        <span class="days">12</span>
                        <span class="days">13</span>
                        <span class="days">14</span>
                        <span class="days">15</span>
                        <span class="days">16</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">17</span>
                        <span class="days">18</span>
                        <span class="days">19</span>
                        <span class="days">20</span>
                        <span class="days">21</span>
                        <span class="days">22</span>
                        <span class="days">23</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">24</span>
                        <span class="days">25</span>
                        <span class="days">26</span>
                        <span class="days">27</span>
                        <span class="days">28</span>
                        <span class="days">29</span>
                        <span class="days">30</span>
                      </center>
                    </div>
                  </div>
                </center>
              </table>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div
              style={{
                margin: "auto",
                backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                backgroundColor: "rgba(255,255,255,0.3)",
                backgroundBlendMode: "lighten",
              }}
              class="short-div "
            >
              {" "}
              <table>
                <div id="month">
                  <center>
                    {" "}
                    <th class="month" colspan="7">
                      JULY
                    </th>
                  </center>
                </div>
                <div className="newWeeks">
                  <center
                    style={{
                      width: "90%",
                      display: "flex",
                      margin: "auto",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>SUN</span>
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                  </center>
                </div>
                <center>
                  <div id="days">
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">31</span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days">1</span>
                        <span class="days">2</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">3</span>
                        <span class="days">4</span>
                        <span class="days">5</span>
                        <span class="days">6</span>
                        <span class="days">7</span>
                        <span class="days">8</span>
                        <span class="days">9</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">10</span>
                        <span class="days">11</span>
                        <span class="days">12</span>
                        <span class="days">13</span>
                        <span class="days">14</span>
                        <span class="days">15</span>
                        <span class="days">16</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">17</span>
                        <span class="days">18</span>
                        <span class="days">19</span>
                        <span class="days">20</span>
                        <span class="days">21</span>
                        <span class="days">22</span>
                        <span class="days">23</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">24</span>
                        <span class="days">25</span>
                        <span class="days">26</span>
                        <span class="days">27</span>
                        <span class="days">28</span>
                        <span class="days">29</span>
                        <span class="days">30</span>
                      </center>
                    </div>
                  </div>
                </center>
              </table>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div
              style={{
                margin: "auto",
                backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                backgroundColor: "rgba(255,255,255,0.3)",
                backgroundBlendMode: "lighten",
              }}
              class="short-div "
            >
              {" "}
              <table>
                <div id="month">
                  <center>
                    {" "}
                    <th class="month" colspan="7">
                      AUGUST
                    </th>
                  </center>
                </div>
                <div className="newWeeks">
                  <center
                    style={{
                      width: "90%",
                      display: "flex",
                      margin: "auto",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>SUN</span>
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                  </center>
                </div>
                <center>
                  <div id="days">
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">31</span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days">1</span>
                        <span class="days">2</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">3</span>
                        <span class="days">4</span>
                        <span class="days">5</span>
                        <span class="days">6</span>
                        <span class="days">7</span>
                        <span class="days">8</span>
                        <span class="days">9</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">10</span>
                        <span class="days">11</span>
                        <span class="days">12</span>
                        <span class="days">13</span>
                        <span class="days">14</span>
                        <span class="days">15</span>
                        <span class="days">16</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">17</span>
                        <span class="days">18</span>
                        <span class="days">19</span>
                        <span class="days">20</span>
                        <span class="days">21</span>
                        <span class="days">22</span>
                        <span class="days">23</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">24</span>
                        <span class="days">25</span>
                        <span class="days">26</span>
                        <span class="days">27</span>
                        <span class="days">28</span>
                        <span class="days">29</span>
                        <span class="days">30</span>
                      </center>
                    </div>
                  </div>
                </center>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div
              style={{
                margin: "auto",
                backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                backgroundColor: "rgba(255,255,255,0.3)",
                backgroundBlendMode: "lighten",
              }}
              class="short-div "
            >
              {" "}
              <table>
                <div id="month">
                  <center>
                    {" "}
                    <th class="month" colspan="7">
                      SEPTEMBER
                    </th>
                  </center>
                </div>
                <div className="newWeeks">
                  <center
                    style={{
                      width: "90%",
                      display: "flex",
                      margin: "auto",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>SUN</span>
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                  </center>
                </div>
                <center>
                  <div id="days">
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">31</span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days">1</span>
                        <span class="days">2</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">3</span>
                        <span class="days">4</span>
                        <span class="days">5</span>
                        <span class="days">6</span>
                        <span class="days">7</span>
                        <span class="days">8</span>
                        <span class="days">9</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">10</span>
                        <span class="days">11</span>
                        <span class="days">12</span>
                        <span class="days">13</span>
                        <span class="days">14</span>
                        <span class="days">15</span>
                        <span class="days">16</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">17</span>
                        <span class="days">18</span>
                        <span class="days">19</span>
                        <span class="days">20</span>
                        <span class="days">21</span>
                        <span class="days">22</span>
                        <span class="days">23</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">24</span>
                        <span class="days">25</span>
                        <span class="days">26</span>
                        <span class="days">27</span>
                        <span class="days">28</span>
                        <span class="days">29</span>
                        <span class="days">30</span>
                      </center>
                    </div>
                  </div>
                </center>
              </table>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div
              style={{
                margin: "auto",
                backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                backgroundColor: "rgba(255,255,255,0.3)",
                backgroundBlendMode: "lighten",
              }}
              class="short-div "
            >
              {" "}
              <table>
                <div id="month">
                  <center>
                    {" "}
                    <th class="month" colspan="7">
                      OCTOBER
                    </th>
                  </center>
                </div>
                <div className="newWeeks">
                  <center
                    style={{
                      width: "90%",
                      display: "flex",
                      margin: "auto",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>SUN</span>
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                  </center>
                </div>
                <center>
                  <div id="days">
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">31</span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days">1</span>
                        <span class="days">2</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">3</span>
                        <span class="days">4</span>
                        <span class="days">5</span>
                        <span class="days">6</span>
                        <span class="days">7</span>
                        <span class="days">8</span>
                        <span class="days">9</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">10</span>
                        <span class="days">11</span>
                        <span class="days">12</span>
                        <span class="days">13</span>
                        <span class="days">14</span>
                        <span class="days">15</span>
                        <span class="days">16</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">17</span>
                        <span class="days">18</span>
                        <span class="days">19</span>
                        <span class="days">20</span>
                        <span class="days">21</span>
                        <span class="days">22</span>
                        <span class="days">23</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">24</span>
                        <span class="days">25</span>
                        <span class="days">26</span>
                        <span class="days">27</span>
                        <span class="days">28</span>
                        <span class="days">29</span>
                        <span class="days">30</span>
                      </center>
                    </div>
                  </div>
                </center>
              </table>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div
              style={{
                margin: "auto",
                backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                backgroundColor: "rgba(255,255,255,0.3)",
                backgroundBlendMode: "lighten",
              }}
              class="short-div "
            >
              {" "}
              <table>
                <div id="month">
                  <center>
                    {" "}
                    <th class="month" colspan="7">
                      NOVEMBER
                    </th>
                  </center>
                </div>
                <div className="newWeeks">
                  <center
                    style={{
                      width: "90%",
                      display: "flex",
                      margin: "auto",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>SUN</span>
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                  </center>
                </div>
                <center>
                  <div id="days">
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">31</span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days">1</span>
                        <span class="days">2</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">3</span>
                        <span class="days">4</span>
                        <span class="days">5</span>
                        <span class="days">6</span>
                        <span class="days">7</span>
                        <span class="days">8</span>
                        <span class="days">9</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">10</span>
                        <span class="days">11</span>
                        <span class="days">12</span>
                        <span class="days">13</span>
                        <span class="days">14</span>
                        <span class="days">15</span>
                        <span class="days">16</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">17</span>
                        <span class="days">18</span>
                        <span class="days">19</span>
                        <span class="days">20</span>
                        <span class="days">21</span>
                        <span class="days">22</span>
                        <span class="days">23</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">24</span>
                        <span class="days">25</span>
                        <span class="days">26</span>
                        <span class="days">27</span>
                        <span class="days">28</span>
                        <span class="days">29</span>
                        <span class="days">30</span>
                      </center>
                    </div>
                  </div>
                </center>
              </table>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div
              style={{
                margin: "auto",
                backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                backgroundColor: "rgba(255,255,255,0.3)",
                backgroundBlendMode: "lighten",
              }}
              class="short-div "
            >
              {" "}
              <table>
                <div id="month">
                  <center>
                    {" "}
                    <th class="month" colspan="7">
                      DECEMBER
                    </th>
                  </center>
                </div>
                <div className="newWeeks">
                  <center
                    style={{
                      width: "90%",
                      display: "flex",
                      margin: "auto",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>SUN</span>
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                  </center>
                </div>
                <center>
                  <div id="days">
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">31</span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days"></span>
                        <span class="days">1</span>
                        <span class="days">2</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">3</span>
                        <span class="days">4</span>
                        <span class="days">5</span>
                        <span class="days">6</span>
                        <span class="days">7</span>
                        <span class="days">8</span>
                        <span class="days">9</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">10</span>
                        <span class="days">11</span>
                        <span class="days">12</span>
                        <span class="days">13</span>
                        <span class="days">14</span>
                        <span class="days">15</span>
                        <span class="days">16</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">17</span>
                        <span class="days">18</span>
                        <span class="days">19</span>
                        <span class="days">20</span>
                        <span class="days">21</span>
                        <span class="days">22</span>
                        <span class="days">23</span>
                      </center>
                    </div>
                    <div>
                      <center
                        className="newWeek1"
                        style={{
                          width: "90%",
                          display: "flex",
                          margin: "auto",
                          justifyContent: "space-between",
                        }}
                      >
                        <span class="days">24</span>
                        <span class="days">25</span>
                        <span class="days">26</span>
                        <span class="days">27</span>
                        <span class="days">28</span>
                        <span class="days">29</span>
                        <span class="days">30</span>
                      </center>
                    </div>
                  </div>
                </center>
              </table>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
