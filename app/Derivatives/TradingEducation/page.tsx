import { Stack, Typography } from "@mui/material";

import "./page.css";

const TradingEducation = () => {
  return (
    <Stack className="TardingEductaion-section-bg-container">
      <Stack sx={{ textAlign: "center", alignItems: "center", gap: "20px" }}>
        <Typography
          variant="body2"
          sx={{
            color: "#00C2FF",
            textalign: "center",
            fontfamily: "Poppins",
            fontstyle: "normal",
            fontweight: "500",
            lineheight: "31.2px",
          }}
          className="TardingEductaion-section-sub-heading"
        >
          Trading education with SBI
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#FFF",
            textalign: "center",
            fontfamily: "Poppins",
            fontstyle: "normal",
            fontweight: "700",
            textTransform: "capitalize",
          }}
          className="TardingEductaion-section-heading"
        >
          Learn the art of investing anywhere & everywhere
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "#F2F2F2",
            textalign: "center",
            fontfamily: "Poppins",
            fontstyle: "normal",
            fontweight: "700",
            textTransform: "capitalize",
            lineHeight: "normal",
          }}
        >
          Full range of video and textual material available for your to learn
        </Typography>
      </Stack>
      <div className="TardingEductaion-section-imgs-bg-container">
        <Stack className="TardingEductaion-section-img-container">
          <img
            src="/Images/YouTube.png"
            alt="youtube"
            className="TardingEductaion-section-img"
          />
        </Stack>
        <Stack className="TardingEductaion-section-img-container">
          <img
            src="/Images/linkedin.png"
            alt="youtube"
            className="TardingEductaion-section-img"
          />
        </Stack>
        <Stack className="TardingEductaion-section-img-container">
          <img
            src="/Images/Quora.png"
            alt="youtube"
            className="TardingEductaion-section-img"
          />
        </Stack>
        <Stack className="TardingEductaion-section-img-container">
          <img
            src="/Images/PDF.png"
            alt="youtube"
            className="TardingEductaion-section-img"
          />
        </Stack>
      </div>
      <div className="TardingEductaion-section-video-container">
        <img
          src="/Images/PlayButton.png"
          className="TardingEductaion-section-video-paly-btn"
        />
      </div>
    </Stack>
  );
};

export default TradingEducation;
