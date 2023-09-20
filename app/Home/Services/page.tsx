import { Stack, Typography } from "@mui/material";
import Link from "next/link";

import "./page.css";

const ServicesData = [
  {
    imageUrl: "/Images/serviceHandShake.png",
    serviceName: "Relationship Manager",
  },
  {
    imageUrl: "/Images/SocialNetwork.png",
    serviceName: "Wide Branch Network",
  },
  {
    imageUrl: "/Images/Headset.png",
    serviceName: "Dedicate Helpdesk",
  },
  {
    imageUrl: "/Images/SubmitResume.png",
    serviceName: "Portfolio Restructuring",
  },
];

const Services = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "60px",
        paddingTop: "60px",
        backgroundColor: "#FFF",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#220D4E",
          fontFamily: "Poppins",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "34px",
          marginBottom: "30px",
        }}
      >
        Services
      </Typography>
      <Typography
        variant="h4"
        component={"span"}
        sx={{
          color: "#0A1023",
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "34px",
          marginBottom: "30px",
        }}
        className="Awards-caption"
      >
        Why SBI Cap Securities Stands Out?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#0A1023",
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "34px",
          marginBottom: "60px",
        }}
      >
        Seamless Investing Experience With
      </Typography>
      <div className="Awrad-section-medals-bg-container">
        {ServicesData.map((eachService) => (
          <div className="Awrad-section-medals-container">
            <img
              src={eachService.imageUrl}
              alt="service"
              className="medal-img"
            />
            <Typography
              sx={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "500",
                textAlign: "center",
                lineHeight: "31px",
                marginBottom: "30px",
                marginTop: "20px",
                width: "70%",
              }}
              variant="h6"
            >
              {eachService.serviceName}
            </Typography>
          </div>
        ))}
      </div>
      <div className="Home-page-video-bg-container">
        <div
          className="home-vidoe-img-container"
          style={{
            backgroundImage: 'url("/Images/HomeVideo.png")',
            height: "300px",
          }}
        >
         <video width="640" height="360" controls>
        <source src="https://youtu.be/0cfFB8d_n60?si=YbOKfp3HR4QUVMR7" type="video/mp4" />
      </video>
        </div>
        <div className="home-video-details-container">
          <Typography
            variant="h5"
            sx={{
              color: "#0A1023",
              fontFamily: "Poppins",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "34px",
              textTransform: "capitalize",
            }}
            className="home-page-video-heading"
          >
            investments ka game strong with SBI Securities
          </Typography>
          <Typography variant="body1" className="home-page-video-text">
            #NiveshOnGameOn
          </Typography>

          <Typography variant="body1" className="home-page-video-text">
            Who said investing couldn't be as much fun as cheering for your
            favourite cricket team? Watch our latest #NiveshOnGameOn Anthem
            Video and prepare to invest like never before.
          </Typography>
          <Link href="/MutualFunds">
            <button className="button">Trade Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
