import { TwitterTweetEmbed } from 'react-twitter-embed';

interface EmbedTweetProps {
    tweetId: string;
  }
  
export const EmbedTweet = (props: EmbedTweetProps) => {
    const{tweetId} = props;
    return (
      <TwitterTweetEmbed
        tweetId={tweetId}
        options={{ conversation: 'none' }}
      />
    );
  }