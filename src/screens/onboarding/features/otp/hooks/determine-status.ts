import { MutationStatus, QueryStatus } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useDetermineStatus(auth: MutationStatus, getUser: QueryStatus, updateUser: MutationStatus): MutationStatus {

    const [status, setStatus] = useState<MutationStatus>("idle");

    useEffect(() => {

        if (auth === "success" && (getUser === "success" || updateUser === "success")) {
            setStatus("success");
            return;
        }

        if ([auth, getUser, updateUser].includes("error")) {
            setStatus("error");
            return;
        }

        if ([auth, getUser, updateUser].includes("pending")) {
            setStatus("pending");
            return;
        }

        if ([auth, getUser, updateUser].every(status => status === "idle")) {
            setStatus("idle");
            return;
        }

        setStatus("idle");

    }, [auth, getUser, updateUser]);

    return status;
}