"use server"; 

import { signOut } from "@/auth";

import { redirect } from 'next/navigation';

export const logoutUser = async () => {
    await signOut();
    
    redirect('/auth/login'); 
};