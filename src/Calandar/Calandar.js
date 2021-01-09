import React from "react";
import "./Calandar.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ParticlesBg from "particles-bg";
export default function Calandar({ fbimg }) {
  return (
    <div className="App">
      {/* <ParticlesBg
        type="circle"
        bg={true}
        style={{ position: "absolute", zIndex: "-1", top: "0", left: "0" }}
      /> */}
      <div class="container-fluid">
        <div class="row">
          <div class=" col-lg-6 pic">
            {" "}
            <table
              style={{
                margin: "auto",
                height: "500px",
                backgroundImage: "url(" + fbimg + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></table>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div
              style={{
                margin: "auto",
                backgroundImage: "url(" + fbimg + ")",
                backgroundColor: "rgba(255,255,255,0.75)",
                backgroundBlendMode: "lighten",
                backgroundRepeat: "no-repeat",
              }}
              class="short-div "
            >
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
            <div class="short-div ">
              {" "}
              <div
                style={{
                  margin: "auto",
                  backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                  backgroundColor: "rgba(255,255,255,0.75)",
                  backgroundBlendMode: "lighten",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "50%",
                }}
                class="short-div "
              >
                {" "}
                <table>
                  <div id="month">
                    <center>
                      {" "}
                      <th class="month" colspan="7">
                        MARCH
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
          <div class="col-lg-3 col-sm-6">
            <div class="short-div ">
              {" "}
              <div
                style={{
                  margin: "auto",
                  backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                  backgroundColor: "rgba(255,255,255,0.75)",
                  backgroundBlendMode: "lighten",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "50%",
                }}
                class="short-div "
              >
                {" "}
                <table>
                  <div id="month">
                    <center>
                      {" "}
                      <th class="month" colspan="7">
                        FEBRUARY
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
            <div class="short-div ">
              {" "}
              <div
                style={{
                  margin: "auto",
                  backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                  backgroundColor: "rgba(255,255,255,0.75)",
                  backgroundBlendMode: "lighten",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "50%",
                  backgroundPositionX: "50%",
                }}
                class="short-div "
              >
                {" "}
                <table>
                  <div id="month">
                    <center>
                      {" "}
                      <th class="month" colspan="7">
                        APRIL
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
          </div>{" "}
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div
              style={{
                margin: "auto",
                backgroundImage: `url("https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM")`,
                backgroundColor: "rgba(255,255,255,0.75)",
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
                backgroundColor: "rgba(255,255,255,0.75)",
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
                backgroundColor: "rgba(255,255,255,0.75)",
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
                backgroundColor: "rgba(255,255,255,0.75)",
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
                backgroundColor: "rgba(255,255,255,0.75)",
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
                backgroundColor: "rgba(255,255,255,0.75)",
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
                backgroundColor: "rgba(255,255,255,0.75)",
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
                backgroundColor: "rgba(255,255,255,0.75)",
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
