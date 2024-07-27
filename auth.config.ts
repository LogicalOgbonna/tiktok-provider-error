import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";
import Tiktok from "next-auth/providers/tiktok";
import Facebook from "next-auth/providers/facebook";

import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Tiktok({
      clientId: process.env.TIKTOK_CLIENT_ID,
      clientSecret: process.env.TIKTOK_CLIENT_SECRET,
      issuer: "https://www.tiktok.com",
      // token: {
      //   url: "https://open-api.tiktok.com/oauth/access_token/",
      // },
      // authorization: {
      //   // params: {
      //   //   scope: "user.info.stats,user.info.profile,video.list",
      //   // },
      // },
      // userinfo: "https://open-api.tiktok.com/user/info/",
      profile(profile) {
        return {
          profile,
          id: profile?.open_id,
        };
      },
    }),
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
