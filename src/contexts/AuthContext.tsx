import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../../firebaseConfig";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    User,
    AuthError
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

type AuthContextType = {
    user: User | null;
    loginWithGoogle: () => Promise<void>;
    loginWithEmail: (email: string, password: string) => Promise<void>;
    signUpWithEmail: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    error: string | null;
    clearError: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function getErrorMessage(error: AuthError): string {
    switch (error.code) {
        case 'auth/invalid-email':
            return 'Invalid email address format.';
        case 'auth/user-disabled':
            return 'This account has been disabled.';
        case 'auth/user-not-found':
            return 'No account found with this email.';
        case 'auth/wrong-password':
            return 'Incorrect password.';
        case 'auth/email-already-in-use':
            return 'An account already exists with this email.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters.';
        case 'auth/popup-closed-by-user':
            return 'Google sign-in was cancelled.';
        case 'auth/network-request-failed':
            return 'Network error. Please check your connection.';
        default:
            return 'Authentication failed. Please try again.';
    }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsInitialized(true);
            // Don't clear error here anymore
        });
        return () => unsubscribe();
    }, []);

    const clearError = () => setError(null);

    const loginWithGoogle = async () => {
        try {
            clearError();
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            const authError = err as AuthError;
            setError(getErrorMessage(authError));
            console.error(err);
        }
    };

    const loginWithEmail = async (email: string, password: string) => {
        try {
            clearError();
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            const authError = err as AuthError;
            setError(getErrorMessage(authError));
            console.error(err);
        }
    };

    const signUpWithEmail = async (email: string, password: string) => {
        try {
            clearError();
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            const authError = err as AuthError;
            setError(getErrorMessage(authError));
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            clearError();
            await signOut(auth);
            console.log("Signed out");
        } catch (err) {
            const authError = err as AuthError;
            setError(getErrorMessage(authError));
            console.error(err);
        }
    };

    if (!isInitialized) {
        return null; // or a loading spinner
    }

    return (
        <AuthContext.Provider 
            value={{ 
                user, 
                loginWithGoogle, 
                loginWithEmail, 
                signUpWithEmail, 
                logout, 
                error,
                clearError 
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}