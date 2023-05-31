import { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "./homeContent.scss";
import { checkStatus } from "src/modules/home/actions";
import Lottie from "lottie-react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import LoadingWhite from "src/animations/LoadingWhite.json";
import { EmbedTweet } from "../embedTweet/EmbedTweet";

export const IconStatus = () => {
  const dispatch = useDispatch();
  const { data: dataCode } = useSelector((state: any) => state.checkStatus);
  const size = 30;

  useEffect(() => {
    dispatch(checkStatus());
  }, [dispatch]);

  if (dataCode === true) {
    return (
      <div className="bannerContent">
        <p>Backend service status: </p>
        <FaCircle color="green" />
      </div>
    );
  } else if (dataCode === false) {
    return (
      <div className="bannerContent">
        <p>Backend service status: </p>
        <FaCircle color="red" />
      </div>
    );
  } else {
    return (
      <div className="bannerContent">
        <p>Backend service status: </p>
        <div style={{ height: size, width: size }}>
          <Lottie
            autoplay={true}
            loop={true}
            rendererSettings={{
              preserveAspectRatio: "xMidYMid slice",
            }}
            animationData={LoadingWhite}
          />
        </div>
      </div>
    );
  }
};

export default IconStatus;

export function HomeContent() {
  return (
    <>
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
        <div className="emptyColumn"></div>
      </main>
    </>
  );
}
