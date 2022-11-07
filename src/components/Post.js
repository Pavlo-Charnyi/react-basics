import commentsImg from '../assets/comments.svg';
import retweetsImg from '../assets/retweets.svg';
import likesImg from '../assets/likes.svg';
import messageImg from '../assets/message.svg';

function Post({author:{name, nickname, photo}, comments, messages, retweeets, likes, date, content, image}) {
  return (
    <div className="tweet-wrap">
      <div className="tweet-header">
        <img src={photo} alt="" className="avatar" />
        <div className="tweet-header-info">
          {name}
          <span>{date}</span>
          <span>{nickname}</span>
          <p>{content}</p>
        </div>
      </div>
      <div className="tweet-img-wrap">
        <img src={image} alt="" className="tweet-img" />
      </div>

      <div className="tweet-info-counts">
        <div className="comments">
          <img src={commentsImg} alt="comments" />
          <div className="comment-count">{comments}</div>
        </div>

        <div className="retweets">
          <img src={retweetsImg} alt="retweets" />
          <div className="retweet-count">{retweeets}</div>
        </div>

        <div className="likes">
          <img src={likesImg} alt="likes" />
          <div className="likes-count">{likes}</div>
        </div>

        <div className="message">
          <img src={messageImg} alt="message" />
          <div className="messages-count">{messages}</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
