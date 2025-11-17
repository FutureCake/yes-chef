
export type UserType = "business" | "individual";

export interface UserAccount {
    email: string;
    id: string;
    name: string;
    userType: UserType;
}