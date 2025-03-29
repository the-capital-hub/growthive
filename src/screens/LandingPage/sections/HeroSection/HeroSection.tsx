import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      title: "Exceptional Service!",
      content:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      author: "Wade Warren",
      location: "USA, California",
      profileImage: "/profile.png",
    },
    {
      id: 2,
      title: "Efficient and Reliable",
      content:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      author: "Emelie Thomson",
      location: "USA, Florida",
      profileImage: "/profile-1.png",
    },
    {
      id: 3,
      title: "Trusted Advisors",
      content:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      author: "John Mans",
      location: "USA, Nevada",
      profileImage: "/profile-2.png",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-20">
      <div className="w-full items-end gap-[200px] flex">
        <div className="gap-3.5 flex flex-col items-start relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-absolutewhite text-5xl tracking-[0] leading-[72px]">
            What Our Clients Say
          </div>

          <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-lg tracking-[0] leading-[27px]">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </div>

          <div className="relative w-[68px] h-[30px] -top-10 -left-5">
            <div className="absolute w-[30px] h-[30px] top-0 left-0 bg-[url(/group.png)] bg-[100%_100%]" />
            <div className="absolute w-[18px] h-[18px] top-1.5 left-9 bg-[url(/group-1.png)] bg-[100%_100%]" />
            <div className="absolute w-2 h-2 top-[11px] left-[60px] bg-[url(/group-2.png)] bg-[100%_100%]" />
          </div>
        </div>

        <Button
          variant="outline"
          className="px-6 py-[18px] h-auto bg-grey-10 rounded-[10px] border border-solid border-neutral-800"
        >
          <span className="[font-family:'Urbanist',Helvetica] font-medium text-absolutewhite text-lg tracking-[0] leading-[27px]">
            View All Testimonials
          </span>
        </Button>
      </div>

      <div className="flex-col items-start gap-[50px] self-stretch w-full flex">
        <div className="flex items-start gap-[30px] w-full">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex flex-col items-start gap-10 p-[50px] flex-1 bg-grey-08 rounded-xl border border-solid border-neutral-800"
            >
              <CardContent className="p-0 space-y-10 w-full">
                <div className="inline-flex items-start gap-2.5">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="inline-flex items-start gap-2.5 p-2.5 bg-grey-10 rounded-[100px] border border-solid border-neutral-800"
                    >
                      <img
                        className="w-[21.31px] h-[20.36px]"
                        alt="Star rating"
                        src="/shape.svg"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-3.5 w-full">
                  <h3 className="self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-absolutewhite text-2xl tracking-[0] leading-9">
                    {testimonial.title}
                  </h3>
                  <p className="self-stretch [font-family:'Urbanist',Helvetica] font-medium text-absolutewhite text-lg tracking-[0] leading-[27px]">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full">
                  <Avatar className="w-[60px] h-[60px] rounded-none">
                    <AvatarImage
                      src={testimonial.profileImage}
                      alt={testimonial.author}
                      className="object-cover"
                    />
                  </Avatar>
                  <div className="gap-0.5 flex flex-col items-start flex-1">
                    <h4 className="self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-absolutewhite text-xl tracking-[0] leading-[30px]">
                      {testimonial.author}
                    </h4>
                    <p className="self-stretch [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-lg tracking-[0] leading-[27px]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex w-full items-start justify-between pt-5 pb-0 px-0 border-t border-neutral-800">
          <div className="[font-family:'Urbanist',Helvetica] font-medium text-xl tracking-[0] leading-[30px] whitespace-nowrap">
            <span className="text-white">01</span>
            <span className="text-[#999999]"> of 10</span>
          </div>

          <div className="inline-flex items-start gap-2.5">
            <Button
              variant="outline"
              size="icon"
              className="p-3.5 h-auto w-auto rounded-[69px] border border-solid border-neutral-800"
            >
              <ChevronLeftIcon className="w-[30px] h-[30px]" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="p-3.5 h-auto w-auto bg-grey-10 rounded-[69px] border border-solid border-neutral-800"
            >
              <ChevronRightIcon className="w-[30px] h-[30px]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
