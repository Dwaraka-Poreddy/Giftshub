import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MailIcon from "@material-ui/icons/Mail";
import HeaderBtn from "../Studio/HeaderBtn";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function Share({ livelink }) {
  const classes = useStyles();
  const [to, setto] = useState("Srinivas");
  const [giftshub, setgiftshub] = useState("https://www.google.com/");
  const [from, setfrom] = useState("Dwaraka");
  const [title, settitle] = useState(
    `Dear ${to}, a gift from ${from} is waiting for you at ${livelink}. Made by ${giftshub} with love`
  );
  const [title1, settitle1] = useState(
    `Dear ${to}, a gift  is waiting for you at ${livelink}. Made by ${giftshub}`
  );
  return (
    <div className="App">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={from}
          onChange={(e) => {
            setfrom(e.target.value);
            settitle(
              `Dear ${to}, a gift from ${from} is waiting for you at ${livelink}. Made by ${giftshub}`
            );
            console.log({ title });
          }}
          required
          id="filled-basic"
          label="From"
          variant="filled"
        />
        <TextField
          value={to}
          onChange={(e) => {
            setto(e.target.value);
            settitle(
              `Dear ${to}, a gift from ${from} is waiting for you at <a src=${livelink}>${livelink}</a>. Made by ${giftshub}`
            );
            console.log({ title });
          }}
          required
          id="filled-basic"
          label="To"
          variant="filled"
        />
      </form>

      <FacebookShareButton
        windowWidth="500px"
        windowHeight="500px"
        url={livelink}
        title={title1}
      >
        <HeaderBtn Icon={FacebookIcon} title="Facebook " />
      </FacebookShareButton>
      <br />

      <TwitterShareButton
        windowWidth="500px"
        windowHeight="500px"
        url={livelink}
        title={title1}
      >
        <HeaderBtn
          Icon={TwitterIcon}
          title="Twitterttwittertwittertwittettwitter "
        />
      </TwitterShareButton>
      <br />
      <div style={{ width: "100%", backgroundColor: "red" }}>
        {" "}
        <WhatsappShareButton
          windowWidth="500px"
          windowHeight="500px"
          url={livelink}
          title={title}
          separator="::"
        >
          <HeaderBtn Icon={WhatsAppIcon} title="Whatsapp " />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default Share;
