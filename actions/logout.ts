"use server"; 

import { signOut } from "@/auth";

export const logoutUser = async () => {
    // Используем опцию redirectTo для чистого серверного перенаправления после выхода
    await signOut({ redirectTo: '/auth/login' });
};
