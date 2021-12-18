function Soundcloud() {
  return (
    <div className="soundcloud">
      <iframe
        title="soundcloud-title"
        id="soundcload" 
        width="100%" 
        height="640" 
        scrolling="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/737491290&color=%23832d2b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </div>
  );
}

export default Soundcloud;
