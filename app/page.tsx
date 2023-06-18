"use client"

import React from "react";
import NetWorth from "@/components/elements/cards/networth";
import Transaction from "@/components/elements/cards/transaction";
import TransactionRecent from "@/components/elements/cards/transaction-recent";

export default function IndexPage() {
    return (
        <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="w-full md:w-[50%] md:sticky top-3">
                <NetWorth />
            </div>
            <div className="flex flex-col gap-5 w-full">
                <Transaction />
                <TransactionRecent />
            </div>
        </div>
    );
}