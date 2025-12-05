import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
    getUserById,
} from "@/data/user";

export const { auth, handlers, signIn, signOut } = NextAuth({
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },

        async session({ session, token }) {
            if (token?.id) {
                session.user.id = token.id as string;
            }
            return session;
        },

        async authorized({ auth }) {
            const user = auth?.user;

            // FIX: ensure user ID exists
            if (!user?.id) {
                return false;
            }

            // FIX: `user.id` is always valid from here
            const existingUser = await getUserById(user.id);

            if (!existingUser?.emailVerified) {
                return false;
            }

            return true;
        },
    },
    ...authConfig,
}); 




// import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { db } from "@/lib/db";
// import authConfig from "@/auth.config";
// import { getUserById } from "@/data/user";
// // import type DefaultSession, UserRole, etc. если нужно, но лучше это в отдельный types.js

// export const {
//     handlers: { GET, POST },
//     auth,
//     signIn,
//     signOut,
// } = NextAuth({
//     pages: {
//         signIn: "/auth/login",
//         error: "/auth/error",
        
//     },
//     events: {
//         async linkAccount ({ user }) {
//             await db.user.update({
//                 where: { id: user.id },
//                 data: { emailVerified: new Date() }
//             })
//         }
//     },
//     callbacks: {
//         async signIn({user,account}) {
//             if (account?.provider !== "creadentials") {
//                 return true;
//             };
            
//             const existingUser = await getUserById(user.id);
//             if (!existingUser?.emailVerified) return false;
//             return true;
//         },
//         async session({ token,session }){
//             if (token.sub && session.user) {
//                 session.user.id = token.sub;
//             }
//             if (token.role && session.user){
//                 session.user.role = token.role;
//             }
//             return session;
//         },
//         async jwt({ token }){
//             if (!token.sub) return token;
//             const existingUser = await getUserById(token.sub);
//             if (!existingUser) return token;
//             token.role = existingUser.role;
//             return token;
//         }
//     },
//     adapter: PrismaAdapter(db),
//     session: { strategy: "jwt" },
//     ...authConfig,
// });

