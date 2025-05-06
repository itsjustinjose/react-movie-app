// Mock implementation - replace with your actual authentication API calls
export const signIn = async (credentials: SignInFormData): Promise<void> => {
    // In a real app, this would call your backend API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.email === "user@example.com" && credentials.password === "password") {
          // Mock successful sign-in
          localStorage.setItem("isAuthenticated", "true");
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };
  
  export const isAuthenticated = (): boolean => {
    return localStorage.getItem("isAuthenticated") === "true";
  };
  
  export const signOut = (): void => {
    localStorage.removeItem("isAuthenticated");
  };