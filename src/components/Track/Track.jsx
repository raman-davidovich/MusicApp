import style from "./track.module.scss";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";

const Track = (track) => {
  const { id, src, preview, title, artists, duration } = track;
  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={style.track}>
      <IconButton>
        <PlayArrow />
      </IconButton>
      <img
        className={style.preview}
        src={preview}
        alt={`Song ${title} by ${artists}`}
      />
      <div className={style.credits}>
        <strong>{title}</strong>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  );
};

export default Track;
