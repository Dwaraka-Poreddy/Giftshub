import React from "react";
import AuthHeader from "../components/nav/Header";
import CustomScroll from "./CustomScroll";
import Response from "./response";
function Studio() {
  const data = Response;
  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <AuthHeader />
      Studio goes here ...!
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 order-md-2">Body</div>
          <div class="col-md-6 col-lg-2 order-md-3">Right-Nav</div>
          <div class="col-md-6 col-lg-2   order-md-1">
            <h5
              style={{
                textAlign: "center",
                alignText: "center",
                color: "#ffffff",
                paddingBottom: 0,
              }}
            >
              Trending
            </h5>
            <hr style={{ margin: 0 }} />
            <CustomScroll>
              {data.items.map((item, index) => (
                <div
                  className="scrollArea"
                  style={{
                    display: "flex",
                    margin: "auto",
                    marginTop: "10px",
                    maxWidth: "700px",
                    borderRight: "8px solid #0092e0",
                    cursor: "pointer",
                  }}
                >
                  <img
                    // onClick={() => {
                    //   setActiveImage(item.src);
                    // }}
                    style={{
                      objectFit: "contain",
                      width: "200px",
                      padding: "3px",
                      // height: "158px",
                      margin: "auto",
                      border: "2px solid #0092e0",
                    }}
                    src={item.src}
                    alt=""
                  />
                </div>
              ))}
            </CustomScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studio;
