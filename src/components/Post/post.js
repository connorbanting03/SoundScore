import './post.css';
import ironMan from '../Images/ironman.jpeg'
import Like from '../Images/Like.jpg'
import Comment from '../Images/Comment.png'


function Post({embededURL}) {
  return (
    <div className="instagram-post">
    {}
    <div className="user-info">
      <img
        src={ironMan} 
        alt="Profile Pic"
        className="profile-pic"
      />
      <span className="username">Connorbanting03</span>
    </div>

    {/* Spotify Embed */}
    <iframe
      title="Spotify Embed: Recommendation Playlist"
      src={embededURL}
      width="100%"
      height="360"
      style={{ minHeight: '360px' }}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />

    {/* Bottom section with likes and comments */}
    <div className="likes-comments">
        <button className="likes-button">
          <img src={Like} alt="Like" />
        </button>
        <span className="likes-count"></span>
        <button className="comments-button">
          <img src={Comment} alt="Comment" />
        </button>
      </div>
  </div>
  );
}

export default Post;