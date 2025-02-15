"use client";
import React from "react";
import planData from "@/utils/planData";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Upgrade() {
  const router = useRouter();
  return (
    <div className="p-10 text-center">
      <h2 className="font-bold text-3xl">Upgrade</h2>
      <p className="text-gray-500 mt-2">
        Upgrade to monthly plan to access unlimited mock interview
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto text-left">
        {planData.map((plan) => (
          <div
            key={plan.id}
            className="border rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <h2 className="mt-3 text-4xl font-bold">
              {plan.cost}$<span className="text-lg font-normal"> /month</span>
            </h2>
            <ul className="mt-5 space-y-2 text-lg">
              {plan.offering.map((offer, index) => (
                <li
                  key={index}
                  className={
                    offer.value.includes("❌") ? "text-red-500" : "text-black"
                  }
                >
                  {offer.value}
                </li>
              ))}
            </ul>
            <div className="mt-6 my-3">
              {plan.cost == 0 ? (
                <Button
                  variant="outline"
                  onClick={() => router.replace("/dashboard")}
                  className="mt-6 px-12 py-2 rounded-full text-primary border-primary hover:bg-primary hover:text-white transition"
                >
                  Get Started
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => router.replace(plan.paymentLink)}
                  className="mt-6 px-12 py-2 rounded-full text-primary border-primary hover:bg-primary hover:text-white transition"
                >
                  Get Started
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upgrade;
