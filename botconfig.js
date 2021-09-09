module.exports = {
  Admins: ["704285324905283654"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/WEPdj8peFV", //Support Server Link
  Token: process.env.Token || "NzQ0MjA5NzkwODg4MzEyOTUz.Xzf5YA.3HxiT22pkNvWdpRJJTGdnAzpaow", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "744209790888312953", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "fe6152cf78a74194c2f9f103040baced4c9717b30a756d43914d631186786791", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Nando Itu Ganteng Banget", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  Lavalink: {
    id: "Main",
    host: "lavalink.darrennathanael.com",
    port: 2095,
    pass: "whatwasthelastingyousaid", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "7e44affcfdbf4ee68e31177486694363", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "f7043c077ebc4af4aae34a14af08ad45", //Spotify Client Secret
  },
};
