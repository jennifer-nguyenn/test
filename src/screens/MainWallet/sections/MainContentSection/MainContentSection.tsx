import {
  ChevronRightIcon,
  CopyIcon,
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  PlusIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";

export const MainContentSection = (): JSX.Element => {
  // Order data
  const orders = [
    {
      id: "PKF94KFY",
      date: "Aug 14, 2025",
      count: 20,
      tags: [],
    },
    {
      id: "PKF49KFY",
      date: "Aug 18, 2025",
      count: 5,
      tags: ["Payment Plan"],
    },
    {
      id: "PKF54KFZ",
      date: "Aug 20, 2025",
      count: 16,
      tags: ["Waitlist"],
    },
  ];

  // Items data
  const items = [
    {
      title: "Super long name goes here",
      owner: "John Smith",
      seat: "Sec 129, Row 3, Seat 1",
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      title: "Sec 29, Row 9, Seat 8",
      owner: "John Smith",
      seat: "Sec 29, Row 9, Seat 7",
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      title: "Sec 3, Row 5, Seat 12",
      owner: "John Smith",
      seat: "Sec 7, Row 5, Seat 12",
      image: "https://picsum.photos/200/300?random=3",
    },
  ];

  // Action cards data
  const actionCards = [
    {
      title: "Sell",
      description: "Sell tickets at your own price",
      icon: "https://api.iconify.design/heroicons:currency-dollar.svg?color=white",
    },
    {
      title: "Transfers",
      description: "Send tickets & items to anyone",
      icon: "https://api.iconify.design/heroicons:arrow-path.svg?color=white",
    },
    {
      title: "Refund",
      description: "Get your tickets refunded",
      icon: "https://api.iconify.design/heroicons:arrow-uturn-left.svg?color=white",
    },
    {
      title: "Upgrade",
      description: "Available upgrade offers",
      icon: "https://api.iconify.design/heroicons:lock-closed.svg?color=white",
    },
  ];

  // Rewards data
  const rewards = [
    {
      title: "25% discount on any ticket",
      points: "500",
      totalPoints: "500",
      unlocked: true,
      progress: 100,
    },
    {
      title: "Get a free hat",
      points: "400",
      totalPoints: "500",
      unlocked: false,
      progress: 80,
      unlockMessage: "Get 5 more points to unlock",
    },
    {
      title: "75% Off Any Tickets",
      points: "10",
      totalPoints: "20",
      unlocked: false,
      progress: 50,
      unlockMessage: "Get 10 more points to unlock",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-4 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Your Orders Section */}
      <Card className="w-full bg-[#ffffff0d] overflow-hidden">
        <CardHeader className="pt-6 pb-0">
          <div className="flex items-center justify-center gap-2 px-4 md:px-6 py-0 w-full backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
            <h3 className="flex-1 [text-shadow:0px_0px_12px_#000000b2] font-mobile-paragraph-bold text-white">
              Your Orders
            </h3>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <ScrollArea className="w-full">
            <div className="flex items-stretch gap-2">
              {orders.map((order, index) => (
                <Card
                  key={index}
                  className="w-[280px] md:w-[311px] bg-white rounded-2xl flex-shrink-0"
                >
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="flex flex-col justify-between flex-1 gap-4">
                      <div className="flex flex-col items-start gap-2 w-full">
                        <div className="min-h-[32px]">
                          {order.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {order.tags.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  className="px-2 py-1 bg-black text-white rounded-full"
                                >
                                  <span className="font-mobile-paragraph-tiny-bold text-center whitespace-nowrap">
                                    {tag}
                                  </span>
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-start gap-0.5 w-full">
                          <div className="flex flex-col items-start w-full">
                            <div className="font-mobile-paragraph-small-bold text-black">
                              Order ID: {order.id}
                            </div>
                            <div className="font-mobile-paragraph-tiny text-[#111111b2]">
                              {order.date}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-end justify-between w-full">
                        <div className="flex flex-wrap items-center gap-[8px_8px]">
                          <Button
                            variant="link"
                            className="p-0 h-auto font-bold text-black text-xs underline"
                          >
                            Manage Order
                          </Button>
                          {order.tags.includes("Payment Plan") && (
                            <Button
                              variant="link"
                              className="p-0 h-auto font-bold text-black text-xs underline"
                            >
                              Manage Payment Plan
                            </Button>
                          )}
                          {order.tags.includes("Waitlist") && (
                            <Button
                              variant="link"
                              className="p-0 h-auto font-bold text-black text-xs underline"
                            >
                              Manage Waitlist
                            </Button>
                          )}
                        </div>
                        <div className="inline-flex items-center justify-center px-3 py-2 bg-[#f2f4fa] rounded-lg">
                          <div className="font-mobile-paragraph-small-bold text-black text-center whitespace-nowrap">
                            {order.count}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>

        {/* Your Items Section */}
        <div className="flex flex-col items-start gap-2 pt-6 pb-4 px-4 md:px-6 w-full">
          <div className="flex items-center gap-2 w-full">
            <div className="flex flex-col items-start justify-center flex-1">
              <div className="self-stretch [text-shadow:0px_2px_14px_#00000080] font-mobile-paragraph-bold text-white">
                Your Items
              </div>
            </div>
            <div className="inline-flex h-6 items-center justify-end gap-2">
              <div className="font-mobile-paragraph-bold text-white whitespace-nowrap">
                11
              </div>
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          <ScrollArea className="w-full">
            <div className="flex items-start gap-2 px-4">
              {items.map((item, index) => (
                <Card
                  key={index}
                  className="w-[140px] md:w-[167.5px] max-h-[223.33px] bg-white rounded-2xl flex-shrink-0 overflow-hidden"
                >
                  <div className="relative w-full h-[90px] md:h-[111.67px] bg-[#1111111a]">
                    <img
                      className="absolute w-full h-full top-0 left-0 object-cover"
                      alt={item.title}
                      src={item.image}
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-center gap-4 w-full">
                      <div className="flex flex-col items-center justify-center flex-1">
                        <div className="font-mobile-paragraph-small-bold text-black self-stretch line-clamp-2">
                          {item.title}
                        </div>
                        <div className="flex flex-col items-center justify-center w-full self-stretch">
                          <div className="self-stretch font-mobile-paragraph-tiny text-[#111111cc] truncate">
                            {item.owner}
                          </div>
                          <div className="self-stretch font-mobile-paragraph-tiny text-[#111111cc] truncate">
                            {item.seat}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="w-[140px] md:w-[167.5px] px-6 py-4 flex items-center justify-between bg-white-5 rounded-2xl flex-shrink-0">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="flex flex-col items-start pl-0 pr-2 py-0 w-full">
                      <div className="self-stretch font-mobile-paragraph-bold text-white text-center">
                        View all items
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="flex flex-col items-start gap-2 w-full">
            {actionCards.map((card, index) => (
              <Card
                key={index}
                className="p-4 w-full bg-[#ffffff0d] rounded-2xl flex items-center justify-between"
              >
                <div className="flex items-center gap-4 flex-1">
                  <img
                    className="w-6 h-6"
                    alt={`Icons ${card.title.toLowerCase()}`}
                    src={card.icon}
                  />
                  <div className="flex flex-col items-start gap-2 flex-1">
                    <div className="flex flex-col items-start pl-0 pr-2 py-0 w-full">
                      <div className="self-stretch font-mobile-paragraph-bold text-white">
                        {card.title}
                      </div>
                      <div className="self-stretch font-mobile-paragraph-small text-[#ffffffb2]">
                        {card.description}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>

      {/* Rewards Section */}
      <Card className="w-full bg-[#ffffff0d] overflow-hidden">
        <CardHeader className="p-6">
          <div className="flex items-center gap-2 w-full">
            <div className="flex flex-col items-start justify-center flex-1">
              <div className="self-stretch [text-shadow:0px_2px_14px_#00000080] font-mobile-paragraph-bold text-white">
                Rewards
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 pb-4 px-0">
          <div className="flex flex-col w-full items-start gap-4">
            <div className="flex flex-col items-start gap-1 px-6">
              <span className="font-mobile-h2 text-[36px] bg-gradient-to-br from-[rgba(143,6,209,1)] via-[rgba(204,24,166,1)] to-[rgba(252,20,112,1)] bg-clip-text text-transparent">
                10 points
              </span>
              <div className="text-[#ffffffb2] font-mobile-h2">
                8 sales
              </div>
            </div>
          </div>

          <div className="relative w-full h-[229px] overflow-hidden">
            <ScrollArea className="w-full">
              <div className="flex items-center justify-center px-4">
                {rewards.map((reward, index) => (
                  <React.Fragment key={index}>
                    <Card
                      className={`w-[311px] flex-shrink-0 ${reward.unlocked ? "bg-[#ffffff0d]" : "bg-transparent border border-[#ffffff1a]"} rounded-2xl overflow-hidden`}
                    >
                      <CardContent className="p-6 flex flex-col items-start gap-4">
                        <div className="flex items-start justify-between w-full">
                          <Badge
                            className={`px-2 py-1 ${reward.unlocked ? "bg-gradient-to-br from-[rgba(143,6,209,1)] via-[rgba(204,24,166,1)] to-[rgba(252,20,112,1)]" : "bg-[#ffffff0d]"} rounded-full`}
                          >
                            <span
                              className={`font-bold text-xs text-center ${reward.unlocked ? "text-white" : "text-[#ffffffb2]"}`}
                            >
                              {reward.unlocked ? "Unlocked!" : "Locked"}
                            </span>
                          </Badge>
                          <img
                            className="w-6 h-6"
                            alt="Star"
                            src={
                              reward.unlocked
                                ? "https://api.iconify.design/heroicons:star-solid.svg?color=white"
                                : "https://api.iconify.design/heroicons:star.svg?color=white"
                            }
                          />
                        </div>
                        <div className="flex flex-col items-center gap-1 w-full">
                          <div className="self-stretch font-mobile-h4 text-white">
                            {reward.title}
                          </div>
                          <div className="self-stretch h-[18px] font-medium text-[#ffffffb2] text-sm whitespace-nowrap">
                            {reward.unlocked
                              ? `${reward.points} Points`
                              : reward.unlockMessage}
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-end gap-2 w-full">
                          <div className="flex items-center gap-3 w-full">
                            <div className="flex-1 h-2 bg-[#ffffff0d] rounded-[100px] overflow-hidden">
                              <Progress
                                value={reward.progress}
                                className="h-2 rounded-[100px] bg-gradient-to-br from-[rgba(143,6,209,1)] via-[rgba(204,24,166,1)] to-[rgba(252,20,112,1)]"
                              />
                            </div>
                            <div className="inline-flex items-center">
                              <div className="font-medium text-[#ffffffb2] text-sm text-right whitespace-nowrap">
                                {reward.points}/{reward.totalPoints}
                              </div>
                              <div className="font-medium text-[#ffffffb2] text-sm text-right whitespace-nowrap">
                                pts
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    {index < rewards.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="h-auto mx-1"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="absolute w-14 h-2 top-[205px] left-36 rounded-lg overflow-hidden">
              <div className="inline-flex items-start gap-2 relative left-2">
                <div className="w-2 h-2 bg-white rounded" />
                <div className="w-2 h-2 bg-white rounded opacity-30" />
                <div className="w-2 h-2 bg-white rounded opacity-30" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 px-4 w-full">
            <Button className="w-full bg-[#ffffff0d] rounded-lg text-white font-mobile-paragraph-small-bold">
              My points
            </Button>
            <Button className="w-full bg-[#ffffff0d] rounded-lg text-white font-mobile-paragraph-small-bold">
              Points per ticket
            </Button>
            <Button className="w-full bg-[#ffffff0d] rounded-lg text-white font-mobile-paragraph-small-bold">
              Leaderboard
            </Button>
            <Button className="w-full bg-[#ffffff0d] rounded-lg text-white font-mobile-paragraph-small-bold">
              FAQ&apos;s
            </Button>
            <Button className="w-full bg-gradient-to-br from-[rgba(143,6,209,1)] via-[rgba(204,24,166,1)] to-[rgba(252,20,112,1)] rounded-lg text-white font-mobile-paragraph-small-bold">
              <img
                className="w-4 h-4"
                alt="Icons copy link"
                src="https://api.iconify.design/heroicons:link.svg?color=white"
              />
              Share link with friends
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};