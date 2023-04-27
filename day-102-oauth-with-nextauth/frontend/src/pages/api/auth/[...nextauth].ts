import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
import InstagramProvider from "next-auth/providers/instagram"
import GmailProvider from "next-auth/providers/google"
import TwitchProvider from "next-auth/providers/twitch"
import TwitterProvider from "next-auth/providers/twitter"


export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        InstagramProvider({
            clientId: process.env.INSTAGRAM_ID,
            clientSecret: process.env.INSTAGRAM_SECRET,
        }),
        GmailProvider({
            clientId: process.env.GMAIL_ID,
            clientSecret: process.env.GMAIL_SECRET,
        }),

        TwitchProvider({
            clientId: process.env.TWITCH_ID,
            clientSecret: process.env.TWITCH_SECRET,
        }),

        TwitterProvider({
            clientId: process.env.TWITCH_ID,
            clientSecret: process.env.TWITCH_SECRET,
        }),
    ],
};

export default NextAuth(authOptions)