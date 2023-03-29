import { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { EmbedTweet } from "../embedTweet/EmbedTweet";
import { useDispatch, useSelector } from "react-redux";
import "./homeContent.scss";
import { checkStatus } from "src/modules/home/actions";
import Lottie from "react-lottie";
import LoadingWhite from "src/animations/LoadingWhite.json";

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingWhite,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const IconStatus = () => {
  const dispatch = useDispatch();
  const { data: dataCode } = useSelector((state: any) => state.checkStatus);

  useEffect(() => {
    dispatch(checkStatus());
  }, [dispatch]);

  if (dataCode === true) {
    return (
      <p>
        Backend service status: <FaCircle color="green" />
      </p>
    );
  } else if (dataCode === false) {
    return (
      <p>
        Backend service status: <FaCircle color="red" />
      </p>
    );
  } else {
    return (
      <p>
        Backend service status:{" "}
        <Lottie options={defaultOptions} height={30} width={30} />
      </p>
    );
  }
};

export default IconStatus;

export function HomeContent() {
  return (
    <main className="container">
      <div className="left-column">
        <div className="banner">
          <IconStatus />
        </div>
      </div>
      <div className="right-column">
        <div className="news-feed">
          <h2>News Feed</h2>
          <ul>
            <li>
              <EmbedTweet tweetId="1633520456258179075" />
            </li>
            <li>
              <EmbedTweet tweetId="1638301207016927232" />
            </li>
            <li>
              <EmbedTweet tweetId="1638230506176417792" />
            </li>
          </ul>
        </div>
      </div>
      <div className="emptyColumn">

      </div>
    </main>
  );
}
