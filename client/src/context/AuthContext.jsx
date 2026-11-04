import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import API from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const getCurrentUser = async () => {
        try {
            const response = await API.get("/auth/me");

            if (response.data?.success && response.data?.user) {
                setUser(response.data.user);
            } else {
                setUser(null);
            }
        } catch (error) {
            // 401 simply means the user is not logged in.
            if (error.response?.status !== 401) {
                console.error("Get current user error:", error);
            }

            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    const logout = async () => {
        try {
            await API.post("/auth/logout");
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                logout,
                getCurrentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
}