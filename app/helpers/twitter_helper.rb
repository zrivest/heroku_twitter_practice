def twitter_client
  user = User.find(session[:user_id])
  client = Twitter::Client.new(
    :consumer_key => ENV["CONSUMER_KEY"],
    :consumer_secret => ENV["CONSUMER_SECRET"],
    :oauth_token => user.oauth_token,
    :oauth_token_secret => user.oauth_secret
    )
  client
end
