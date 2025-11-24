"use client";
import React, { useState } from "react";
import PageGenTitle from "../PageGenTitle";
import Image from "next/image";
import wingLeft from "@/public/appreciate/wing-left.svg";
import wingRight from "@/public/appreciate/wing-right.svg";
import user1 from "@/public/appreciate/user/user-1.svg";
import user2 from "@/public/appreciate/user/user-2.svg";
import user3 from "@/public/appreciate/user/user-3.svg";
import user4 from "@/public/appreciate/user/user-4.svg";
import user5 from "@/public/appreciate/user/user-5.svg";
import user6 from "@/public/appreciate/user/user-6.svg";

const AppreciatedByExperts = () => {
  const reviewsData = [
    {
      modality: "sleep",
      author: "Dr RTL",
      title: "Most Frequently Used App",
      text: "As a professor, an author, and a consultant, maintaining balance and focus are key to me. A full night sleeping is pretty important, too. I find myself using this app multiple times throughout the day to help with my productivity and at night to help with peaceful sleeping. It has become an critical component for helping maintain my productivity levels.",
    },
    {
      modality: "sleep",
      author: "Dakoda88",
      text: "I have never write a review and felt compelled to tell you this app is incredible. After the first two nights of sleeping with Endel I woke up more calm and remained that way for a lot of the day. The hibernation setting is great for chilling at night before bed. Then switch to the sleep setting. It is really weird to me that this is able to have such an impact on my actual life just using sound. 🤩",
    },
    {
      modality: "sleep",
      author: "wanbunga",
      title: "Helps with my ADHD brain and insomnia",
      text: "All I can say is - wow. I used the app for the first time last night after really struggling to sleep, saw the ad and downloaded it (I usually ignore ads but for some reason the ad on this app really caught my pique). I love how minimal but unique the application is. The moving patterns are beautiful as well. I managed to sleep immediately yesterday and I actually played it throughout the night and had a wonderful night sleep. It helped calm my racing thoughts at night and I was surprised at how easy it was to fall asleep.",
    },
    {
      modality: "sleep",
      author: "Svtton W",
      title: "Highly skeptical, made me a believer",
      text: "I am highly skeptical of anything making claims like this app does, but I tried it and I'm actually blown away to the point where I HAD to leave a review, which I almost never do. I thought best case scenario it may help with my sleep but I was sure it would be minimal or the difference wouldn't be noticeable, but both me and my girl have used it falling asleep for a couple nights in a row now, and all I can say is wow. Fall asleep faster, stay asleep longer, wake up feeling GREAT, and the difference we have felt is truly measurable and more than noticeable, it's profound. Well done",
    },
    {
      modality: "sleep",
      author: "Grzgrzgrx",
      text: "It's like your drawn to sleep by some magical spell, that you cannot resist.",
    },
    {
      modality: "sleep",
      author: "Dakoda88",
      text: "After the first two nights of sleeping with Endel I woke up more calm and remained that way for a lot of the day.",
    },
    {
      modality: "sleep",
      author: "bookworm101254",
      title: "What's wrong with it?",
      text: "I have always had a hard time sleeping, and with me being anemic it makes it harder, and the first time I tried this I had such a good night of sleep! I woke up even before my alarm! I recommend it to anyone and everyone! This app works miracles!",
    },
    {
      modality: "sleep",
      author: "biz/study-guy",
      title: "Perfect sleep sound",
      text: "The sleep sound is perfect. Sleep sounds never work for me, they always end up being more of a distraction. This however is perfect. It starts with a gentle tune to que your brain to relax then proceeds to a very soft white noise—loud enough to break the silence but quiet enough that you don't notice it. It's quite remarkable. My seven year old daughter also sleeps better with this. I highly recommend it for this feature alone. But the Move soundscape is also quite incredible—great for walks when you need to get yourself grounded and centered.",
    },
    {
      modality: "sleep",
      author: "Vonnie&elissaMyfamilyis",
      text: "I have major Sleeping issues but I got Endel. It really helps Me a lot!",
    },
    {
      modality: "sleep",
      author: "Daniel S. Naranjo",
      text: "My sleep has improved. Even my dreams. I use the free version and can't complain about anything. Love the interface and the sound transitions from scenario to scenario.",
    },
    {
      modality: "sleep",
      author: "PandaBear226",
      title: "Must have for ADD/ADHD",
      text: "I initially got this for background noise while working but now it's one of my most used apps. If you have ADD you know the struggle of hating silence but also finding most music/podcasts to be too distracting or hard to listen to. I used to listen to classical music but this is SO much better - just set it and forget it and it's so peaceful and pleasant to have in the background. Now I use it to sleep, alarm wake up, chores, my morning/evening commute - I recommended it to my therapist and she loved it so much she is now recommending to her other patients! Can't thank the developers enough, it's worth every penny!",
    },
    {
      modality: "sleep",
      author: "moonpop",
      text: "I am addicted. Can't sleep right without it.",
    },
    {
      modality: "sleep",
      author: "bookworm101254",
      text: "I have always had a hard time sleeping, and with me being anemic it makes it harder, and the first time I tried this I had such a good night of sleep! I woke up even before my alarm! I recommend it to anyone and everyone! This app works miracles!",
    },
    {
      modality: "sleep",
      author: "VelvetBlackShow",
      title: "I'm speechless",
      text: "I'm diagnosed with borderline insomnia major depression etc Nothing really helps me to relax focus clear my mind or sleep. But this app is making me more than happy. I'm so grateful thank you so much guys!!",
    },
    {
      modality: "sleep",
      author: "OTG Sound",
      title: "Wicked Awesome!",
      text: "I did a trial about 6 months ago and totally lost it in a good way! I was previously having a lot of trouble calming the mind and sleeping. I have also been diagnosed with Bi-Polar, ADHD and PTSD. Sleeping has been a struggle on and off over the years with some more severe phases. I am currently feeeling pretty good and Endel has been one of the many tools in my holistic healing tool box. About 5 months ago I purchased the lifetime membership and I highly recomend it! This is also and maybe even more so amazing for focus!",
    },
    {
      modality: "sleep",
      author: "Izzabetta",
      title: "Best sleep ever",
      text: "I have never taken the time to write a review until now. Endel is a life changer. The sounds are so soothing and can put me in the most relaxed state and help me fall asleep so quickly and easily. I recommend this app all the time to people, especially ones who find falling asleep difficult. Thank you, Endel, I truly love you <3",
    },
    {
      modality: "sleep",
      author: "Catbrain1951",
      text: "As a professional in Applied Neuroscience for 35 years, I feel qualified to describe this as one of, hopefully, many based neuroscience based apps in the future.",
    },
    {
      modality: "sleep",
      author: "PeterOng",
      text: "This app has been life changing for me, helping me sleep better since I found it.",
    },
    {
      modality: "sleep",
      author: "grzgrzgrx",
      title: "Sleep Soundscape is out of this world",
      text: "The app is worth it solely of off sleep and there's so much more aside from relax in my opinion. Like I said seep is next level, never have I felt anything like it. It's like your drawn to sleep by some magical spell, that you cannot resist.",
    },
    {
      modality: "sleep",
      author: "nickn15",
      text: "I got the app with the intent to help my newborn son sleep. Nothing had worked for my son; rain, wind, waterfall, heartbeat and ocean sounds, white, purple, and brown noise, and shushing. I believe the main reason was all the sounds are a repeating loop of some sort. Endel instead tweaks the soundscapes ever so little based on their AI model. This is the part I like about this app.",
    },
    {
      modality: "sleep",
      author: "DogRaptor87",
      text: "I absolutely love this app I've been using this app for the last 5 years, to help me get better sleep at night. The more they improve this app, the more I love it. \"AI lullaby sets me off to sleep with gentle, soothing tones that help blend the background noise into something a little softer. It's my most used app, and my most important app. Thanks Endel :)",
    },
    {
      modality: "sleep",
      author: "wanbunga",
      title: "Helps with my ADHD brain and insomnia",
      text: "All I can say is - wow. I used the app for the first time last night after really struggling to sleep, saw the ad and downloaded it (I usually ignore ads but for some reason the ad on this app really caught my pique). I love how minimal but unique the application is. The moving patterns are beautiful as well. I managed to sleep immediately yesterday and I actually played it throughout the night and had a wonderful night sleep. It helped calm my racing thoughts at night and I was surprised at how easy it was to fall asleep.",
    },
    {
      modality: "sleep",
      author: "ondrasekcoufal",
      title: "It actually works!",
      text: "Really helping me fall asleep, however you need to pay for membership to unlock full features.",
    },
    {
      modality: "sleep",
      author: "Ticktick is best",
      text: "I have searched a lot of focusing musics and apps but when I found this app. It had help me to focus more what I am doing. A huge thanks for creating a masterpiece",
    },
    {
      modality: "sleep",
      author: "_Daniel S. Naranjo_",
      text: "My sleep has improved. Even my dreams.",
    },
    {
      modality: "sleep",
      author: "Christina11414",
      title: "Power nap",
      text: "I love to take a nap with the power nap music. It makes me feel fully recharged after waking me from a nap!",
    },
    {
      modality: "sleep",
      author: "mvainste",
      title: "Saved me",
      text: 'I couldn\'t sleep, could eat or relax. I was super anxious, triggered by a bad experience a few days ago. This saved me. I go to sleep with the "sleep" mode in my AirPods, I relax with the "relax" mode doing sudokus. I\'m just super thankful. It delivers what it says it does.',
    },
    {
      modality: "sleep",
      author: "Lydea Dumbdogs on fortnite",
      title: "Great sleep",
      text: "the sleep feature gets me sleeping in under 10 minutes. You can also use it with the app unopen and when your on a call. Love it !",
    },
    {
      modality: "sleep",
      author: "skwidney",
      title: "EVERY SINGLE DAY",
      text: "I use this app every day. I have tinnitus like a level 8 out of 10, fortunately I manage it mentally pretty well and Endel definitely help. I use Sleep function literally every single night. 365 days a year. I cannot sleep without it. I also use other soundscapes for working on reports, yoga, and walking. I wish I could buy the app and not have a subscription tho.",
    },
    {
      modality: "sleep",
      author: "Everyteardropisawaterfall",
      title: "I never write reviews- you need to read this to believe it.",
      text: "I have a chaotic life. I'm also very adhd (medicated for almost eleven years). This app is running almost all day for me. Always got my air pods in or have it running on my iPad or smart speaker at work. I have small kids and getting them to bed is intense. I don't use this app for them because they don't have speakers in their rooms - but we recently got a puppy. He's been crying ALL night and sleeping ALL day for the last week. We've done all the things. This evening I decided to put some aI lullaby on for him- he's sleeping and I'm not shutting it off at night ever. Endel. You finally got my puppy to sleep. THANKYOU. now I shall stream on my own device so I too, can sleep.",
    },
    {
      modality: "sleep",
      author: "Rasha-tan",
      title: "I never write reviews- you need to read this to believe it.",
      text: "It's the first app I have preferred to dead silence for sleeping.",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const avatars = [user1, user2, user3, user4, user5, user6];

  const mockReviews = reviewsData.map((review, index) => ({
    name: review.author,
    title: review.title,
    review: review.text,
    avatar: avatars[index % avatars.length],
  }));

  return (
    <div>
      <PageGenTitle
        title_part_one="Appreciated by experts."
        title_part_two="Enjoyed by millions."
        description="Endel users across the globe are improving their physical and mental wellbeing with the power of sound."
      />
      <div>
        <div className="flex items-center justify-center gap-6">
          <AwardCard titleOne="Apple Watch" titleTwo="App of the Year 2020" />
          <AwardCard titleOne="App Store" titleTwo="Editors' Choice" />
          <AwardCard titleOne="Google Play" titleTwo="Best of 2021" />
        </div>
        <div className="flex items-center justify-center gap-6 mt-10">
          <AwardCard titleOne="Product Hunt" titleTwo="Golden Kitty 2022" />
          <AwardCard
            titleOne="Microsoft Store Awards"
            titleTwo="2024: Rising Star"
          />
        </div>
      </div>

      <div
        className={`w-[1152px] mt-[64px] mx-auto relative ${
          showMore ? "h-full overflow-visible" : "h-[480px] overflow-hidden"
        }`}
      >
        <div className="w-[1152px] mx-auto columns-3 gap-6">
          {mockReviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              title={review.title}
              review={review.review}
            >
              <Image
                className="w-full h-full"
                src={review.avatar}
                alt={review.name}
              />
            </ReviewCard>
          ))}
        </div>

        <div
          className={`${
            showMore ? "sticky" : "absolute"
          } bottom-0 left-0 flex items-center justify-center w-full h-26 bg-[linear-gradient(0deg,rgb(0,0,0),rgba(0,0,0,0))]`}
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-10 py-2.5 bg-[#262626] hover:bg-[#808080] border-2 border-white hover:border-[#808080] text-white font-medium text-[22px] rounded-xl duration-300 cursor-pointer"
          >
            {showMore ? "Okay, I get the point" : "show more"}
          </button>
        </div>
      </div>
    </div>
  );
};

const AwardCard = ({
  titleOne,
  titleTwo,
}: {
  titleOne: string;
  titleTwo: string;
}) => {
  return (
    <div className="w-[368px] h-[63px] flex justify-between items-center gap-8">
      <Image
        className="w-fit h-full object-contain"
        src={wingLeft}
        alt="wing"
      />
      <p className="w-[248px] leading-[28px] text-[22px] text-center h-full">
        {titleOne} <br /> {titleTwo}
      </p>
      <Image
        className="w-fit h-full object-contain"
        src={wingRight}
        alt="wing"
      />
    </div>
  );
};

const ReviewCard = ({
  name,
  title,
  review,
  children,
}: {
  name: string;
  title?: string;
  review: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full mb-3 break-inside-avoid p-4 rounded-[20px] bg-[linear-gradient(rgb(24,24,24),rgba(0,0,0,0))] flex flex-col gap-3">
      {/* profile */}
      <div className="flex items-center gap-3">
        {/* image */}
        <div className="w-[44px] h-[44px]">{children}</div>
        <div>
          <p className="text-[18px] leading-[24px] text-[#bfbfbf]">{name}</p>
          <div>★★★★★</div>
        </div>
      </div>
      {/* title */}
      {title && (
        <p className="text-[18px] leading-[24px] text-white font-medium">
          {title}
        </p>
      )}
      {/* reviews */}
      <p className="text-[18px] leading-[24px] text-[#bfbfbf]">{review}</p>
    </div>
  );
};

export default AppreciatedByExperts;
