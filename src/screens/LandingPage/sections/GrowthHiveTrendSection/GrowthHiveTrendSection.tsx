import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";

export const GrowthHiveTrendSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[26px] relative">
      <div className="inline-flex items-center gap-1.5">
        <span className="font-['Outfit',Helvetica] font-normal text-white text-xl text-center leading-[18px] whitespace-nowrap">
          More than
        </span>

        <Badge className="bg-[#ffffff01] text-[#ffc610] px-1.5 py-1 rounded-lg shadow-[0px_24px_24px_-12px_#1118270a,0px_12px_12px_-6px_#1118270a,0px_6px_6px_-3px_#1118270a,0px_3px_3px_-1.5px_#1118270a,0px_1px_1px_-0.5px_#1118270a,0px_0px_0px_1px_#1118271a] backdrop-blur-sm">
          <span className="font-['Outfit',Helvetica] font-normal text-xl leading-[18px] whitespace-nowrap">
            15k companies
          </span>
        </Badge>

        <span className="font-['Outfit',Helvetica] font-normal text-white text-xl text-center leading-[18px] whitespace-nowrap">
          are with us
        </span>
      </div>

      <Card className="flex items-center justify-center relative w-full h-[91px] bg-[#00000005] border-[#ffffff03] shadow-[0px_10px_20px_#ead01321] backdrop-blur-[3.5px]">
        <img
          className="w-[1512px] h-9"
          alt="Company logos"
          src="/mask-group.svg"
        />
      </Card>
    </section>
  );
};
